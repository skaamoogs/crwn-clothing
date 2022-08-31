import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardContainer, ProductCardFooter, ProductCardName, ProductCardPrice } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </ProductCardFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
