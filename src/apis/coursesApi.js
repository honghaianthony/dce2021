import axiosInstance from "./axiosInstance";

const getAllCourses = async () => {
  return await axiosInstance.get(`courses/get-all-courses`);
};
const getCourseById = async (id) => {
  return await axiosInstance.get(`courses/get-course-by-id?id=${id}`);
};
const createCourse = async (course) =>
{
    return await axiosInstance.post(`/courses/create-new-courses`,course);
}
const deleteCourseById = async (id) => {
  return await axiosInstance.get(`courses/delete-courses?id=${id}`);
};
const updateCourseById = async (course) => {
  return await axiosInstance.put(`courses/update-courses`,course);
};
export default {
  getAllCourses,
  getCourseById,
  createCourse,
  deleteCourseById,
  updateCourseById
};
