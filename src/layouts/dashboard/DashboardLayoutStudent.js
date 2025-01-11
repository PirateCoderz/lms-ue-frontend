/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
//
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getUserById } from 'src/Redux/slice/user';
import Header from './header';
import Nav from './nav';
import { getUserAttendence } from 'src/Redux/slice/attendence';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayoutStudent() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserDataBYid = async (id) => {
    try {
      const res = await dispatch(getUserById(id));
      console.log('res---user', res);
      if (res.payload.user.type === 'Teacher') {
        navigate('/dashboard_Teacher');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getUserAttendenceById = async (id) => {
    try {
      const res = await dispatch(getUserAttendence(id));
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('ggscf_user_token')) {
      navigate('/login');
    } else {
      getUserDataBYid(localStorage.getItem('ggscf_user_id'));
      getUserAttendenceById(localStorage.getItem('ggscf_user_id'));
      //   if (localStorage.getItem('ggscf_user_type') === 'Teacher') {
      //     navigate('/dashboard_Teacher');
      //   }
    }
  }, []);

  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />

      <Nav openNav={open} onCloseNav={() => setOpen(false)} />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
