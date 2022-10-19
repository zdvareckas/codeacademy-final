import React from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Banner from '../../components/banner';
import { equiptmentService } from '../../services/equiptment-serveice';

const EquipmentsPage = () => {
  const [equiptment, setEquipment] = React.useState([]);
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    (async () => {
      const data = await equiptmentService.fetchAll(searchParams.toString());
      setEquipment(data);
    })();
  }, [searchParams]);

  console.log(equiptment);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Banner />

    </Box>
  );
};

export default EquipmentsPage;
