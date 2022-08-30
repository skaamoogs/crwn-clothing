import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.stylse";

const CartDropdown = () => {
  const { items, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
        <Button onClick={goToCheckOutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
