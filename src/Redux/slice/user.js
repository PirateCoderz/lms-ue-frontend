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

export const getUserById = createAsyncThunk('user/getUser', async (id) => {
  try {
    const res = await UserServices.getUser(id);
    console.log('res==>', res.data.user);
    // if (res.data) {
    //   toast.success(res.data.message);
    // }
    return res.data;
  } catch (error) {
    toast.error(error.response.message);
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

export const userSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
      state.message = action.payload.message;
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });

    builder.addCase(getAllStudents.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getAllStudents.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.studentData = action.payload;
      state.message = action.payload.message;
    });
    builder.addCase(getAllStudents.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });
  },
});

export default userSlice.reducer;
