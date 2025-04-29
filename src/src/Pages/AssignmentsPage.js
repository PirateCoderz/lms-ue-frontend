import React, { useEffect, useState } from 'react';
import { Typography, Button, TextField, Container, Stack, Grid } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';

export default function AssignmentsPage() {
  const user = useSelector((s) => s?.user?.data);
  const [assignments, setAssignments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    course: '',
  });

  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get('course'); // Get course from URL

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/assignment/getAssignments/${user?.user?._id}`);
      setAssignments(response.data || []);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  const createAssignment = async () => {
    try {
      const assignmentToSend = {
        ...newAssignment,
        course: courseParam, // Always ensure correct course here
      };
      const response = await axios.post(
        `http://localhost:5000/api/assignment/createAssignment/${user?.user?._id}`,
        assignmentToSend
      );
      setAssignments([...assignments, response.data]);
      setNewAssignment({ title: '', description: '', dueDate: '', course: courseParam }); // Reset form
      setShowForm(false); // Hide form after adding
    } catch (error) {
      console.error('Error creating assignment:', error);
    }
  };

  useEffect(() => {
    fetchAssignments();
    // Set course field initially for new assignment
    setNewAssignment((prev) => ({ ...prev, course: courseParam }));
  }, [user, courseParam]);

  // Filter assignments based on selected course
  const filteredAssignments = assignments.filter((assignment) => assignment.course === courseParam);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Assignments for {courseParam}
      </Typography>

      {/* Add Assignment Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 4, color: 'blue', '&:hover': { color: 'white' } }}
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? 'Cancel' : 'Add Assignment'}
      </Button>

      {/* Form to Create Assignment */}
      {showForm && (
        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12}>
            <Stack spacing={2}>
              <TextField
                label="Assignment Title"
                variant="outlined"
                fullWidth
                value={newAssignment.title}
                onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                value={newAssignment.description}
                onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                multiline
                rows={4}
              />
              <TextField
                label="Due Date"
                variant="outlined"
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
                value={newAssignment.dueDate}
                onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={createAssignment}
                disabled={!newAssignment.title || !newAssignment.description || !newAssignment.dueDate}
                sx={{ color: 'blue' }}
              >
                Create Assignment
              </Button>
            </Stack>
          </Grid>
        </Grid>
      )}

      {/* Display Filtered Assignments */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        All Assignments
      </Typography>

      <Grid container spacing={3}>
        {filteredAssignments.length === 0 ? (
          <Typography variant="body1" color="textSecondary">
            No assignments found for {courseParam}.
          </Typography>
        ) : (
          filteredAssignments.map((assignment) => (
            <Grid item xs={12} sm={6} md={4} key={assignment._id}>
              <div
                style={{
                  border: '1px solid #ddd',
                  padding: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6">{assignment.title}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {assignment.description}
                </Typography>
                <Typography variant="body2">
                  Due: {new Date(assignment.dueDate).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Course: {assignment.course}
                </Typography>
                <Link to={`/dashboard_teacher/assignments/${assignment._id}`}>
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
          ))
        )}
      </Grid>
    </Container>
  );
}
