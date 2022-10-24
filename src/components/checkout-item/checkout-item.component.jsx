import { useDispatch, useSelector } from "react-redux";

import {
  clearItemsFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  InfoContainer,
  Price,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemsFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <div style={{ flexGrow: 1, height: "inherit", padding: 12 }}>
        <InfoContainer>
          <BaseSpan> {name} </BaseSpan>
          <span>size: S</span>
          <Quantity>
            <span style={{marginRight: 16}}>Quantity:</span>
            <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={addItemHandler}>&#10095;</Arrow>
          </Quantity>
          <RemoveButton onClick={clearItemHandler}>remove</RemoveButton>
        </InfoContainer>
      </div>
      <div style={{ height: "inherit", textAlign: "end" }}>
        <Price>$ {price}</Price>
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
