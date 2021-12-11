import axiosInstance from "./axiosInstance";
// const getAllLesson = async () => {
//     return await axiosInstance.get(`/lessons/get-all-lessons`);
//   };
  const getAllLesson = async (id) =>
{
    return await axiosInstance.get(`/lessons/get-all-lessons-by-courseId?courseId=${id}`);
}
  export default {
    getAllLesson
  }