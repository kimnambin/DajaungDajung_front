import { SigupProps } from '../types/user.model';
import axiosInstance from './axiosInstance';

export const login = (credentials: SigupProps) =>
  axiosInstance.post('/auth/signin', credentials);

export const logout = () => axiosInstance.post('/logout');
