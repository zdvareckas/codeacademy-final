import {
  Box, Button, Dialog, Typography,
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

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 5,
        flexDirection: { xs: 'column', md: 'row' },
        mx: { xs: 5, md: 10 },
        p: 1,
      }}
      >

        <ScrollableImageContainer>

          <Box
            component="img"
            src={item.img}
          />
          <Box
            component="img"
            src={item.img}
          />
          <Box
            component="img"
            src={item.img}
          />

        </ScrollableImageContainer>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          width: { xs: '100%', md: '40%' },
          gap: 2,
        }}
        >

          <Typography variant="h3">
            {item.title}
          </Typography>

          <Typography variant="h5">{item.price}</Typography>

          <Typography variant="h6">Select size:</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="outlined">{item.size?.label}</Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ width: { xs: '100%', md: '60%' } }}
          >
            {item.description}
          </Typography>

          <Button
            onClick={() => {
              setSizeGuideOpen(!sizeGuideOpen);
            }}
            endIcon={<StraightenIcon />}
          >
            Size guide
          </Button>
        </Box>

        <Dialog
          open={sizeGuideOpen}
          onClose={() => {
            setSizeGuideOpen(!sizeGuideOpen);
          }}
        >
          <Box component="img" src="/bike-sizes.jpg" />
        </Dialog>

      </Box>
    </>

  );
};

export default ItemPage;
