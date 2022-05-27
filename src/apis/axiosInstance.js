import axios from "axios";
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'https://dce-docker.herokuapp.com/api/v1',
  //   baseURL: "https://dce-uit.herokuapp.com/api",
  // baseURL: "http://localhost:3000/api",
});

axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${Cookies.get('token')}`;

// axiosInstance.interceptors.request.use(function (config) {
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });

axiosInstance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;
