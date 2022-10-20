import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from './contexts/cart-context';
import { FilterContext } from './contexts/filter-context';
import PageRoutes from './routes';

const App = () => (
  <BrowserRouter>
    <CartContext>
      <FilterContext>
        <PageRoutes />
      </FilterContext>
    </CartContext>
  </BrowserRouter>
);

export default App;
