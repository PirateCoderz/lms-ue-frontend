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
    }
  };

  // Check if student has already submitted
  const checkStudentSubmission = () => {
    if (assignment && user?.user?._id) {
      const submission = assignment.st_assignments.find(
        (sub) => sub.studentId.toString() === user.user._id
      );
      if (submission) {
        setStudentSubmission(submission);
      }
      setLoading(false);
    }
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage('Please select a file before submitting.');
      return;
    }

    const formData = new FormData();
    formData.append('assignment', file); // 👈 keep this as 'assignment'

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

  // Initial fetch
  useEffect(() => {
    fetchAssignment();
  }, [id]);

  // Wait for both user and assignment before checking submission
  useEffect(() => {
    if (assignment && user?.user?._id) {
      checkStudentSubmission();
    }
  }, [assignment, user]);

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
    <Container>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {assignment.title}
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        {assignment.description}
      </Typography>

      <Typography variant="body2" sx={{ mb: 4 }}>
        Due Date: {new Date(assignment.dueDate).toLocaleDateString()}
      </Typography>

      {studentSubmission ? (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your Submission
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Status: {studentSubmission.status}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Marks: {studentSubmission.marks !== null ? studentSubmission.marks : 0}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Feedback: {studentSubmission.feedback || 'No feedback'}
          </Typography>
          <Button
            variant="outlined"
            href={`http://localhost:5000${studentSubmission.assignment}`}
            target="_blank"
          >
            View Submitted File
          </Button>
        </Paper>
      ) : (
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
      )}
    </Container>
  );
}
