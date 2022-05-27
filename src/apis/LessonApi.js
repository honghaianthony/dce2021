import axiosInstance from "./axiosInstance";
import Cookies from 'js-cookie';

const getAllLesson = async (id) => {
  return await axiosInstance.get(`/lessons/get-all-lessons?courseId=${id}`);
};
const getAllLessonFindCourseId = async () => {
  return await axiosInstance.get(`/lessons/get-all-lessons`);
};
const getLessonById = async (id) => {
  return await axiosInstance.get(`lessons/get-lesson-by-id?id=${id}`);
};
const deleteLessonById = async (id) => {
  return await axiosInstance.delete(`lessons/delete-lessons?id=${id}`, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const getAllLessonTestById = async (id) => {
  return await axiosInstance.get(`lessons/get-all-lessons-test?lessonId=${id}`);
};

const getAllLessonComment = async (id) => {
  return await axiosInstance.get(
    `lessons/get-all-lessons-comment?lessonId=${id}`
  );
};
const getLessonByCourseId = async (id) => {
  return await axiosInstance.get(
    `lessons/get-all-lessons-by-courseId?courseId=${id}`
  );
};
const createLesson = async (lesson) => {
  return await axiosInstance.post(`/lessons/create-new-lesson`, lesson, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const createLessonTest = async (lesson) => {
  return await axiosInstance.post(`/lessons/create-new-lesson-test`, lesson, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const getLessonNote = async (id) => {
  return await axiosInstance.get(`lessons/get-note-by-id?lessonId=${id}`, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};

const updateNote = async (data) => {
  return await axiosInstance.put(`lessons/update-note`, data, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const updateLessonById = async (lesson) => {
  return await axiosInstance.put(`lessons/update-lessons`, lesson, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const updateLessonTestById = async (lesson) => {
  return await axiosInstance.put(`lessons/update-lessons-test`, lesson, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
// const getLessonTestByLessonId=async(id)=>{
//   return await axiosInstance.get(`lessons/get-all-lessons-test-by-lessonId?lessonId=${id}`)
// }
export default {
  getAllLesson,
  getLessonById,
  deleteLessonById,
  getAllLessonTestById,
  getAllLessonComment,
  getLessonNote,
  updateNote,
  createLesson,
  createLessonTest,
  getLessonByCourseId,
  updateLessonById,
  updateLessonTestById,
  // getLessonTestByLessonId,
  getAllLessonFindCourseId,
};
