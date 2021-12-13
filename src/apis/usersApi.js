import axiosInstance from "./axiosInstance";

const token = localStorage.getItem("token");

const getAllUsers = async () => {
  return await axiosInstance.get(`users/get-all-users`);
};
const getUserById = async (id) => {
  return await axiosInstance.get(`users/get-user-by-id?id=${id}`);
};
const getUserCourseByCourseId = async (courseId) => {
  return await axiosInstance.get(`users/get-user-course-by-id?id=${courseId}`);
};
const createUserCourse = async (data) => {
  return await axiosInstance.post(`users/create-new-user-course`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const updateRole = async (data) => {
  return await axiosInstance.put(`users/update-users-role`, data);
};

export default {
  getAllUsers,
  getUserById,
  getUserCourseByCourseId,
  createUserCourse,
  updateRole,
};
