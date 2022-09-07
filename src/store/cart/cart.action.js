import { createAction } from "@reduxjs/toolkit";
import { CART_ACTION_TYPES } from "./cart.types";

const addItem = (items, itemToAdd) => {
  const existingCartItem = items.find((item) => item.id === itemToAdd.id);
  if (existingCartItem) {
    return items.map((item) =>
      item.id === existingCartItem.id ? { ...item, qty: item.qty + 1 } : item
    );
  }

  return [...items, { ...itemToAdd, qty: 1 }];
};

const changeItem = (items, itemId, newQty) => {
  if (newQty > 0) {
    return items.map((item) =>
      item.id === itemId ? { ...item, qty: newQty } : item
    );
  }
  return items.filter((item) => item.id !== itemId);
};

const preparePayload = createAction(CART_ACTION_TYPES.SET_ITEMS)

export const addItemToCart = (items, itemToAdd) => {
  const newItems = addItem(items, itemToAdd);
  return preparePayload(newItems);
};

export const changeItemQty = (items, itemId, newQty) => {
  const newItems = changeItem(items, itemId, newQty);
  return preparePayload(newItems);
};

export const setCartIsOpen = createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN);
