import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

const cartDropdown = () => {
  return (
  <div className="cart-dropdown-container">
    <div className="cart-item">

    </div>
    <Button buttonType='inverted'>Checkout</Button>
  </div>)
};

export default cartDropdown;
