import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import axios from 'axios';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import { getAllTeachersByDepartment } from 'src/Redux/slice/teacher';
import { ProductList } from '../sections/@dashboard/products';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const user = useSelector((state) => state?.user?.data);
  const [teacher, setTeacher] = useState([])

  const dispatch = useDispatch();

  // const handleOpenFilter = () => setOpenFilter(true);
  // const handleCloseFilter = () => setOpenFilter(false);

  const getAllTeachersByCourseNames = async (data) => {
    try {
      console.log("Get All Teachers API is working: ");
      const courseNames = data.courseNames;
      // console.log(courseNames);

      const response = await axios.post('http://localhost:5000/api/teacher/getAllTeachersByCourseNames', { courseNames });

      setTeacher(response.data)
      // Dispatching the fetched teacher data to the Redux store
      // dispatch({
      //   type: 'SET_TEACHERS',
      //   payload: response.data, // Assuming your action will handle this
      // });

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user?.user?.courseName) {
      getAllTeachersByCourseNames({ courseNames: user?.user?.courseName });
    }
  }, [dispatch, user]);

  return (
    <>
      <Helmet>
        <title>Dashboard: Teachers</title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Teachers
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }} />
        </Stack>

        {teacher?.length === 0 ? (
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            No teachers found for these Courses: {user?.user?.courseName}
          </Typography>
        ) : (
          <ProductList products={teacher} />
        )}
      </Container>
    </>
  );
}
;