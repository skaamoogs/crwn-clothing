import { createAction } from "@reduxjs/toolkit";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const fetchCategoriesStart = createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
);

export const fetchCategoriesSuccess = createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS
);

export const fetchCategoriesFailed = createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED
);
