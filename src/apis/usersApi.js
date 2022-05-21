import axiosInstance from "./axiosInstance";

const getAllUsers = async () => {
  return await axiosInstance.get(`user/get-all-users`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
const getUserById = async (id) => {
  return await axiosInstance.get(`user/get-user-by-id?id=${id}`);
};
const getUserCourseByCourseId = async (courseId) => {
  return await axiosInstance.get(`user/get-user-course-by-id?id=${courseId}`);
};
const createUserCourse = async (data) => {
  return await axiosInstance.post(`user/create-new-user-course`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const updateRole = async (data) => {
  return await axiosInstance.put(`user/update-users-role`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const getUserLesson = async (lessonId) => {
  return await axiosInstance.get(`user/get-user-lesson-by-id?id=${lessonId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const registerLesson = async (data) => {
  return await axiosInstance.post(`user/create-new-user-lesson`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const doneLesson = async (data) => {
  return await axiosInstance.put(`user/update-user-lesson`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const doneCourse = async (data) => {
  return await axiosInstance.put(`user/update-user-course`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const checkDoneCourse = async (courseId) => {
  return await axiosInstance.get(
    `user/check-course-done?courseId=${courseId}`,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );
};

const getMe = async () => {
  return await axiosInstance.get(`user/me`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const getAllUserCourse = async () => {
  return await axiosInstance.get(`user/get-all-user-course`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};
const getAllUserExercise = async () => {
  return await axiosInstance.get(`user/get-all-user-exercise`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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
  getAllUserCourse,
  getAllUserExercise,
};
