import axiosInstance from "./axiosInstance";

const postLogin = async (data) => {
  return await axiosInstance
    .post("/login", data)
    .then((response) => {
      return response;
    })
    .catch(() => {
      return { success: false };
    });
};

const register = async (data) => {
  return await axiosInstance.post("/register", data);
};

const forgotPassword = async (data) => {
  return await axiosInstance.post("/forgot_password", data);
};

const postGoogleLogin = async (data) => {
  return await axiosInstance.post("/auth/google", data);
};

export default {
  postLogin,
  register,
  postGoogleLogin,
  forgotPassword,
};
