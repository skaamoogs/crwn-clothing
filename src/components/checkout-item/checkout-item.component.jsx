import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" id="dec" onClick={changeItemHandler}>
          &#10094;
        </div>
        <span className="value">{qty}</span>
        <div className="arrow" id="inc" onClick={changeItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={changeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
