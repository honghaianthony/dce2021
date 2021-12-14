import axiosInstance from "./axiosInstance";

const getAllCourses = async () => {
  return await axiosInstance.get(`courses/get-all-courses`);
};
const getCourseById = async (id) => {
  return await axiosInstance.get(`courses/get-course-by-id?id=${id}`);
};
const createCourse = async (course) => {
  return await axiosInstance.post(`/courses/create-new-courses`, course, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
const deleteCourseById = async (id) => {
  return await axiosInstance.delete(`courses/delete-courses?id=${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
const updateCourseById = async (course) => {
  return await axiosInstance.put(`courses/update-courses`, course, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
export default {
  getAllCourses,
  getCourseById,
  createCourse,
  deleteCourseById,
  updateCourseById,
};
