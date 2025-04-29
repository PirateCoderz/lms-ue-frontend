import { Navigate, useRoutes } from 'react-router-dom';
// layouts
// import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
// import DashboardAppPage from './pages/DashboardAppPage';
import TeacherPage from './pages/TeacherPage';
// import MeritListPage from './pages/MeritListPage';
// import FeeStructure from './pages/Finduniversity';
import Departments from './pages/Departments';
import Layout from './src/layout/Layout';
import Home from './src/Pages/Home';
import About from './src/Pages/About';
import Colleges from './src/Pages/Colleges';
import Acadmic from './src/Pages/Acadmic';
import Qec from './src/Pages/Qec';
import LatestNews from './src/Pages/LatestNews';
import ProgramFinder from './src/Pages/ProgramFinder';
import FeeStructures from './src/Pages/FeeStructure';
import ListOfPrograms from './src/Pages/ListOfPrograms';
import ContactAdmisions from './src/Pages/ContactAdmisions';
import Login from './src/auth/Login';
import MeritList from './src/Pages/MeritList';
// import AssignmentsPage from './src/Pages/AssignmentsPage';
import Course from "./src/Pages/Course"
import DashboardLayoutStudent from './layouts/dashboard/DashboardLayoutStudent';
import DashboardLayoutTeacher from './layouts/dashboard/DashboardLayoutTeacher';
import Profile from './pages/Profile';
import ProductsPage from './pages/ProductsPage';
// eslint-disable-next-line import/no-duplicates
import Timetables from './pages/Timetable';
// eslint-disable-next-line import/no-duplicates
import Finduniversity from './pages/Finduniversity';
import StudentPage from './pages/StudentPage';
import ViewAttendence from './pages/ViewAttendence';
import StudentsAssignmentPage from './pages/StudentsAssignmentPage';
import StudentsSingleAssignmentPage from './pages/StudentsSingleAssignmentPage';
import AssignmentsPage from './src/Pages/AssignmentsPage';
import TeacherSingleAssignmentPage from './pages/TeacherSingleAssignmentPage';
import TeacherCoursesPage from './pages/TeacherCoursesPage';
import TeacherQuizzesPage from './src/Pages/TeacherQuizesPage';
import TeacherViewQuizPage from './pages/TeacherViewQuizPage';
import TeacherCourseMaterialPage from './src/Pages/TeacherCourseMaterialPage';
import StudentCourseMaterialPage from './pages/StudentCourseMaterialPage';
import StudentQuizPage from './pages/StudentQuizPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        // { path: 'app', element: <DashboardAppPage /> },

        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'colleges', element: <Colleges /> },
        { path: 'acadamic', element: <Acadmic /> },
        { path: 'qec', element: <Qec /> },
        { path: 'admissions/latest', element: <LatestNews /> },
        { path: 'admissions/merit', element: <MeritList /> },
        { path: 'admissions/program', element: <ProgramFinder /> },
        { path: 'admissions/listofprograme', element: <ListOfPrograms /> },
        { path: 'admissions/fee', element: <FeeStructures /> },
        { path: 'admissions/contactAdmissions', element: <ContactAdmisions /> },
        { path: 'programes/:id', element: <Course /> },
        { path: 'login', element: <Login /> },
      ],
    },
    {
      path: '/dashboard_student',
      element: <DashboardLayoutStudent />,
      children: [
        { path: 'profile', element: <Profile /> },
        { path: 'user', element: <UserPage /> },
        { path: 'teacher', element: <ProductsPage /> },
        { path: 'assignments', element: <StudentsAssignmentPage /> },
        { path: 'quiz', element: <StudentQuizPage /> },
        { path: 'course-material', element: <StudentCourseMaterialPage /> },
        { path: 'assignment/:id', element: <StudentsSingleAssignmentPage /> },
        { path: 'find_teacher', element: <TeacherPage /> },
        { path: 'find_university', element: <Finduniversity /> },
        { path: 'departments', element: <Departments /> },
        { path: 'time-table', element: <Timetables /> },
        { path: 'attendence', element: <ViewAttendence /> },
      ]
    },
    {
      path: '/dashboard_teacher',
      element: <DashboardLayoutTeacher />,
      children: [
        { path: 'profile', element: <Profile /> },
        { path: 'user', element: <StudentPage /> },
        { path: 'attendence', element: <UserPage /> },
        { path: 'assignments', element: <AssignmentsPage /> },
        { path: 'quizes', element: <TeacherQuizzesPage /> },
        { path: 'quiz/:id', element: <TeacherViewQuizPage /> },
        { path: 'courses', element: <TeacherCoursesPage /> },
        { path: 'material', element: <TeacherCourseMaterialPage /> },
        { path: 'assignments/:id', element: <TeacherSingleAssignmentPage /> },
        { path: 'find_university', element: <Finduniversity /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
