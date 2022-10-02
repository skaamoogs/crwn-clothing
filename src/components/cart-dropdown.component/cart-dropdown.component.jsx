import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCartIsOpen } from "../../store/cart/cart.action";
import { selectItems } from "../../store/cart/cart.selector";
import { selectCurrentLanguage } from "../../store/language/language.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const items = useSelector(selectItems);
  const currentLanguage = useSelector(selectCurrentLanguage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
    dispatch(setCartIsOpen(false));
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>{currentLanguage ? "Корзина пуста" : "Your cart is empty"}</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>{currentLanguage ? "Оформить заказ" : "Go to Checkout"}</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
