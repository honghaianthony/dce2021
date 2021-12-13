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
  return await axiosInstance.delete(`lessons/delete-lessons?id=${id}`);
};

const getAllLessonTestById = async (id) => {
  return await axiosInstance.get(`lessons/get-all-lessons-test?lessonId=${id}`);
};

const getAllLessonComment = async (id) => {
  return await axiosInstance.get(
    `lessons/get-all-lessons-comment?lessonId=${id}`
  );
};
const getLessonByCourseId=async(id)=>{
  return await axiosInstance.get(
    `lessons/get-all-lessons-by-courseId?courseId=${id}`
  );
  }
const createLesson =async(lesson)=>{
  return await axiosInstance.post(`/lessons/create-new-lesson`,lesson)
}
const createLessonTest =async(lesson)=>{
  return await axiosInstance.post(`/lessons/create-new-lesson-test`,lesson)
}
const getLessonNote = async (id) => {
  return await axiosInstance.get(`note/get-note-by-id?id=${id}`);
};

const updateNote = async (data) => {
  return await axiosInstance.put(`note/update-note`, data);
};
const updateLessonById=async(lesson)=>{
  return await axiosInstance.put(`lessons/update-lessons`,lesson)
}
const updateLessonTestById=async(lesson)=>{
  return await axiosInstance.put(`lessons/update-lessons-test`,lesson)
}
const getLessonTestByLessonId=async(id)=>{
  return await axiosInstance.get(`lessons/get-all-lessons-test-by-lessonId?lessonId=${id}`)
}
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
  getLessonTestByLessonId
};
