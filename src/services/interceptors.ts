import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export default function setInterceptors(http: AxiosInstance) {
  // 请求拦截器 统一添加token
  http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;
    if (accessToken) config.headers.Authorization = accessToken;
    return config;
  });

  // 封装请求拦截器
  http.interceptors.response.use(
    function (response: AxiosResponse) {
      return response.data;
    },
    // 待处理无感刷新
    function (error: AxiosError) {
      console.log('x', error);

      if (error.status === 401) {
        window.location.href = '/auth/login';
      }

      //   代实现;
      //   if (error.response?.status === 403) {
      //     权限不足处理;
      //   }
      //   if (error.response?.status === 500) {
      //     服务器错误处理;
      //   }

      return Promise.reject(error.response?.data);
    }
  );
}
