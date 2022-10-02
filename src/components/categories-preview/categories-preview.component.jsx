import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import Spinner from "../spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? <Spinner /> : Object.keys(categoriesMap).map((id) => {
        const products = categoriesMap[id];
        return (
          <CategoryPreview key={id} id={id} title={id} products={products} />
        );
      })}
      
    </Fragment>
  );
};

export default CategoriesPreview;
