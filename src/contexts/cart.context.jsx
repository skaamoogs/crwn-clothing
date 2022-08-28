import { createContext, useEffect, useState } from "react";

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
  return items.filter((item) => item.id !== itemId)
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

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemsCounter, setItemsCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newItemsCounter = items.reduce((total, item) => total + item.qty, 0);
    const newTotalPrice = items.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
    setTotalPrice(newTotalPrice);
    setItemsCounter(newItemsCounter);
  }, [items]);

  const addItemToCart = (itemToAdd) => {
    setItems(updateCart(items, itemToAdd));
  };

  const changeItemQty = (itemId, newQty) => {
    setItems(changeItem(items, itemId, newQty));
  };

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
