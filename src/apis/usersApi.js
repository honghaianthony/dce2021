import axiosInstance from "./axiosInstance";

const getAllUsers = async () => {
  return await axiosInstance.get(`users/get-all-users`);
};
const getUserById = async (id) => {
  return await axiosInstance.get(`users/get-user-by-id?id=${id}`);
};

export default {
  getAllUsers,
  getUserById,
};
