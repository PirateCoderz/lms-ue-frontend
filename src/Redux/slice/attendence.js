import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import AttendenceServices from '../api/AttendenceServices';

export const initialState = {
  data: [],
  staus: null,
  loading: 'idle',
  error: null,
  message: null,
};

export const uploadAttendence = createAsyncThunk('attendence/uploadAttendence', async (data) => {
  try {
    const res = await AttendenceServices.uploadAttendence(data);
    // console.log('AttendenceServices==>', res);
    if (res.data) {
      toast.success(res.data.message);
    }
    return res.data;
  } catch (error) {
    // console.log('AttendenceServices==>', error);
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const getUserAttendence = createAsyncThunk('attendence/getUserAttendence', async (data) => {
  try {
    const res = await AttendenceServices.getUserAttendence(data);
    console.log('res==>', res);
    // if (res.data) {
    //   toast.success(res.data.message);
    // }
    return res.data;
  } catch (error) {
    toast.error(error.response.message);
    return error.message;
  }
});

export const getUserStatus = createAsyncThunk('attendence/getUserStatus', async (data) => {
  try {
    const res = await AttendenceServices.getUserStatus(data);
    console.log('res==>', res);
    // if (res.data) {
    //   toast.success(res.data.message);
    // }
    return res.data;
  } catch (error) {
    toast.error(error.response.message);
    console.log('error==>', error.message);

    return error.message;
  }
});

export const userSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadAttendence.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(uploadAttendence.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
      state.message = action.payload.message;
    });
    builder.addCase(uploadAttendence.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });
    builder.addCase(getUserAttendence.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getUserAttendence.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
      state.message = action.payload.message;
    });
    builder.addCase(getUserAttendence.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });

    builder.addCase(getUserStatus.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getUserStatus.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
      // state.message = action.payload.message;
    });
    builder.addCase(getUserStatus.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });
  },
});

export default userSlice.reducer;
