import { callAPi } from './http-common';

const loginUser = (data) => callAPi.post('/api/user/loginClient', data);

const UserServices = {
    loginUser,
};

export default UserServices;
