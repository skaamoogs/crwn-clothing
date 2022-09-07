import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

const selectCaregories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCaregories],
  (categories) => 
  categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);