import axiosInstance from "./axiosInstance";

const postLogin = async (data) => {
  return await axiosInstance.post("/Login", data);
};

export default {
    postLogin,
}