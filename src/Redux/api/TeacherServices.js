import { callAPi } from './http-common';

const getAllTeachersByDepartment = (id) => callAPi.get(`/api/teacher/getTeacherByDepartment/${id}`);

const TeacherServices = {
    getAllTeachersByDepartment,
};

export default TeacherServices;
