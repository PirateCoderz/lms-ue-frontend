// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const studentnavConfig = [

  {
    title: 'Teachers',
    path: '/dashboard_student/teacher',
    icon: icon('ic_teacher'),
  },

  {
    title: 'Time table',
    path: '/dashboard_student/time-table',
    icon: icon('ic_timetable'),
  },
  
  {
    title: 'Find Teacher',
    path: '/dashboard_student/find_teacher',
    icon: icon('ic_teacher'),
  },
  {
    title: 'Find University',
    path: '/dashboard_student/find_university',
    icon: icon('ic_map'),
  },
  {
    title: 'View Attendence',
    path: '/dashboard_student/attendence',
    icon: icon('ic_teacher'),
  },


];

export default studentnavConfig;
