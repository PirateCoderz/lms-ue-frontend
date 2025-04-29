import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import TeacherServices from '../api/TeacherServices';
// import StudentServices from '../api/StudentServices';

export const initialState = {
  data: [],
  loading: 'idle',
  error: null,
  message: null,
};


export const getAllTeachersByDepartment = createAsyncThunk('teacher/getAllTeachersByDepartment', async (id) => {
  try {
    console.log("GET all teachers by Dept ID: ")
    console.log(id)
    const res = await TeacherServices.getAllTeachersByDepartment(id);
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

export const createTeacher = createAsyncThunk('teacher/createTeacher', async (data) => {
  try {
    console.log("Create a teacher: " )

    console.log("data==>", data)
    const res = await TeacherServices.createTeacher(data)
    console.log("res==>", res)
    if (res.data) {
      toast.success(res.data.data.message);
    }
    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const getAllTeachers = createAsyncThunk('teacher/getTeachers', async () => {
  try {
        console.log("GET all teachers: " )

    const res = await TeacherServices.getAllTeachers();
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



export const getAllTeachersByCourseNames = createAsyncThunk('teacher/getAllTeachersByCourseNames', async (data) => {
  try {
    const res = await TeacherServices.getAllTeachersByCourseNames(data);
    return res.data;
  } catch (error) {
    toast.error(error.response.message);
    return error.message;
  }
});

export const deleteTeacherById = createAsyncThunk('teacher/deleteTeacherById', async (id) => {
  console.log("Delete Teacher by id:")
  try {
    const res = await TeacherServices.deleteTeacherById(id);
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

export const editTeacherById = createAsyncThunk('teacher/editStudentById', async (datas) => {
  console.log(datas)
  const { id, data } = datas
  try {
    const res = await TeacherServices.editTeacherById(id, data);
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


export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    handleLogout: (state) => {
      state.data = [];
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTeacher.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(createTeacher.fulfilled, (state) => {
      state.loading = 'idle';
      // state.data = action.payload;
      // state.message = action.payload.message;
    });
    builder.addCase(createTeacher.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload
    });

    builder.addCase(getAllTeachers.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getAllTeachers.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
      state.message = action.payload.message;
    });
    builder.addCase(getAllTeachers.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload
    });

    builder.addCase(deleteTeacherById.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(deleteTeacherById.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.message = action.payload.message;
    });
    builder.addCase(deleteTeacherById.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload
    });

    builder.addCase(editTeacherById.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(editTeacherById.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.message = action.payload.message;
    });
    builder.addCase(editTeacherById.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload
    });

    builder.addCase(getAllTeachersByDepartment.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getAllTeachersByDepartment.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
    });
    builder.addCase(getAllTeachersByDepartment.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload
    });

  },
});

export const { handleLogout } = teacherSlice.actions;

export default teacherSlice.reducer;
