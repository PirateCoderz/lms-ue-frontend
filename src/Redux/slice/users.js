import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import UserServices from '../api/UserServices';
import StudentServices from '../api/StudentServices';

export const initialState = {
  data: {},
  studentData:[],
  loading: 'idle',
  error: null,
  message: null,
};

export const loginUsers = createAsyncThunk('users/loginUsers', async (data) => {
  try {
    console.log('data==>', data);
    const res = await UserServices.loginUser(data);
    console.log('res==>', res);
    // if (res.data) {
    //   toast.success(res.data.data.message);
    // }
    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});
export const getAllStudents = createAsyncThunk('students/getAllStudents', async () => {
  try {
    const res = await StudentServices.getAllStudents();
    console.log("res==>", res)
    if (res.data) {
      toast.success(res.data.message);
    }
    return res.data;
  } catch (error) {
    toast.error(error.response.message);
    return error.message;
  }
});

export const getAllStudentsByDepartment = createAsyncThunk('teacher/getAllTeachersByDepartment', async (id) => {
  try {
    const res = await StudentServices.getAllStudentsByDepartment(id);
    console.log("res==>", res)
    // if (res.data) {
    //   toast.success(res.data.message);
    // }
    return res.data;
  } catch (error) {
    toast.error(error.response.message);
    return error.message;
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUsers.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(loginUsers.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
    });
    builder.addCase(loginUsers.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });
    builder.addCase(getAllStudentsByDepartment.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getAllStudentsByDepartment.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.studentData = action.payload;
    });
    builder.addCase(getAllStudentsByDepartment.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });
  },
});

export default usersSlice.reducer;
