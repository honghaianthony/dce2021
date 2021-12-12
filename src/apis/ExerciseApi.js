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
const getTestCaseById = async (id)=>
{
    return await axiosInstance.get(`/exercises/get-exercises-test-by-id?id=${id}`);
}
const getAllTestCase = async() =>
{   
    return await axiosInstance.get(`/exercises/get-all-exercises-test`);
}
const createTestCase = async(testcase) =>
{
    return await axiosInstance.post(`/exercises/create-new-exercise-test`,testcase)
}
const deleteExercise = async (id) => {};
export default {
  getAllExercise,
  getAllExerciseById,
  conformExercise,
  createExercise,
  deleteExercise,
    getAllTestCase,
    getTestCaseById,
    createTestCase
};