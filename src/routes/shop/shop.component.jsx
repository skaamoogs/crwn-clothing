import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
import { selectCurrentLanguage } from "../../store/language/language.selector";

import Category from "../category/category.component";

const Shop = () => {
  console.log("shop component rendered")
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrentLanguage);

  useEffect(() => {
    const collectionName = currentLanguage ? "categories_rus" : "categories";
    console.log("fetch categories start")
    dispatch(fetchCategoriesStart({ collectionName }));

  });

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
