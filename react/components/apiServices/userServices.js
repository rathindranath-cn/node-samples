// local imports
import Axios from "./apiInstance";

// login URL
export const login = async (data) => {
    return await Axios.post('/Api/login', data);
}

// registration URL
export const userRegister = async (data) => {
    return await Axios.post('/Api/do-register-user', data);
}