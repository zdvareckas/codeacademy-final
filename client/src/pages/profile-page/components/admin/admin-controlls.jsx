/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Box, Button, Divider, Modal, Typography,
} from '@mui/material';
import { suspensionsService } from '../../../../services/suspensions-service';
import { materialsService } from '../../../../services/materials-service';
import { sizesService } from '../../../../services/sizes-service';
import { typesService } from '../../../../services/types-service';
import useAuthContext from '../../../../hooks/useAuthContext';
import BikeCreationForm from './components/bike-creation-form';

const AdminControlls = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [bikeSuspensions, setBikeSuspensions] = React.useState([]);
  const [bikeTypes, setBikeTypes] = React.useState([]);
  const [bikeMaterials, setBikeMaterials] = React.useState([]);
  const [bikeSizes, setBikeSizes] = React.useState([]);

  const { user } = useAuthContext();

  React.useEffect(() => {
    (async () => {
      const [fetchedSuspensions, fetchedMaterials, fetchedSizes, fetchedTypes] = await Promise.all(
        [
          suspensionsService.fetchAll(),
          materialsService.fetchAll(),
          sizesService.fetchAll(),
          typesService.fetchAll(),
        ],
      );
      setBikeSuspensions(fetchedSuspensions);
      setBikeMaterials(fetchedMaterials);
      setBikeSizes(fetchedSizes);
      setBikeTypes(fetchedTypes);
    })();
  }, []);

  return (
    <Box sx={{ display: `${user.role === 'ADMIN' ? '' : 'none'}` }}>
      <Button
        onClick={handleOpen}
        variant="contained"
      >
        ADD NEW BIKE
      </Button>

      <Modal
        onClose={handleClose}
        open={open}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'common.white',
            p: 1,
            mx: 'auto',
            width: { xs: '90%', md: '50%' },
          }}
        >
          <Typography
            variant="h6"
            textAlign="center"
          >
            Add a new bike
          </Typography>
          <Divider sx={{ width: '100%' }} />
          <BikeCreationForm
            bikeSizes={bikeSizes}
            bikeSuspensions={bikeSuspensions}
            bikeMaterials={bikeMaterials}
            bikeTypes={bikeTypes}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminControlls;
