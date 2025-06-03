import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Stack,
  CircularProgress,
  Box,
  Paper,
  Card,
  CardContent,
  CardActions,
  Link,
} from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export default function StudentsSingleAssignmentPage() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [file, setFile] = useState(null);
  const [studentSubmission, setStudentSubmission] = useState(null);
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const user = useSelector((s) => s?.user?.data);

  // Fetch assignment data
  const fetchAssignment = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/assignment/getAssignmentById/${id}`);
      setAssignment(response.data);
    } catch (error) {
      console.error('Error fetching assignment:', error);
      setErrorMessage('Error fetching assignment details.');
      setLoading(false);
    }
  };

  // Check if student has already submitted
  const checkStudentSubmission = () => {
    if (assignment && user?.user?._id) {
      const submission = assignment.st_assignments.find(
        (sub) => sub.studentId._id === user.user._id // updated to match your response structure
      );
      if (submission) {
        setStudentSubmission(submission);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, [id]);

  useEffect(() => {
    if (assignment && user?.user?._id) {
      checkStudentSubmission();
    }
  }, [assignment, user]);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage('Please select a file before submitting.');
      return;
    }

    const formData = new FormData();
    formData.append('assignment', file);

    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:5000/api/assignment/submit/${user.user._id}/${id}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setStatus('Assignment uploaded successfully!');
      setErrorMessage('');
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your assignment has been uploaded successfully.',
        confirmButtonText: 'OK',
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Error submitting assignment:', error);
      setErrorMessage('Error uploading the assignment.');
    } finally {
      setLoading(false);
    }
  };

  if (!assignment || !user?.user?._id || loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 10 }}>
        <CircularProgress />
        <Typography variant="body2" mt={2}>
          Loading assignment...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Main Assignment Info Card */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {assignment.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {assignment.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Due Date: {new Date(assignment.dueDate).toLocaleDateString()}
          </Typography>
          {assignment.course && (
            <Typography variant="subtitle2" mt={1} color="text.secondary">
              Course: {assignment.course}
            </Typography>
          )}
        </CardContent>
      </Card>

      {/* If student has submitted */}
      {studentSubmission ? (
        <Card variant="outlined" sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Your Submission
          </Typography>
          <Typography>Status: {studentSubmission.status}</Typography>
          <Typography>Marks: {studentSubmission.marks !== null ? studentSubmission.marks : 0}</Typography>
          <Typography>Feedback: {studentSubmission.feedback || 'No feedback'}</Typography>
          <Button
            variant="outlined"
            href={`http://localhost:5000${studentSubmission.assignment}`}
            target="_blank"
            sx={{ mt: 2 }}
          >
            Open Submitted Assignment
          </Button>
        </Card>
      ) : (
        // Upload Form Card
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Upload Your Assignment
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                type="file"
                fullWidth
                onChange={handleFileChange}
                inputProps={{ accept: '.pdf, .docx, .txt' }}
                sx={{
                  '& .MuiInputBase-root': { color: 'blue' },
                  '&:hover': { color: 'white' },
                }}
              />

              {errorMessage && (
                <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                  {errorMessage}
                </Typography>
              )}

              {status && (
                <Typography color="primary" variant="body2" sx={{ mb: 2 }}>
                  {status}
                </Typography>
              )}

              {loading && <CircularProgress sx={{ mb: 2 }} />}

              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, color: 'blue', '&:hover': { color: 'white' } }}
                type="submit"
                disabled={loading}
              >
                Submit Assignment
              </Button>
            </Stack>
          </form>
        </Paper>
      )}
    </Container>
  );
}
