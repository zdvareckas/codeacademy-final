import React from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import StraightenIcon from '@mui/icons-material/Straighten';
import { ItemContent, ScrollableImageContainer, Banner } from '../../components';
import { bikesService } from '../../services/bikes-service';
import useUserCartContext from '../../hooks/useCartContext';

const BikePage = () => {
  const { bikeId } = useParams();
  const [bike, setBike] = React.useState([]);
  const [sizeGuideOpen, setSizeGuideOpen] = React.useState(false);
  const { cart, addToCart } = useUserCartContext();

  React.useEffect(() => {
    (async () => {
      const data = await bikesService.fetchById(bikeId);
      setBike({ ...data, amount: 1 });
    })();
  }, [bikeId]);

  return (
    <>
      <Banner
        img="./bikes-banner.jpg"
        title="BIKES"
      />

      <Container sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        p: 5,
      }}
      >
        <ScrollableImageContainer>
          {bike.images?.map((image) => (
            <Box
              component="img"
              key={image}
              src={image}
            />
          ))}
        </ScrollableImageContainer>

        <ItemContent>
          <Typography variant="h4" fontWeight="bold">
            {bike.title}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Chip label={bike.material?.label} />
            <Chip label={bike.suspension?.label} />
            <Chip label={bike.type?.label} />
          </Box>

          <Typography variant="h5" color="grey.700">
            $
            {bike.price}
          </Typography>

          <Typography variant="h6">Available Sizes:</Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 100px)',
            gap: 1,
          }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: 'grey.700',
                borderColor: 'grey.700',
              }}
            >
              {bike.size?.label}
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ width: { xs: '100%', md: '90%' } }}
          >
            {bike.description}
          </Typography>

          <Button
            sx={{ alignSelf: 'start' }}
            onClick={() => {
              setSizeGuideOpen(!sizeGuideOpen);
            }}
            endIcon={<StraightenIcon />}
          >
            Size guide
          </Button>

          <Button
            variant="contained"
            color="success"
            sx={{
              position: 'absolute',
              bottom: 5,
              width: '96%',
            }}
            onClick={() => {
              addToCart(bike);
            }}
            disabled={Boolean(cart.find((x) => x.id === bike.id))}
          >
            ADD TO CART
          </Button>
        </ItemContent>

        <Dialog
          open={sizeGuideOpen}
          onClose={() => {
            setSizeGuideOpen(!sizeGuideOpen);
          }}
        >
          <Box component="img" src="/bike-sizes.jpg" />
        </Dialog>
      </Container>
    </>
  );
};

export default BikePage;
