import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => navigate('/checkout')}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
