import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
// eslint-disable-next-line import/no-unresolved
import { getAllTeachersByDepartment } from 'src/Redux/slice/teacher';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const user = useSelector((s) => s?.user?.data);
  const teacher = useSelector((s) => s?.teacher?.data);

  console.log('teacher', teacher);
  const dispatch = useDispatch();

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const getTeacherByDepartments = async (id) => {
    try {
      const res = await dispatch(getAllTeachersByDepartment(id));
      console.log(res);
    } catch (error) {
      toast.error(error.message);
    }
  };
  console.log(user);

  useEffect(() => {
    if (user?.user) {
      getTeacherByDepartments(user?.user?.courseName);
    }
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title> Dashboard: Teacher</title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Teachers
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            {/* <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            /> */}
            {/* <ProductSort /> */}
          </Stack>
        </Stack>
        {teacher?.length === 0 ? (
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            No teachers found  departments of {user?.user?.courseName}
          </Typography>
        ) : (
          <ProductList products={teacher} />
        )}

        {/* <ProductCartWidget /> */}
      </Container>
    </>
  );
}
