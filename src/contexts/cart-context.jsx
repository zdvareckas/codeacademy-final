import React from 'react';

const UserCartContext = React.createContext();

export const CartContext = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const cartContextValue = React.useMemo(() => ({
    cart,

    addToCart: (item) => {
      setCart([...cart, { item, amount: 1 }]);
      console.log(cart);
    },

    removeFromCart: (id) => {
      setCart(cart.filter((x) => (x.item.id !== id)));
    },

  }), [cart]);

  return (
    <UserCartContext.Provider value={cartContextValue}>
      {children}
    </UserCartContext.Provider>
  );
};

export default UserCartContext;
