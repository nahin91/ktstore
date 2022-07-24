import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems = [], productToAdd) => {
  //TODO: check if cartItem[] contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id //this return a boolean indicating whether item exist or not.
  );
  // if found, increse quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //else return new array with modified cartItems[]
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (totalNumberOfCartItems, currentCartItem) => totalNumberOfCartItems + currentCartItem.quantity , 0)
      setCartCount(newCartCount);
  }, [cartItems]);

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
