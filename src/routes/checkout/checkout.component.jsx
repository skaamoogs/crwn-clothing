import { useContext } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectItems, selectTotalPrice } from "../../store/cart/cart.selector";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);

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
