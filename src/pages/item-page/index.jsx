import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { bikeService } from '../../services/bikes-service';

const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await bikeService.fetchById(itemId);
      console.log(data);
      setItem(data);
    })();
  }, [itemId]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>

      <Box sx={{
        display: 'flex',
        gap: 5,
        justifyContent: 'center',
        p: 5,
        width: '100%',
        flexDirection: 'row',
      }}
      >

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          width: '60%',
          // height: 300,
          maxHeight: 700,
          overflow: 'auto',
          '&::-webkit-scrollbar': { width: 0 },
        }}
        >
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

        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          width: { xs: '100%', md: '40%' },
          gap: 2,
        }}
        >

          <Typography variant="h2">
            {item.title}
          </Typography>

          <Typography variant="h5">{item.price}</Typography>

          <Typography variant="h6">Select size:</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="outlined">{item.size?.label}</Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ width: '50%' }}
          >
            {item.description}

          </Typography>

        </Box>

      </Box>
    </Box>

  );
};

export default ItemPage;
