import { callAPi } from './http-common';

const uploadAttendence = (data) => callAPi.post('/api/attendance', data);
const getUserAttendence = (id) => callAPi.get(`/api/attendance/${id}`);
const getUserStatus = (data) => callAPi.get(`/api/getUserStatus/${data.studentId}/${data.date}`);

const AttendenceServices = {
  uploadAttendence,
  getUserAttendence,
  getUserStatus,
};

export default AttendenceServices;
