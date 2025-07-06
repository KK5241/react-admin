import axios from 'axios';
import axiosRetry from 'axios-retry';
import setInterceptors from './interceptors';

const http = axios.create({
  baseURL: 'http://localhost:5173/',
  timeout: 1000,
  withCredentials: true,
});

// 请求重试配置
axiosRetry(http, {
  retries: 3, // 请求重试次数
  retryDelay: axiosRetry.exponentialDelay, // 请求重试延迟时间 指数退避
  retryCondition: (error) => {
    console.log('error', error);
    return (
      axiosRetry.isNetworkError(error) || // 网络问题导致 请求失败❌ 一般代表没拿到response
      axiosRetry.isRetryableError(error) || // 服务器错误 500 501...
      error.response?.status === 429 // 该状态码表示，一次性发送的请求过多，导致网络过载引起的请求失败
    ); // 手动加上 429 限流支持
  }, // 请求重试的条件
});

setInterceptors(http);

export default http;
