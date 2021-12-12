import axiosInstance from "./axiosInstance";

const getAllLesson = async (id) => {
  return await axiosInstance.get(
    `/lessons/get-all-lessons-by-courseId?courseId=${id}`
  );
};
const getLessonById = async (id) => {
  return await axiosInstance.get(`lessons/get-lesson-by-id?id=${id}`);
};
const deleteLessonById = async (id) => {
  return await axiosInstance.get(`lessons/delete-lessons?id=${id}`);
};

const getAllLessonTest = async (id) => {
  return await axiosInstance.get(`lessons/get-all-lessons-test?lessonId=${id}`);
};

const getAllLessonComment = async (id) => {
  return await axiosInstance.get(
    `lessons/get-all-lessons-comment?lessonId=${id}`
  );
};
const getLessonNote = async (id) => {
  return await axiosInstance.get(`note/get-note-by-id?id=${id}`);
};

const updateNote = async (data) => {
  return await axiosInstance.put(`note/update-note`, data);
};

export default {
  getAllLesson,
  getLessonById,
  deleteLessonById,
  getAllLessonTest,
  getAllLessonComment,
  getLessonNote,
  updateNote,
};
