import React from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { equiptmentService } from '../../services/equiptment-service';
import ResponsiveItemsGrid from '../../components/responsive-items-grid';
import ShopItem from '../../components/shop-item';
import EquiptmentsFilter from './components/equiptments-filter';
import ItemFilterContext from '../../contexts/filter-context';
import Banner from '../../components/banner';

const EquipmentsPage = () => {
  const [equiptment, setEquipment] = React.useState([]);
  const [searchParams] = useSearchParams();
  const { filterOpen } = React.useContext(ItemFilterContext);

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
            />
          ))}

        </ResponsiveItemsGrid>
      </Box>
    </Box>
  );
};

export default EquipmentsPage;
