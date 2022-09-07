import { useDispatch, useSelector } from "react-redux";
import { changeItemQty } from "../../store/cart/cart.action";
import { selectItems } from "../../store/cart/cart.selector";
import {
  CheckoutImageContainer,
  CheckoutItemArrow,
  CheckoutItemContainer,
  CheckoutItemDetails,
  CheckoutItemQty,
  CheckoutItemValue,
  CheckoutRemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, qty, id } = item;
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const changeItemHandler = (event) => {
    const newQty =
      event.target.id === "inc"
        ? qty + 1
        : event.target.id === "dec"
        ? qty - 1
        : 0;
    dispatch(changeItemQty(items, id, newQty));
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
