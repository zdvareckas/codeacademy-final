import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { ItemContent, ScrollableImageContainer, Banner } from '../../components';
import { equiptmentService } from '../../services/equiptment-service';
import useUserCartContext from '../../hooks/useCartContext';

const EquipmentPage = () => {
  const { equipmentId } = useParams();
  const [equipment, setEquipment] = React.useState([]);
  const { cart, addToCart } = useUserCartContext();

  React.useEffect(() => {
    (async () => {
      const data = await equiptmentService.fetchById(equipmentId);
      setEquipment({ ...data, amount: 1 });
    })();
  }, [equipmentId]);

  return (
    <>
      <Banner
        img="../equipment-banner.png"
        title="EQUIPMENT"
      />
      <Container sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        p: 5,
      }}
      >
        <ScrollableImageContainer>
          {equipment.images?.map((image) => (
            <Box
              component="img"
              key={image}
              src={image}
            />
          ))}
        </ScrollableImageContainer>

        <ItemContent>
          <Typography variant="h4" fontWeight="bold">
            {equipment.title}
          </Typography>

          <Typography variant="h5" color="grey.700">
            $
            {equipment.price}
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
              {equipment.size?.label}
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ width: { xs: '100%', md: '60%' } }}
          >
            {equipment.description}
          </Typography>

          <Button
            variant="contained"
            color="success"
            sx={{
              position: 'absolute',
              bottom: 5,
              width: '96%',
            }}
            onClick={() => {
              addToCart(equipment);
            }}
            disabled={Boolean(cart.find((x) => x.id === equipment.id))}
          >
            {cart.find((x) => x.id === equipment.id) ? 'In cart' : 'ADD TO CART'}
          </Button>
        </ItemContent>
      </Container>
    </>
  );
};

export default EquipmentPage;
