import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + quantity };
        }
        return product;
      }));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter(product => product.id !== itemId));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(product => product.id === itemId);
  };

  const cartTotal = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  };

  const cartTotalPrice = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartTotal, cartTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
