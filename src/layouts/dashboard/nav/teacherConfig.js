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
    title: 'Courses',
    path: '/dashboard_teacher/courses',
    icon: icon('ic_teacher'),
  },
  {
    title: 'Assignments',
    path: '/dashboard_teacher/assignments',
    icon: icon('ic_shape-avatar'),
  },
  {
    title: 'Quizes',
    path: '/dashboard_teacher/quizes',
    icon: icon('ic_shape-avatar'),
  },
  {
    title: 'Course Materials',
    path: '/dashboard_teacher/material',
    icon: icon('ic_shape-avatar'),
  },

];

export default teachernavConfig;
