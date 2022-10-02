import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import storage from "redux-persist/lib/storage";
import { rootSaga } from "./root.saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "language"],
};

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
