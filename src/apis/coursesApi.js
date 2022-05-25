import axiosInstance from "./axiosInstance";

const getAllCourses = async () => {
  return await axiosInstance.get(`course/get-all-courses`);
};
const getCourseById = async (id) => {
  return await axiosInstance.get(`course/get-course-by-id?id=${id}`);
};
const createCourse = async (course) => {
  return await axiosInstance.post(`/course/create-new-course`, course, {
    // headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
const deleteCourseById = async (id) => {
  return await axiosInstance.delete(`course/delete-course?id=${id}`, {
    // headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
const updateCourseById = async (course) => {
  return await axiosInstance.put(`course/update-course`, course, {
    // headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
export default {
  getAllCourses,
  getCourseById,
  createCourse,
  deleteCourseById,
  updateCourseById,
};
