import React from 'react';

const UserCartContext = React.createContext();

export const CartContext = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const cartContextValue = React.useMemo(() => ({
    cart,

    addToCart: (item) => {
      setCart([...cart, { ...item, amount: 0 }]);
      console.log(cart);
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
