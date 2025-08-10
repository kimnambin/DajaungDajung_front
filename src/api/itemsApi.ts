import { SigupProps } from '../types/user.model';
import axiosInstance from './axiosInstance';

interface SearchParams {
  query?: string;
  category?: string | null;
}

export const getSearchItems = ({ query, category }: SearchParams) => {
  const params = new URLSearchParams();
  if (query) params.append('q', query);
  if (category) params.append('category', category);

  return axiosInstance.get(`/items?${params.toString()}`);
};

export const postItem = (credentials: SigupProps) =>
  axiosInstance.post(`/items`, credentials);

export const deleteItem = (id: number) => axiosInstance.delete(`/items/${id}`);
