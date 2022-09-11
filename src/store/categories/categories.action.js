import { createAction } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const fetchCategoriesStart = createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
);

const fetchCategoriesSuccess = createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS
);

const fetchCategoriesFailed = createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED
);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categories = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
