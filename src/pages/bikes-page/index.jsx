import React from 'react';
import {
  Box,
  IconButton,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { useSearchParams } from 'react-router-dom';
import Filter from '../../components/filter';
import ResponsiveItemsGrid from '../../components/responsive-items-grid';
import { bikeService } from '../../services/bikes-service';
import ShopItem from '../../components/shop-item';

const BikesPage = () => {
  const [filtersOpen, setFiltersOpen] = React.useState(true);
  const [bikes, setBikes] = React.useState([]);
  const [searchParams] = useSearchParams();

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
      <Box
        component="img"
        src="https://assets.specialized.com/i/specialized/plp-banner_Bikes?$hybris-category-hero$"
        sx={{
          height: 200,
          width: '100%',
          objectFit: 'cover',
          mb: 5,
        }}
      />

      <IconButton
        sx={{
          position: 'absolute',
          right: 35,
          top: 210,
        }}
        onClick={() => {
          setFiltersOpen(!filtersOpen);
        }}
      >
        <TuneIcon />
      </IconButton>

      <Filter
        filtersOpen={filtersOpen}
        setFiltersOpen={setFiltersOpen}
      />

      <ResponsiveItemsGrid filtersOpen={filtersOpen}>

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
