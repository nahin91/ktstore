import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data";


export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  //FIX: this is code was written to upload the json object data to the firebase DB. after upload it is commented for future reference
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
