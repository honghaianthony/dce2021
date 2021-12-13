import axiosInstance from "./axiosInstance";
const getAllExercise = async () => {
  return await axiosInstance.get(`/exercises/get-all-exercises`);
};
const getAllExerciseById = async (id) => {
  return await axiosInstance.get(`/exercises/get-exercises-by-id?id=${id}`);
};
const conformExercise = async (exercise) => {
  return await axiosInstance.post(`/exercises/confirm-do-exercise`, exercise);
};
const createExercise = async (exercise) => {
  return await axiosInstance.post(`/exercises/create-new-exercise`, exercise);
};
const getTestCaseById = async (id) => {
  return await axiosInstance.get(`/exercises/get-exercises-test-by-id?id=${id}`);
}
const getAllTestCase = async () => {
  return await axiosInstance.get(`/exercises/get-all-exercises-test`);
}
const getTestCaseByExerciseId = async (id) => {
  return await axiosInstance.get(`/exercises/get-all-exercises-test-by-exerciseId?exerciseId=${id}`);
}
const createTestCase = async (testcase) => {
  return await axiosInstance.post(`/exercises/create-new-exercise-test`, testcase)
}
const updateExercise = async (exercise) => {
  return await axiosInstance.put(`/exercises/update-exercises`, exercise)
}
const updateTestCase = async (testcase) => {
  return await axiosInstance.put(`/exercises/update-exercises-test`, testcase)
}
const deleteExerciseTest = async (id) => {
  return await axiosInstance.delete(`/exercises/delete-exercises-test?id=${id}`)
 };
 const deleteExercise = async (id) => {
  return await axiosInstance.delete(`/exercises/delete-exercises?id=${id}`)
 };
 
export default {
  getAllExercise,
  getAllExerciseById,
  conformExercise,
  createExercise,
  deleteExercise,
  getAllTestCase,
  getTestCaseById,
  createTestCase,
  getTestCaseByExerciseId,
  updateExercise,
  updateTestCase,
  deleteExercise,
  deleteExerciseTest
};