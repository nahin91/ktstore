import { createContext, useState, useEffect } from "react";
import PRODUCTS from '../shop-data.json'

//as the actual value i want to access

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  useEffect(() => { }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
