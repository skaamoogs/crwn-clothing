import { LANGUAGE_ACTION_TYPES } from "./language.types";

const INITIAL_STATE = {
  currentLanguage: false,
};

export const languageReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case LANGUAGE_ACTION_TYPES.SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: payload,
      };
    default:
      return state;
  }
};
