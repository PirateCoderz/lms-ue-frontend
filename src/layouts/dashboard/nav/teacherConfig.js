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
    path: '#',
    icon: icon('ic_shape-avatar'),
  },
  {
    title: 'Quizes',
    path: '#',
    icon: icon('ic_shape-avatar'),
  },
  {
    title: 'Course Materials',
    path: '#',
    icon: icon('ic_shape-avatar'),
  },

];

export default teachernavConfig;
