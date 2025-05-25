import { post } from '../request';
import { AxiosResponse } from 'axios';

interface LoginParams {
  username: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const login = (params: LoginParams): Promise<AxiosResponse<LoginResponse>> => {
  return post<LoginResponse>('api/login', params);
};
