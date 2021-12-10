import axiosInstance from "./axiosInstance";
const getAllLesson = async () => {
    return await axiosInstance.get(`/lessons/get-all-lessons`);
  };
  export default {
    getAllLesson
  }