import {
  Box, Button, Container, Dialog, Paper, Typography,
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import StraightenIcon from '@mui/icons-material/Straighten';
import { bikeService } from '../../services/bikes-service';
import Banner from '../../components/banner';
import { ScrollableImageContainer } from './components';

const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = React.useState([]);
  const [sizeGuideOpen, setSizeGuideOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const data = await bikeService.fetchById(itemId);
      setItem(data);
    })();
  }, [itemId]);

  return (
    <>
      <Banner />

      <Container sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        p: 5,
      }}
      >

        <ScrollableImageContainer>
          {item.images?.map((image) => (
            <Box component="img" src={image} />
          ))}
        </ScrollableImageContainer>

        <Paper sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: '40%' },
          p: 1,
          gap: 2,
        }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            {item.title}
          </Typography>

          <Typography
            variant="h5"
            color="grey.700"
          >
            {item.price}
          </Typography>

          <Typography variant="h6">Select size:</Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 100px)',
            gap: 1,
          }}
          >
            <Button
              variant="outlined"
              sx={{ color: 'grey.700', borderColor: 'grey.700' }}
            >
              {item.size?.label}
            </Button>
            <Button
              variant="outlined"
              sx={{ color: 'grey.700', borderColor: 'grey.700' }}
            >
              {item.size?.label}
            </Button>
            <Button
              variant="outlined"
              sx={{ color: 'grey.700', borderColor: 'grey.700' }}
            >
              {item.size?.label}
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ width: { xs: '100%', md: '60%' } }}
          >
            {item.description}
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
            sx={{ mt: 9 }}
          >
            ADD TO CART
          </Button>
        </Paper>

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

export default ItemPage;
