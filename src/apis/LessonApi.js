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
export default {
  getAllLesson,
  getLessonById,
  deleteLessonById
};
