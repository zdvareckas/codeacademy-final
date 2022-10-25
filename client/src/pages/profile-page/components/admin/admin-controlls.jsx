import React from 'react';
import {
  Box, Button, Divider, Modal, Typography,
} from '@mui/material';
import { suspensionsService } from '../../../../services/suspensions-service';
import { materialsService } from '../../../../services/materials-service';
import { sizesService } from '../../../../services/sizes-service';
import { typesService } from '../../../../services/types-service';
import { categoriesService } from '../../../../services/category-service';
import useAuthContext from '../../../../hooks/useAuthContext';
import BikeCreationForm from './components/bike-creation-form';
import EquipmentCreationForm from './components/equipment-creation-form';

const AdminControlls = () => {
  const [bikeCreationOpen, setBikeCreationOpen] = React.useState(false);
  const [equipmentCreationOpen, setEquipmentCreationOpen] = React.useState(false);
  const handleBikeCreationModalOpen = () => setBikeCreationOpen(true);
  const handleEquipmentCreationModalOpen = () => setEquipmentCreationOpen(true);

  const [bikeSuspensions, setBikeSuspensions] = React.useState([]);
  const [bikeTypes, setBikeTypes] = React.useState([]);
  const [bikeMaterials, setBikeMaterials] = React.useState([]);
  const [sizes, setSizes] = React.useState([]);
  const [equipmentCategories, setEquipmentCategories] = React.useState([]);

  const { user } = useAuthContext();

  React.useEffect(() => {
    (async () => {
      const [fetchedSuspensions,
        fetchedMaterials,
        fetchedSizes,
        fetchedTypes,
        fetchedCategories,
      ] = await Promise.all(
        [
          suspensionsService.fetchAll(),
          materialsService.fetchAll(),
          sizesService.fetchAll(),
          typesService.fetchAll(),
          categoriesService.fetchAll(),
        ],
      );
      setBikeSuspensions(fetchedSuspensions);
      setBikeMaterials(fetchedMaterials);
      setSizes(fetchedSizes);
      setBikeTypes(fetchedTypes);
      setEquipmentCategories(fetchedCategories);
    })();
  }, []);

  return (
    <Box sx={{ display: `${user.role === 'ADMIN' ? 'flex' : 'none'}`, gap: 1 }}>
      <Button
        onClick={handleBikeCreationModalOpen}
        variant="contained"
      >
        ADD BIKE
      </Button>

      <Button
        onClick={handleEquipmentCreationModalOpen}
        variant="contained"
      >
        ADD EQUIPMENT
      </Button>

      <Modal
        onClose={() => setBikeCreationOpen(!bikeCreationOpen)}
        open={bikeCreationOpen}
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
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            sx={{ p: 1 }}
          >
            Add a new bike
          </Typography>
          <Divider sx={{ width: '100%' }} />

          <BikeCreationForm
            sizes={sizes}
            bikeSuspensions={bikeSuspensions}
            bikeMaterials={bikeMaterials}
            bikeTypes={bikeTypes}
          />
        </Box>
      </Modal>

      <Modal
        onClose={() => setEquipmentCreationOpen(!equipmentCreationOpen)}
        open={equipmentCreationOpen}
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
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            sx={{ p: 1 }}
          >
            Add a new equipment
          </Typography>

          <Divider sx={{ width: '100%' }} />

          <EquipmentCreationForm
            sizes={sizes}
            equipmentCategories={equipmentCategories}
          />
        </Box>
      </Modal>

    </Box>
  );
};

export default AdminControlls;
