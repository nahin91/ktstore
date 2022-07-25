import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem, addItemToCart, removeItemFromCart }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price * quantity}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
{
  /* <span onClick={() => removeItemFromCart(checkoutItem)}>decrement</span>
      <span onClick={() => addItemToCart(checkoutItem)}>increment</span> */
}
