import { Seller } from './user.model';

export interface Item {
  id: number;
  imgId: number;
  title: string;
  price: number;
  createdAt: string;
}

export interface ItemDetail {
  id: number;
  imgId: number;
  categoryId: number;
  category: string;
  title: string;
  price: number;
  createdAt: string;
  contents: string;
  imageUrl?: string;
  like: number;
  liked?: string;
  seller?: string;
  user: Seller;
}

export interface ChatItemInfo {
  id: number;
  imgId: number;
  title: string;
  price: number;
}

export interface CategoryProps {
  selectedCategory: number | string;
  keyword: string;
  categories: { id: number; category: string }[];
}

export interface ClickCategory {
  categoryId: number | string;
  categoryName: string;
}

export interface IdParameter {
  id: number | string;
}
