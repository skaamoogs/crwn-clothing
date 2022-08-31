import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutImageContainer, CheckoutItemArrow, CheckoutItemContainer, CheckoutItemDetails, CheckoutItemQty, CheckoutItemValue, CheckoutRemoveButton } from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, qty, id } = item;
  const { changeItemQty } = useContext(CartContext);

  const changeItemHandler = (event) => {
    const newQty =
      event.target.id === "inc"
        ? qty + 1
        : event.target.id === "dec"
        ? qty - 1
        : 0;
    changeItemQty(id, newQty);
  };

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutImageContainer>
      <CheckoutItemDetails>{name}</CheckoutItemDetails>
      <CheckoutItemQty>
        <CheckoutItemArrow id="dec" onClick={changeItemHandler}>
          &#10094;
        </CheckoutItemArrow>
        <CheckoutItemValue>{qty}</CheckoutItemValue>
        <CheckoutItemArrow id="inc" onClick={changeItemHandler}>
          &#10095;
        </CheckoutItemArrow>
      </CheckoutItemQty>
      <CheckoutItemDetails>{price}</CheckoutItemDetails>
      <CheckoutRemoveButton onClick={changeItemHandler}>
        &#10005;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
