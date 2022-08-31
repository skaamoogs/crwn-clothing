import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewStyle,
  CategoryTitle,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
      <CategoryPreviewStyle>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </CategoryPreviewStyle>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
