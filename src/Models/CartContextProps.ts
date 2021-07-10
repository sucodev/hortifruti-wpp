import { ReactNode } from "react";

export interface CartProps {
  children: ReactNode;
}
export interface CategoriesProps {
  categoryName: string;
  items: { id: number; foodName: string; foodPrice: number };
}

export interface ListProductItemsProps {
  categoryItems: {
    foodName: string;
    foodPrice: number;
  };
}
