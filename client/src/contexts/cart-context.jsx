import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserCartContext = React.createContext();

export const CartContext = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const cartContextValue = React.useMemo(() => ({
    cart,

    addToCart: (item) => {
      setCart([...cart, item]);
    },

    removeFromCart: (id) => {
      setCart(cart.filter((x) => (x.id !== id)));
    },

    updateCartItemCount: ({ item, amount }) => {
      setCart(
        cart.map((x) => (x.id === item.id ? { ...item, amount } : x)),
      );
    },

  }), [cart, setCart]);

  return (
    <UserCartContext.Provider value={cartContextValue}>
      {children}
    </UserCartContext.Provider>
  );
};

export default UserCartContext;
