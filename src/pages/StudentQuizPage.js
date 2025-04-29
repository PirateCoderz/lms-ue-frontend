import React, { useState, useEffect } from 'react';
import {
  Container, Typography, TextField, Grid, Button, MenuItem
} from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function StudentQuizPage() {
  const user = useSelector((s) => s?.user?.data);
  const [courses, setCourses] = useState(["Mathematics 101", "History 101"]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [quizzes, setQuizzes] = useState([]);

  const fetchCourses = () => {
    setCourses(user?.user?.courseName || []);
  };

  const fetchQuizzesByCourse = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/quiz/getQuizzesByCourse', {
        course: selectedCourse,
      });
      setQuizzes(response?.data || []);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  useEffect(() => {
    fetchCourses();
  }, [user?.user?.courseName]);

  useEffect(() => {
    if (selectedCourse) {
      fetchQuizzesByCourse();
    }
  }, [selectedCourse]);

  const isQuizExpired = (endTime) => {
    if (!endTime) return false;
    return new Date() > new Date(endTime);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Quizzes
      </Typography>

      {/* Select Course */}
      <TextField
        select
        label="Select Course"
        variant="outlined"
        fullWidth
        value={selectedCourse}
        onChange={handleCourseChange}
        sx={{ mb: 4 }}
      >
        {courses?.map((course, index) => (
          <MenuItem key={index} value={course}>
            {course}
          </MenuItem>
        ))}
      </TextField>

      {/* Display Quizzes */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Quizzes for {selectedCourse}
      </Typography>

      {quizzes.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No quizzes available.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {quizzes.map((quiz) => (
            <Grid item xs={12} sm={6} md={4} key={quiz._id}>
              <div
                style={{
                  border: '1px solid #ddd',
                  padding: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6">{quiz.title}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Course: {quiz.course}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Start: {quiz.startTime ? new Date(quiz.startTime).toLocaleString() : 'N/A'}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  End: {quiz.endTime ? new Date(quiz.endTime).toLocaleString() : 'N/A'}
                </Typography>

                {/* Show Attempt Button or Time Passed */}
                {isQuizExpired(quiz.endTime) ? (
                  <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                    Quiz Time Passed
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, color: 'blue', '&:hover': { color: 'white' } }}
                    href={quiz.googleFormLink}
                    target="_blank"
                  >
                    Attempt Quiz
                  </Button>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
