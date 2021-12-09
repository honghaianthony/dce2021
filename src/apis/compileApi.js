import axiosInstance from "./axiosInstance";

const postCompile = async (data) => {
  return await axiosInstance.post("/compiler", data);
};

export default {
  postCompile,
};
