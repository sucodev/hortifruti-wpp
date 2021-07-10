import { api } from "../services";
import { createContext, useEffect, useState } from "react";
import { CartProps, CategoriesProps } from "../Models/CartContextProps";

interface Data {
  categories: CategoriesProps[];
}

export const CartContext = createContext<Data>({} as Data);

export function CartStorageProvider({ children }: CartProps) {
  const [categories, setCategories] = useState<CategoriesProps[]>([]);

  useEffect(() => {
    api.get("products").then((response) => setCategories(response.data));
  }, []);

  return (
    <CartContext.Provider value={{ categories }}>
      {children}
    </CartContext.Provider>
  );
}
