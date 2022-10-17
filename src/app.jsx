import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FilterContext } from './contexts/filter-context';
import PageRoutes from './routes';

const App = () => (
  <BrowserRouter>
    <FilterContext>
      <PageRoutes />
    </FilterContext>
  </BrowserRouter>
);

export default App;
