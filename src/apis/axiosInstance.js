import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',

});

// axiosInstance.interceptors.request.use(function (config) {
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });

axiosInstance.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

export default axiosInstance;

