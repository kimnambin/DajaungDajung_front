import axiosInstance from './axiosInstance';

export const getComments = (id: number) => axiosInstance.get(`/comments/${id}`);
