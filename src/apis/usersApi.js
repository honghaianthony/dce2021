import axiosInstance from "./axiosInstance";
import Cookies from 'js-cookie';

const getAllUsers = async () => {
  return await axiosInstance.get(`user/get-all-users`, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
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
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const updateRole = async (data) => {
  return await axiosInstance.put(`user/update-users-role`, data, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const getUserLesson = async (lessonId) => {
  return await axiosInstance.get(`user/get-user-lesson-by-id?id=${lessonId}`, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const registerLesson = async (data) => {
  return await axiosInstance.post(`user/create-new-user-lesson`, data, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const registerExercise = async (data) => {
  return await axiosInstance.post(`user/create-new-user-exercise`, data, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const doneLesson = async (data) => {
  return await axiosInstance.put(`user/update-user-lesson`, data, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const doneCourse = async (data) => {
  return await axiosInstance.put(`user/update-user-course`, data, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const checkDoneCourse = async (courseId) => {
  return await axiosInstance.get(
    `user/check-course-done?courseId=${courseId}`,
    {
      headers: { Authorization: `Bearer ${Cookies.get('token')}` },
    }
  );
};
const checkDoneUserLesson = async (id) => {
  return await axiosInstance.get(`user/check-userLesson-done?lessonId=${id}`, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const getCompletedUserLessonByLessonId = async (id) => {
  return await axiosInstance.get(
    `/user/check-completed-userLesson-by-lessonId?lessonId=${id}`,
    {
      headers: { Authorization: `Bearer ${Cookies.get('token')}` },
    }
  );
};
const getMe = async () => {
  return await axiosInstance.get(`user/me`, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const getAllUserCourse = async () => {
  return await axiosInstance.get(`user/get-all-user-course`, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const getAllUserExercise = async () => {
  return await axiosInstance.get(`user/get-all-user-exercise`, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const updateUserInfo = async (data) => {
  return await axiosInstance.put(`user/update`, data, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

export default {
  getAllUsers,
  getUserById,
  getUserCourseByCourseId,
  createUserCourse,
  updateRole,
  registerLesson,
  registerExercise,
  doneLesson,
  getUserLesson,
  doneCourse,
  checkDoneCourse,
  getMe,
  getAllUserCourse,
  getAllUserExercise,
  checkDoneUserLesson,
  getCompletedUserLessonByLessonId,
  updateUserInfo,
};
