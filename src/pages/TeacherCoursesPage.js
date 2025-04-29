import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Button, Card, CardContent, CardActions } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function TeacherCoursesPage() {


  const user = useSelector((s) => s?.user?.data);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // <-- added

  const fetchCourses = () => {
    setCourses(user?.user?.courses || []);
  };

  const handleViewAssignments = (course) => {
    // Optionally store selected course somewhere if needed later
    navigate(`/dashboard_teacher/assignments?course=${course}`); // Replace with your actual route + course);
  };


  const handleViewQuizes = (course) => {
    // Optionally store selected course somewhere if needed later
    navigate(`/dashboard_teacher/quizes?course=${course}`);
  };


  const handleViewCourses = (course) => {
    // Optionally store selected course somewhere if needed later
    navigate(`/dashboard_teacher/material?course=${course}`);
  };


  useEffect(() => {
    fetchCourses();
  }, [user?.user?.courses]); // Correct dependency


  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Courses
      </Typography>

      {/* List of Course Cards */}
      <Grid container spacing={3}>
        {courses?.map((course, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 2,
                border: '1px solid #ddd',
                '&:hover': { borderColor: 'blue' },
                transition: '0.3s',
              }}
            >
              <CardContent>
                <Typography variant="h6">{course}</Typography>
              </CardContent>
              <CardActions>
                {/* <Button
                  variant="contained"
                  onClick={() => handleViewAssignments(course)}
                  sx={{ color: 'blue', '&:hover': { color: 'white' } }}
                >
                  Course Material
                </Button> */}
                <Button
                  variant="contained"
                  onClick={() => handleViewAssignments(course)}
                  sx={{ color: 'blue', '&:hover': { color: 'white' } }}
                >
                  View Assignments
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleViewQuizes(course)}
                  sx={{ color: 'blue', '&:hover': { color: 'white' } }}
                >
                  View Quizes
                </Button>
                <Button
                  variant="contained"
                  onClick={() => handleViewCourses(course)}
                  sx={{ color: 'blue', '&:hover': { color: 'white' } }}
                >
                  View Course
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
