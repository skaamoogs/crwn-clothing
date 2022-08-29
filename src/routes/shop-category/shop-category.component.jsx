import { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./shop-category.styles.scss";

const ShopCategory = ({ title }) => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      <h2>{title.toUpperCase()}</h2>
      <div className="shop-products-container">
        {categoriesMap[title].map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </Fragment>
  );
};
export default ShopCategory;
