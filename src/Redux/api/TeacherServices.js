import { callAPi } from './http-common';

const getAllTeachersByDepartment = (id) => callAPi.get(`/api/teacher/getTeacherByDepartment/${id}`);
const getAllTeachersByCourseNames = (data) => callAPi.post(`/api/teacher/getTeacherByCourseNames` , data);

const TeacherServices = {
    getAllTeachersByDepartment,
    getAllTeachersByCourseNames,
};

export default TeacherServices;
