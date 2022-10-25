import React from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { bikesService } from '../../services/bikes-service';
import { ResponsiveItemsGrid, Banner, ShopItem } from '../../components';
import BikesFilter from './components/bikes-filter';
import useFilterContext from '../../hooks/useFilterContext';

const BikesPage = () => {
  const [bikes, setBikes] = React.useState([]);
  const [searchParams] = useSearchParams();
  const { filterOpen } = useFilterContext();

  React.useEffect(() => {
    (async () => {
      const data = await bikesService.fetchAll(searchParams.toString());
      setBikes(data);
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
      <Banner
        img="./bikes-banner.jpg"
        title="BIKES"
      />
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
        <BikesFilter />
        {bikes && (
          <ResponsiveItemsGrid filtersOpen={filterOpen}>
            {bikes.map(({
              id, title, price, images, size,
            }) => (
              <ShopItem
                key={id}
                id={id}
                title={title}
                images={images}
                price={price}
                size={size.label}
                itemType="bike"
              />
            ))}
          </ResponsiveItemsGrid>
        )}
      </Box>
    </Box>
  );
};

export default BikesPage;
