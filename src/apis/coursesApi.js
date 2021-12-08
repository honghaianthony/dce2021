import axiosInstance from "./axiosInstance";

const getAllCourses = async (data) => {
  return await axiosInstance.get(`/courses/get-courses?id=${data}`);
};

export default {
    getAllCourses,
}