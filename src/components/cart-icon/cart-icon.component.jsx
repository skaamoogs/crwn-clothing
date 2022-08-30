import { useContext } from "react";
import {
  CartIconContainer,
  CartIconStyle,
  ItemCount,
} from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemsCounter } = useContext(CartContext);

  const openCartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={openCartHandler}>
      <CartIconStyle className="shopping-icon" />
      <ItemCount className="item-count">{itemsCounter}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
