import React, { useState, useEffect } from 'react';
import {
  Container, Typography, CircularProgress, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions,
  DialogContent, DialogTitle, TextField
} from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function TeacherViewAssignmentPage() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [marks, setMarks] = useState('');
  const [feedback, setFeedback] = useState('');
  const [open, setOpen] = useState(false);

  const fetchAssignment = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/assignment/getAssignmentById/${id}`);
      setAssignment(response.data);
    } catch (error) {
      console.error('Error fetching assignment:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, [id]);

  const handleOpen = (student) => {
    setSelectedStudent(student);
    setMarks(student.marks || '');
    setFeedback(student.feedback || '');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
    setMarks('');
    setFeedback('');
  };

  const handleSave = async () => {
    try {
      const endpoint = `http://localhost:5000/api/assignment/mark/${selectedStudent.studentId._id}/${id}`;
      console.log(endpoint);
      await axios.put(endpoint, {
        marks,
        feedback,
      });
      Swal.fire('Success', 'Assignment marked successfully!', 'success');
      handleClose();
      fetchAssignment();
    } catch (error) {
      console.error('Error updating marks:', error);
      handleClose();
      Swal.fire('Error', 'Failed to mark assignment.', 'error');
    }
  };

  if (loading || !assignment) {
    return (
      <Container sx={{ textAlign: 'center', mt: 10 }}>
        <CircularProgress />
        <Typography variant="body2" mt={2}>Loading assignment...</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>{assignment.title}</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>{assignment.description}</Typography>
      <Typography variant="body2" sx={{ mb: 4 }}>
        Due Date: {new Date(assignment.dueDate).toLocaleDateString()}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Marks</TableCell>
              <TableCell>Feedback</TableCell>
              <TableCell>View File</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignment.st_assignments.map((student) => (
              <TableRow key={student.studentId}>
                <TableCell>{student.studentId.studentName}</TableCell>
                <TableCell>{student.status}</TableCell>
                <TableCell>{student.marks ?? 0}</TableCell>
                <TableCell>{student.feedback || 'N/A'}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    href={`http://localhost:5000${student.assignment}`}
                    target="_blank"
                  >
                    View
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleOpen(student)}>Mark</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for marking */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Mark Assignment</DialogTitle>
        <DialogContent>
          <TextField
            label="Marks"
            type="number"
            fullWidth
            margin="dense"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
          <TextField
            label="Feedback"
            fullWidth
            margin="dense"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSave}
            color="primary"
            variant="contained"
            sx={{ mt: 2, color: 'blue', '&:hover': { color: 'white' } }}
          >Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
