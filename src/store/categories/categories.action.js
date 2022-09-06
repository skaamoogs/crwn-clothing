import { createAction } from "@reduxjs/toolkit";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategoriesMap = createAction(
  CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP
);
