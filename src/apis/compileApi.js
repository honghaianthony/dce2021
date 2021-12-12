import axiosInstance from "./axiosInstance";

const postCompile = async (data) => {
  return await axiosInstance.post("http://localhost:3000/api/compiler", data);
};

export default {
  postCompile,
};
