import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { items, totalPrice } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock className="header-block">Product</HeaderBlock>
        <HeaderBlock className="header-block">Description</HeaderBlock>
        <HeaderBlock className="header-block">Quantity</HeaderBlock>
        <HeaderBlock className="header-block">Price</HeaderBlock>
        <HeaderBlock className="header-block">Remove</HeaderBlock>
      </CheckoutHeader>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total className="total">TOTAL: ${totalPrice}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
