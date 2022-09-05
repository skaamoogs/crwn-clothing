import {
  applyMiddleware,
  compose,
  configureStore,
  createStore,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
