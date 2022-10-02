import { createAction } from "@reduxjs/toolkit";
import { LANGUAGE_ACTION_TYPES } from "./language.types";

export const setLanguage = createAction(LANGUAGE_ACTION_TYPES.SET_LANGUAGE);
