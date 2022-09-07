import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCartIsOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen, selectItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.stylse";

const CartDropdown = () => {
  const items = useSelector(selectItems);
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
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
