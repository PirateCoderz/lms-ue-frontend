import React, { useEffect, useState } from 'react';
import { Typography, Button, TextField, Container, Stack, Grid } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';

export default function TeacherQuizzesPage() {
  const user = useSelector((s) => s?.user?.data);
  const [quizzes, setQuizzes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newQuiz, setNewQuiz] = useState({
    title: '',
    googleFormLink: '',
    course: '',
    startTime: '',
    endTime: '',
  });

  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get('course');

  const fetchQuizzes = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/quiz/getQuizzes/${user?.user?._id}`);
      setQuizzes(response.data || []);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };

  const createQuiz = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/quiz/createQuiz/${user?.user?._id}`, newQuiz);
      setQuizzes([...quizzes, response.data]);
      setNewQuiz({ title: '', googleFormLink: '', course: courseParam, startTime: '', endTime: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Error creating quiz:', error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
    setNewQuiz((prev) => ({ ...prev, course: courseParam }));
  }, [user, courseParam]);

  // Filter quizzes for the selected course
  const filteredQuizzes = quizzes.filter((quiz) => quiz.course === courseParam);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Quizzes for {courseParam}
      </Typography>

      {/* Add Quiz Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 4, color: 'blue', '&:hover': { color: 'white' } }}
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? 'Cancel' : 'Add Quiz'}
      </Button>

      {/* Form to Create Quiz */}
      {showForm && (
        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <TextField
                label="Quiz Title"
                variant="outlined"
                fullWidth
                value={newQuiz.title}
                onChange={(e) => setNewQuiz({ ...newQuiz, title: e.target.value })}
              />
              <TextField
                label="Google Form Link"
                variant="outlined"
                fullWidth
                value={newQuiz.googleFormLink}
                onChange={(e) => setNewQuiz({ ...newQuiz, googleFormLink: e.target.value })}
              />
              <TextField
                label="Start Time"
                type="datetime-local"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={newQuiz.startTime}
                onChange={(e) => setNewQuiz({ ...newQuiz, startTime: e.target.value })}
              />
              <TextField
                label="End Time"
                type="datetime-local"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={newQuiz.endTime}
                onChange={(e) => setNewQuiz({ ...newQuiz, endTime: e.target.value })}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={createQuiz}
                sx={{ color: 'blue' }}
              >
                Create Quiz
              </Button>
            </Stack>
          </Grid>
        </Grid>
      )}

      {/* Display Filtered Quizzes */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        All Quizzes
      </Typography>

      <Grid container spacing={3}>
        {filteredQuizzes.length === 0 ? (
          <Typography variant="body1" color="textSecondary">
            No quizzes found for {courseParam}.
          </Typography>
        ) : (
          filteredQuizzes.map((quiz) => (
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
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Course: {quiz.course}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Start: {quiz.startTime ? new Date(quiz.startTime).toLocaleString() : 'N/A'}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  End: {quiz.endTime ? new Date(quiz.endTime).toLocaleString() : 'N/A'}
                </Typography>
                <Link to={`/dashboard_Teacher/quiz/${quiz._id}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, color: 'blue', '&:hover': { color: 'white' } }}
                  >
                    View Quiz
                  </Button>
                </Link>
              </div>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
