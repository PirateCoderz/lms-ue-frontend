// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const teachernavConfig = [

  {
    title: 'find students',
    path: '/dashboard_teacher/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Upload Attendence',
    path: '/dashboard_teacher/attendence',
    icon: icon('ic_teacher'),
  },
  {
    title: 'Find University',
    path: '/dashboard_teacher/find_university',
    icon: icon('ic_map'),
  },

];

export default teachernavConfig;
