import React from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { equiptmentService } from '../../services/equiptment-service';
import { ResponsiveItemsGrid, Banner, ShopItem } from '../../components';
import EquiptmentsFilter from './components/equiptments-filter';
import useFilterContext from '../../hooks/useFilterContext';

const EquipmentsPage = () => {
  const [equiptment, setEquipment] = React.useState([]);
  const [searchParams] = useSearchParams();
  const { filterOpen } = useFilterContext();

  React.useEffect(() => {
    (async () => {
      const data = await equiptmentService.fetchAll(searchParams.toString());
      setEquipment(data);
    })();
  }, [searchParams]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Banner />
      <Box sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: {
          xs: `${filterOpen ? 'center' : 'center'}`,
          lg: `${filterOpen ? 'start' : 'center'}`,
        },
      }}
      >
        <EquiptmentsFilter />
        <ResponsiveItemsGrid filtersOpen={filterOpen}>
          {equiptment.map(({
            id, title, price, images,
          }) => (
            <ShopItem
              key={id}
              id={id}
              title={title}
              images={images}
              price={price}
              itemType="equipment"
            />
          ))}

        </ResponsiveItemsGrid>
      </Box>
    </Box>
  );
};

export default EquipmentsPage;
