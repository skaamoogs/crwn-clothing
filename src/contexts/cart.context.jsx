import { createContext, useState } from "react";

const updateCart = (cart, itemToAdd) => {
  let newCart = cart.slice();
  let isItemInCart = false;
  for (let item of newCart) {
    if (item.id === itemToAdd.id) {
      isItemInCart = true;
      item.qty += 1;
      break;
    }
  }
  if (!isItemInCart) {
    itemToAdd.qty = 1;
    newCart.push(itemToAdd)
  }
  return newCart; 
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  items: [],
  setItems: () => {},
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { items, setItems, isCartOpen, setIsCartOpen };

  const addItemToCart = (itemToAdd) => {
    setItems(updateCart(items, itemToAdd));
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
