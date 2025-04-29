import React, { useEffect, useState } from 'react';
import { Typography, Button, TextField, Container, Stack, Grid, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function StudentAssignmentsPage() {
  const user = useSelector((s) => s?.user?.data);  // Fetch user data
  console.log(user?.user);
  console.log(user?.user?._id);

  const [assignments, setAssignments] = useState([]);

  const [courses, setCourses] = useState(["Mathematics 101", "History 101"]);
  const [selectedCourse, setSelectedCourse] = useState('');

  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    course: '',
  });


  // Commented out fetching of courses
  const fetchCourses = () => {
    console.log(user?.user);
    setCourses(user?.user?.courseName);
  };


  // Commented out fetching assignments based on selected course
  const fetchAssignmentsByCourse = async () => {
    try {
      // console.log(selectedCourse);
      const response = await axios.post('http://localhost:5000/api/assignment/getAssignmentsByCourse', {
        course: selectedCourse, // Pass course in body
      });
      // console.log("assignments fetched...");
      // console.log(response?.data);
      setAssignments(response?.data);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };


  // Handle course selection
  const handleCourseChange = (event) => {
    console.log(event.target.value);
    setSelectedCourse(event.target.value);
  };


  // Commented out useEffect calls
  useEffect(() => {
    fetchCourses();  // Fetch the courses when the page loads
  }, [user?.user?.courseName]);


  useEffect(() => {
    if (selectedCourse) {
      fetchAssignmentsByCourse();  // Fetch assignments when a course is selected
    }
  }, [selectedCourse]);


  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Assignments
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

      {/* Display Assignments for selected course */}
      <Typography variant="h6" sx={{ mb: 2, mt: 3 }}>
        Assignments for {selectedCourse}
      </Typography>

      {assignments.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No assignments present.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {assignments.map((assignment) => (
            <Grid item xs={12} sm={6} md={4} key={assignment?._id}>
              <div
                style={{
                  border: '1px solid #ddd',
                  padding: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6">{assignment?.title}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {assignment?.description}
                </Typography>
                <Typography variant="body2">
                  Due: {new Date(assignment?.dueDate).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Course: {assignment?.course}
                </Typography>
                <Link to={`/dashboard_student/assignment/${assignment?._id}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, color: 'blue', '&:hover': { color: 'white' } }}
                  >
                    View Assignment
                  </Button>
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </Container >
  );
}
