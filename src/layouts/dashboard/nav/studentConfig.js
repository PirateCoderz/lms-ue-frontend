// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const studentnavConfig = [

  {
    title: 'Profile',
    path: '/dashboard_student/profile',
    icon: icon('ic_timetable'),
  },

  {
    title: 'Teachers',
    path: '/dashboard_student/teacher',
    icon: icon('ic_teacher'),
  },
  
  {
    title: 'Assignments',
    path: '/dashboard_student/assignments',
    icon: icon('ic_teacher'),
  },

  {
    title: 'Quizzes',
    path: '/dashboard_student/quiz',
    icon: icon('ic_teacher'),
  },

  {
    title: 'Course Materials',
    path: '/dashboard_student/course-material',
    icon: icon('ic_teacher'),
  },
  // {
  //   title: 'Find Teacher',
  //   path: '/dashboard_student/find_teacher',
  //   icon: icon('ic_teacher'),
  // },
  // {
  //   title: 'Find University',
  //   path: '/dashboard_student/find_university',
  //   icon: icon('ic_map'),
  // },
  // {
  //   title: 'View Attendence',
  //   path: '/dashboard_student/attendence',
  //   icon: icon('ic_teacher'),
  // },


];

export default studentnavConfig;
