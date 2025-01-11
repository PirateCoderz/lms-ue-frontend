/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Box,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import CustomizedDialogs from 'src/components/custom-pop-up';
import NewStudents from 'src/components/students/NewStudents';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentById } from 'src/Redux/slice/user';
import EditStudents from 'src/components/students/EditStudents';
import { getAllStudents, getAllStudentsByDepartment } from 'src/Redux/slice/users';
import { getAllTeachersByDepartment } from 'src/Redux/slice/teacher';
import { toast } from 'react-toastify';
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
import dayjs from 'dayjs';
import { DateField, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { getUserStatus, uploadAttendence } from 'src/Redux/slice/attendence';
import Status from 'src/components/status/Status';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'studentName', label: 'Name', alignRight: false },
  { id: 'courseName', label: 'Degree Programes', alignRight: false },
  { id: 'regestrationNo', label: 'Registration Number', alignRight: false },
  { id: 'session', label: 'Session', alignRight: false },
  { id: 'session', label: 'Status', alignRight: false },
  { id: 'rollNo', label: 'Roll No', alignRight: false },
  { id: '', label: '', alignRight: true },

];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array && array?.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.studentName.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function UserPage() {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [newStudentOpen, setNewStudentOpen] = useState(false);

  const [refetch, setRefetch] = useState(false);

  const [editStudent, setEditStudent] = useState();

  const [editStudentOpen, setEditStudentOpen] = useState();
  const [isStatus, setIsStatus] = useState(false);

  const dispatch = useDispatch();

  const users = useSelector((s) => s.users?.studentData);
  const user = useSelector((s) => s?.user?.data);

  console.log('user==>', users);

  const [value, setValue] = useState(dayjs(new Date()));

  console.log('setValue==>', value);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.studentName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  console.log(USERLIST);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const filteredUsers = applySortFilter(users, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;
  const getAllUsers = async () => {
    const res = await dispatch(getAllStudents());
    if (res) {
      setRefetch(true);
    }
  };
  const handleDelete = async (id) => {
    // const res = await dispatch(deleteStudentById(id));
    // if (res.payload) {
    //   setRefetch(!refetch)
    // }
  };
  const date = new Date(value);
  const month = date?.toLocaleDateString('en-US', { month: 'short' });
  const day = date?.toLocaleDateString('en-US', { day: 'numeric' });
  const formattedDate = `${month} ${day}`;

  const handleAttendence = async (item) => {
    const date = new Date(value);
    const month = date?.toLocaleDateString('en-US', { month: 'short' });
    const day = date?.toLocaleDateString('en-US', { day: 'numeric' });
    const formattedDate = `${month} ${day}`;
    try {
      const res = await dispatch(
        uploadAttendence({
          studentId: item._id,
          date: formattedDate,
          status: 'Present',
        })
      );
      if (res.payload.message === 'Attendance uploaded successfully') {
        // toast.success('Attendance uploaded successfully');
        setRefetch(!refetch);
      }
      console.log('attendence', res);
    } catch (error) {
      console.log(error);
    }
  };
  const getStudentByDepartment = async (id) => {
    try {
      const res = await dispatch(getAllStudentsByDepartment(id));
      if (res.payload.data) {
        setRefetch(true);
      }
      console.log(res);
    } catch (error) {
      toast.error(error.message);
    }
  };
  console.log(user);

  const getStatus = async (data) => {
    console.log('data', data);
    try {
      const res = await dispatch(getUserStatus(data));
      // if (res.payload) {
      //   setIsStatus(true);
      // }
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user?.user) {
      getStudentByDepartment(user?.user?.deparment);
    }
  }, [dispatch, refetch, user?.user]);
  return (
    <>
      <Helmet>
        <title> User </title>
      </Helmet>

      <Container>
        <Box mb={4} alignItems="center" display="flex" justifyContent="space-between">
          <Typography variant="h4" gutterBottom>
            Attendence of {user?.user?.deparment}
          </Typography>
          <Typography>{formattedDate}</Typography>
        </Box>
        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={users.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((row) => {
                    const { _id, studentName, courseName, regestrationNo, session, rollNo } = row;
                    const selectedUser = selected.indexOf(studentName) !== -1;

                    return (
                      <TableRow hover key={_id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          {/* <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, studentName)} /> */}
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            {/* <Avatar alt={studentName} src={avatarUrl} /> */}
                            <Typography variant="subtitle2" noWrap>
                              {studentName}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell>{courseName}</TableCell>

                        <TableCell>{regestrationNo}</TableCell>

                        <TableCell>{session}</TableCell>

                        <TableCell align="left">
                          <Status refetch={refetch} data={{ studentId: _id, date: value }} />
                        </TableCell>
                        <TableCell>{rollNo}</TableCell>
                        <TableCell sx={{ display: 'flex' }} align="right">
                          <MenuItem onClick={() => handleAttendence(row)}>
                            <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                            Upload Attendence
                          </MenuItem>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        {/* <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem> */}

        {/* <MenuItem sx={{ color: 'error.main' }} onClick={()=>handleDelete(_id)}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem> */}
      </Popover>
    </>
  );
}
