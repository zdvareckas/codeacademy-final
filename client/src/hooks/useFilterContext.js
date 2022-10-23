import React from 'react';
import ItemFilterContext from '../contexts/filter-context';

const useFilterContext = () => React.useContext(ItemFilterContext);

export default useFilterContext;
