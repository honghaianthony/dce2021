// import axiosInstance from "./axiosInstance";
import axios from "axios";

const getAll = async () => {
  return await axios.get("https://600ecd413bb1d100179e02a3.mockapi.io/list");
};
const post = async (data) => {
  return await axios.post(
    "https://600ecd413bb1d100179e02a3.mockapi.io/list",
    data
  );
};
export default {
  getAll,
  post,
};
