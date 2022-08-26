import { createContext, useState } from "react";

const updateCart = (cart, itemToAdd) => {
  const existingCartItem = cart.find((item) => item.id === itemToAdd.id);
  if (existingCartItem) {
    return cart.map((item) =>
      item.id === existingCartItem.id ? { ...item, qty: item.qty + 1 } : item
    );
  }

  return [...cart, {...itemToAdd, qty: 1}];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  items: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItemToCart = (itemToAdd) => {
    setItems(updateCart(items, itemToAdd));
  };

  const value = { items, addItemToCart, isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
