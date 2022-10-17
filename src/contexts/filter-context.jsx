import React from 'react';

const ItemFilterContext = React.createContext();

export const FilterContext = ({ children }) => {
  const [filterOpen, setFilterOpen] = React.useState(false);

  const filterContextValue = React.useMemo(() => ({
    filterOpen,

    handleFilterOpen: () => {
      setFilterOpen(!filterOpen);
    },
  }), [filterOpen]);

  return (
    <ItemFilterContext.Provider value={filterContextValue}>
      {children}
    </ItemFilterContext.Provider>
  );
};

export default ItemFilterContext;
