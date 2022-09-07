import { useDispatch, useSelector } from "react-redux";
import { setCartIsOpen } from "../../store/cart/cart.action";
import {
  selectIsCartOpen,
  selectItemsCounter,
} from "../../store/cart/cart.selector";
import {
  CartIconContainer,
  CartIconStyle,
  ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const itemsCounter = useSelector(selectItemsCounter);
  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(setCartIsOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={openCartHandler}>
      <CartIconStyle className="shopping-icon" />
      <ItemCount className="item-count">{itemsCounter}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
