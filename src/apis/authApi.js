import axiosInstance from "./axiosInstance";

const postLogin = async (data) => {
  return await axiosInstance.post("/login", data);
};

const register = async (data) => {
    return await axiosInstance.post("/register", data);
};

const postGoogleLogin = async (data) => {
    return await axiosInstance.post("/auth/google", data);
};

export default {
    postLogin,
    register,
    postGoogleLogin,
};
