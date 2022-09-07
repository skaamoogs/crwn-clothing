import { createSelector } from "reselect";

const selectItemsReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectItemsReducer],
  (cart) => cart.isCartOpen
);

export const selectItems = createSelector(
  [selectItemsReducer],
  (cart) => cart.items
);

export const selectItemsCounter = createSelector([selectItems], (items) =>
  items.reduce((total, item) => total + item.qty, 0)
);

export const selectTotalPrice = createSelector([selectItems], (items) =>
  items.reduce((total, item) => total + item.price * item.qty, 0)
);


