import { CartItemContainer, ItemDetails, ItemName } from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { name, imageUrl, price, qty } = item;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>
          {qty} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
