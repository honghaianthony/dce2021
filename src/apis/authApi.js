import axiosInstance from "./axiosInstance";

const postLogin = async (data) => {
  return await axiosInstance.post("/Login", data);
};

const register = async (data) => {
  return await axiosInstance.post("/register", data);
};

export default {
  postLogin,
  register,
};
