import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { selectItems, selectTotalPrice } from "../../store/cart/cart.selector";
import { selectCurrentLanguage } from "../../store/language/language.selector";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const currentLanguage = useSelector(selectCurrentLanguage);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock className="header-block">
          {currentLanguage ? "Товар" : "Product"}
        </HeaderBlock>
        <HeaderBlock className="header-block">
          {currentLanguage ? "Описание" : "Description"}
        </HeaderBlock>
        <HeaderBlock className="header-block">
          {currentLanguage ? "Кол-во" : "Quantity"}
        </HeaderBlock>
        <HeaderBlock className="header-block">
          {currentLanguage ? "Цена" : "Price"}
        </HeaderBlock>
        <HeaderBlock className="header-block">
          {currentLanguage ? "Удалить" : "Remove"}
        </HeaderBlock>
      </CheckoutHeader>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total className="total">{currentLanguage ? "ИТОГО" : "TOTAL"}: ${totalPrice}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
