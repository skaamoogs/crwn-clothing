import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const navigate = useNavigate();

  const goToCategory = (event) => {
    navigate(`/shop/${event.target.id}`);
  };

  return (
    <div>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products}/>
      })}
    </div>
  );
};

export default Shop;
