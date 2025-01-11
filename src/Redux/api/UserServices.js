import { callAPi } from './http-common';

const loginUser = (data) => callAPi.post('/api/user/login', data);
const getUser = (id) => callAPi.get(`/api/user/getUserById/${id}`);



const UserServices = {
    loginUser,
    getUser
};

export default UserServices;
