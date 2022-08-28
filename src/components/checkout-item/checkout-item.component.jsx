import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, qty, id } = item;
  const { changeItemQty } = useContext(CartContext);

  const handleQtyChange = (event) => {
    const newQty = event.target.id === "inc" ? qty + 1 : event.target.id === "dec" ? qty - 1 : 0
    changeItemQty(id, newQty);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" id="dec" onClick={handleQtyChange}>
          &lt;
        </div>
        <div className="value">{qty}</div>
        <div className="arrow" id="inc" onClick={handleQtyChange}>
          &gt;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleQtyChange}>x</div>
    </div>
  );
};

export default CheckoutItem;
