import React, { useEffect, useState } from 'react';
import { Typography, Button, TextField, Container, Grid, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function StudentCourseMaterialPage() {
  const user = useSelector((s) => s?.user?.data);  // Fetch user data
  console.log(user?.user);

  const [materials, setMaterials] = useState([]);
  const [courses, setCourses] = useState(["Mathematics 101", "History 101"]);  // Default fallback
  const [selectedCourse, setSelectedCourse] = useState('');

  // Fetch courses from user data
  const fetchCourses = () => {
    console.log(user?.user);
    setCourses(user?.user?.courseName || []);  // Set the student's courses
  };

  // Fetch materials based on selected course
  const fetchMaterialsByCourse = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/material/getMaterialsByCourse', {
        course: selectedCourse,
      });
      console.log(response?.data);
      setMaterials(response?.data || []);
    } catch (error) {
      console.error("Error fetching materials:", error);
    }
  };

  // Handle course change
  const handleCourseChange = (event) => {
    console.log(event.target.value);
    setSelectedCourse(event.target.value);
  };

  useEffect(() => {
    fetchCourses();  // Fetch student's courses when page loads
  }, [user?.user?.courseName]);

  useEffect(() => {
    if (selectedCourse) {
      fetchMaterialsByCourse();  // Fetch materials when a course is selected
    }
  }, [selectedCourse]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Course Materials
      </Typography>

      {/* Select Course */}
      <TextField
        select
        label="Select Course"
        variant="outlined"
        fullWidth
        value={selectedCourse}
        onChange={handleCourseChange}
      >
        {courses?.map((course, index) => (
          <MenuItem key={index} value={course}>
            {course}
          </MenuItem>
        ))}
      </TextField>

      {/* Display Materials for selected course */}
      <Typography variant="h6" sx={{ mb: 2, mt: 3 }}>
        Materials for {selectedCourse}
      </Typography>

      {materials.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No materials found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {materials.map((material) => (
            <Grid item xs={12} sm={6} md={4} key={material?._id}>
              <div
                style={{
                  border: '1px solid #ddd',
                  padding: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6">{material?.fileName}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Course: {material?.course}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, color: 'white', '&:hover': { color: 'white' } }}
                  href={`http://localhost:5000${material?.link}`} // Open material in new tab
                  target="_blank"
                >
                  View Material
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
