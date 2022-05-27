import axiosInstance from "./axiosInstance";
import Cookies from 'js-cookie';

const getAllExercise = async () => {
  return await axiosInstance.get(`/exercises/get-all-exercises`);
};
const getAllExerciseById = async (id) => {
  return await axiosInstance.get(`/exercises/get-exercises-by-id?id=${id}`);
};
const conformExercise = async (exercise) => {
  return await axiosInstance.post(`/exercises/confirm-do-exercise`, exercise, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const createExercise = async (exercise) => {
  return await axiosInstance.post(`/exercises/create-new-exercise`, exercise, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const getTestCaseById = async (id) => {
  return await axiosInstance.get(
    `/exercises/get-exercises-test-by-id?id=${id}`
  );
};
const getAllTestCase = async () => {
  return await axiosInstance.get(`/exercises/get-all-exercises-test`);
};
const getTestCaseByExerciseId = async (id) => {
  return await axiosInstance.get(
    `/exercises/get-all-exercises-test-by-exerciseId?id=${id}`
  );
};
const createTestCase = async (testcase) => {
  return await axiosInstance.post(
    `/exercises/create-new-exercise-test`,
    testcase,
    {
      headers: { Authorization: `Bearer ${Cookies.get('token')}` },
    }
  );
};
const updateExercise = async (exercise) => {
  return await axiosInstance.put(`/exercises/update-exercises`, exercise, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const updateTestCase = async (testcase) => {
  return await axiosInstance.put(`/exercises/update-exercises-test`, testcase, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
};
const deleteExerciseTest = async (id) => {
  return await axiosInstance.delete(
    `/exercises/delete-exercises-test?id=${id}`,
    {
      headers: { Authorization: `Bearer ${Cookies.get('token')}` },
    }
  );
};
const deleteExercise = async (id) => {
  return await axiosInstance.delete(`/exercises/delete-exercises?id=${id}`, {
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
  });
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
  deleteExerciseTest,
};
