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
      const { id, items } = category;
      acc[id.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
