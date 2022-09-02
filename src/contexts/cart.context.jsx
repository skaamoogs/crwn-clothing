import { createContext, useEffect, useReducer } from "react";

const updateCart = (items, itemToAdd) => {
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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  items: [],
  addItemToCart: () => {},
  changeItemQty: () => {},
  itemsCounter: 0,
  totalPrice: 0,
});

export const CART_ACTION_TYPES = {
  UPDATE_CART: "UPDATE_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  items: [],
  itemsCounter: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [{ items, isCartOpen, itemsCounter, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartReducer = (payload) => {
    dispatch({ type: CART_ACTION_TYPES.UPDATE_CART, payload: payload });
  };

  useEffect(() => {
    const newItemsCounter = items.reduce((total, item) => total + item.qty, 0);
    const newTotalPrice = items.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
    updateCartReducer({itemsCounter: newItemsCounter, totalPrice: newTotalPrice});
  }, [items]);

  const addItemToCart = (itemToAdd) => {
    updateCartReducer({items: updateCart(items, itemToAdd)});
  };

  const changeItemQty = (itemId, newQty) => {
    updateCartReducer({items: changeItem(items, itemId, newQty)});
  };

  const setIsCartOpen = (isCartOpen) => {
    updateCartReducer({isCartOpen: isCartOpen})
  }
  
  const value = {
    items,
    addItemToCart,
    isCartOpen,
    setIsCartOpen,
    itemsCounter,
    totalPrice,
    changeItemQty,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
