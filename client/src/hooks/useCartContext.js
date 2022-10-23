import React from 'react';
import UserCartContext from '../contexts/cart-context';

const useUserCartContext = () => React.useContext(UserCartContext);

export default useUserCartContext;
