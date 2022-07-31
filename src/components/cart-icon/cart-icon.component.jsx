import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
    useContext(CartContext);

  const ToggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={ToggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
