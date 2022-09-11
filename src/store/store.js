import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk"

import storage from "redux-persist/lib/storage";

const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

export const persistor = persistStore(store);
