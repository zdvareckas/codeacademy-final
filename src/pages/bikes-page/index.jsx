import React from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { bikeService } from '../../services/bikes-service';
import ResponsiveItemsGrid from '../../components/responsive-items-grid';
import ShopItem from '../../components/shop-item';
import BikesFilter from './components/bikes-filter';
import ItemFilterContext from '../../contexts/filter-context';
import Banner from '../../components/banner';

const BikesPage = () => {
  const [bikes, setBikes] = React.useState([]);
  const [searchParams] = useSearchParams();
  const { filterOpen } = React.useContext(ItemFilterContext);

  React.useEffect(() => {
    (async () => {
      const data = await bikeService.fetchAll(searchParams.toString());
      setBikes(data);
    })();
  }, [searchParams]);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Banner />

      <BikesFilter />
      <ResponsiveItemsGrid filtersOpen={filterOpen}>
        {bikes.map(({
          id, title, price, img,
        }) => (
          <ShopItem
            key={id}
            id={id}
            title={title}
            img={img}
            price={price}
          />
        ))}

      </ResponsiveItemsGrid>

    </Box>
  );
};

export default BikesPage;
