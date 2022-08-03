import { createContext, useState, useEffect, useReducer } from "react";

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

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id //this return a boolean indicating whether item exist or not.
  );
  //check if quantity=1 then remove the item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //return back the cartitems with matching cart item with reduced quatinty
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  subTotal: 0,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

const INITIAL_STATE = {
  isCartOpen: true,
  cartItems: [],
  cartCount: 0,
  subTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload
      };
    case "SET_CART_Count":
      return {};
    case "SET_SUB_TOTAL":
      return {};
    case "SET_IS_CART_OPEN":
      return {};
    default:
      throw new Error(`encoutered type ${type} error inside the cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartCount, setCartCount] = useState(0);
  // const [subTotal, setSubTotal] = useState(0);

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const {cartItems, isCartOpen, cartCount, subTotal} = state



  const updateCartITemsReducer = (newCartItems) => {

    const newCartCount = newCartItems.reduce(
      (totalNumberOfCartItems, currentCartItem) =>
        totalNumberOfCartItems + currentCartItem.quantity,
      0
    );

    const totalPrice = newCartItems.reduce(
      (totalNumberOfCartItems, currentCartItem) =>
        totalNumberOfCartItems +
        currentCartItem.quantity * currentCartItem.price,
      0
    );

    dispatch({type: 'SET_CART_ITEMS', payload:{cartItems: newCartItems, cartCount: newCartCount, subTotal: totalPrice}})

  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartITemsReducer(newCartItems)
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartITemsReducer(newCartItems)
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartITemsReducer(newCartItems)
  };

  const value = {
    isCartOpen,
    setIsCartOpen: () => {} ,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    subTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
