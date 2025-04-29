import React, { useEffect, useState } from 'react';
import { Typography, Button, TextField, Container, Grid, Stack } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

export default function TeacherCourseMaterialPage() {
  const user = useSelector((s) => s?.user?.data);
  const [materials, setMaterials] = useState([]);  // store all materials
  const [showForm, setShowForm] = useState(false);
  const [newMaterial, setNewMaterial] = useState({
    fileName: '',
    course: '',
  });
  const [file, setFile] = useState(null);  // State to store file

  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get('course');  // get course parameter from URL

  // Fetch course materials based on courseParam
  const fetchMaterials = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/material/getMaterialsByCourse/`,
        { course: courseParam }
      );
      console.log(response.data); // Debugging: Check the response data
      setMaterials(response.data || []);  // Set the fetched data
    } catch (error) {
      console.error('Error fetching course materials:', error);
    }
  };

  // Handle file change (when user selects a file)
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);  // Store the file object
  };

  // Create a new material with file upload
  const createMaterial = async () => {
    const formData = new FormData();
    formData.append('fileName', newMaterial.fileName);  // Send file name
    formData.append('course', courseParam);  // Send course info
    formData.append('file', file);  // Append file to form data

    try {
      const response = await axios.post(
        `http://localhost:5000/api/material/createMaterial`,
        formData, {
        headers: {
          "Content-Type": "multipart/form-data",  // Required for file upload
        }
      }
      );
      console.log(response.data);
      setMaterials([...materials, response?.data?.data]);  // Update the materials list
      setNewMaterial({ fileName: '', course: courseParam });  // Reset the form fields
      setFile(null);  // Reset file input after successful upload
      setShowForm(false);  // Hide the form after submission
    } catch (error) {
      console.error('Error creating course material:', error);
    }
  };

  // Delete a course material
  const deleteMaterial = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/material/deleteMaterialById/${id}`);
      setMaterials(materials.filter((material) => material._id !== id));  // Remove from the UI
    } catch (error) {
      console.error('Error deleting course material:', error);
    }
  };

  // Fetch materials when the component loads
  useEffect(() => {
    fetchMaterials();
  }, [courseParam]);  // Dependencies: fetch when courseParam changes

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Course Materials for {courseParam}
      </Typography>

      {/* Add Material Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 4, color: 'blue', '&:hover': { color: 'white' } }}
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? 'Cancel' : 'Add Course Material'}
      </Button>

      {/* Form to Create Material */}
      {showForm && (
        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <TextField
                label="Material File Name"
                variant="outlined"
                fullWidth
                value={newMaterial.fileName}
                onChange={(e) => setNewMaterial({ ...newMaterial, fileName: e.target.value })}
              />
              {/* File upload input */}
              <input
                type="file"
                onChange={handleFileChange}  // Handle file change
                accept="application/pdf,application/msword"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={createMaterial}
                sx={{ color: 'blue' }}
              >
                Create Material
              </Button>
            </Stack>
          </Grid>
        </Grid>
      )}

      {/* Display Course Materials */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        All Course Materials
      </Typography>

      <Grid container spacing={3}>
        {materials.length === 0 ? (
          <Typography variant="body1" color="textSecondary">
            No course materials found for {courseParam}.
          </Typography>
        ) : (
          materials.map((material) => (
            <Grid item xs={12} sm={6} md={4} key={material._id}>
              <div
                style={{
                  border: '1px solid #ddd',
                  padding: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6">{material.fileName}</Typography> {/* Show filename */}
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Course: {material.course}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, color: 'white', '&:hover': { color: 'white' } }}
                  href={`http://localhost:5000${material.link}`}  // Display the link to the uploaded file
                  target="_blank"
                >
                  View Material
                </Button>
                {/* Delete Button */}
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ mt: 2 }}
                  onClick={() => deleteMaterial(material._id)}  // Call delete function
                >
                  Delete Material
                </Button>
              </div>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
