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
  return await axiosInstance.put(`users/update-users-role`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getUserLesson = async (lessonId) => {
  return await axiosInstance.get(`users/get-user-lesson-by-id?id=${lessonId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const registerLesson = async (data) => {
  return await axiosInstance.post(`users/create-new-user-lesson`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const doneLesson = async (data) => {
  return await axiosInstance.put(`users/update-user-lesson`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const doneCourse = async (data) => {
  return await axiosInstance.put(`users/update-user-course`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const checkDoneCourse = async (courseId) => {
  return await axiosInstance.get(
    `users/check-course-done?courseId=${courseId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

const getMe = async () => {
  return await axiosInstance.get(`users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default {
  getAllUsers,
  getUserById,
  getUserCourseByCourseId,
  createUserCourse,
  updateRole,
  registerLesson,
  doneLesson,
  getUserLesson,
  doneCourse,
  checkDoneCourse,
  getMe,
};
