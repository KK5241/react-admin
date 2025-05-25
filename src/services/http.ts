import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:5173/',
  timeout: 1000,
  withCredentials: true,
});

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log('x', error);
    return Promise.reject(error.response.data);
  }
);
export default http;
