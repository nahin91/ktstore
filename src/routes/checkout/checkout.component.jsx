import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, subTotal } = useContext(CartContext);

  

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
      ))}
      <span className="total"> Total: ${subTotal}</span>
    </div>
  );
};

export default CheckOut;

{
  /* <div>
        {cartItems.map((item) => (
          <CheckoutItem
            key={item.id}
            checkoutItem={item}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
          />
        ))}
      </div> */
}
