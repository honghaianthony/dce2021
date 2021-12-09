import axiosInstance from "./axiosInstance";

const getAllCourses = async () => {
  return await axiosInstance.get(`courses/get-all-courses`);
};
const getCourseById = async (id) => {
  return await axiosInstance.get(`courses/get-course-by-id?id=${id}`);
};

export default {
  getAllCourses,
  getCourseById,
};
