import { callAPi } from './http-common';

const getTimeTableByDepartment = (id) => callAPi.get(`/api/timeTable/getTimeTable/${id}`);




const TimeTableServices = {
    getTimeTableByDepartment,
};

export default TimeTableServices;
