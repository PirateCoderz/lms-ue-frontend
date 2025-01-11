import { callAPi } from './http-common';

const createStudent = (data) => callAPi.post("/api/students/createStudent", data);
const getAllStudents = () => callAPi.get("/api/students/getStudents");
const deleteStudentById = (id) => callAPi.delete(`/api/students/deleteStudentById/${id}`);
const editStudentById = (id, data) => callAPi.patch(`/api/students/updateStudentById/${id}`, data);
const getAllStudentsByDepartment = (id) => callAPi.get(`/api/students/getStudentsByDepartment/${id}`);





const StudentServices = {
  createStudent,
  getAllStudents,
  deleteStudentById,
  editStudentById,
  getAllStudentsByDepartment
};

export default StudentServices;
