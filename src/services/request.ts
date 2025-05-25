import http from './http';

export const get = <T>(url: string, params?: any) => {
  return http.get<T>(url, params);
};

export const post = <T>(url: string, data?: any) => {
  return http.post<T>(url, data);
};

export const del = <T>(url: string) => {
  return http.delete<T>(url);
};

export const put = <T>(url: string, data: any) => {
  return http.put(url, data);
};
