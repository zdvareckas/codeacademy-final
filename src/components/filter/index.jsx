import React from 'react';
import {
  Box,
  Button,
  Drawer,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { suspensionsService } from '../../services/suspensions-service copy';
import { materialsService } from '../../services/materials-service';
import { sizesService } from '../../services/sizes-service';
import { typesService } from '../../services/types-service';
import FilterField from './components/filter-field';

const Filter = ({ filtersOpen }) => {
  const [bikeSuspensionTypeFilter, setBikeSuspensionTypeFilter] = React.useState('');
  const [bikeTypeFilter, setBikeTypeFilter] = React.useState('');
  const [bikeMaterialFilter, setBikeMaterialFilter] = React.useState('');
  const [bikeSizeFilter, setBikeSizeFilter] = React.useState('');

  const [bikeSuspensions, setBikeSuspensions] = React.useState([]);
  const [bikeTypes, setBikeTypes] = React.useState([]);
  const [bikeMaterials, setBikeMaterials] = React.useState([]);
  const [bikeSizes, setBikeSizes] = React.useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleBikeSuspensionChange = (e) => {
    if (e.target.value) {
      searchParams.set('suspensionId', e.target.value);
    } else {
      searchParams.delete('suspensionId');
    }
    setSearchParams(searchParams);
    setBikeSuspensionTypeFilter(e.target.value);
  };

  const hanldleBikeTypeChange = (e) => {
    if (e.target.value) {
      searchParams.set('typeId', e.target.value);
    } else {
      searchParams.delete('typeId');
    }
    setSearchParams(searchParams);
    setBikeTypeFilter(e.target.value);
  };

  const handleBikeMaterialChange = (e) => {
    if (e.target.value) {
      searchParams.set('materialId', e.target.value);
    } else {
      searchParams.delete('materialId');
    }
    setSearchParams(searchParams);
    setBikeMaterialFilter(e.target.value);
  };

  const handleBikeSizeChange = (e) => {
    if (e.target.value) {
      searchParams.set('sizeId', e.target.value);
    } else {
      searchParams.delete('sizeId');
    }
    setSearchParams(searchParams);
    setBikeSizeFilter(e.target.value);
  };

  const handleFilterReset = () => {
    setSearchParams([]);
    setBikeSuspensionTypeFilter('');
    setBikeTypeFilter('');
    setBikeMaterialFilter('');
    setBikeSizeFilter('');
  };

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
    <Drawer
      open={filtersOpen}
      variant="persistent"
      elevation={0}
      PaperProps={{
        sx: {
          mt: 8,
          p: 4,
          width: 300,
        },
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
      }}
      >
        <FilterField
          fieldLabel="Suspensions"
          options={bikeSuspensions}
          value={bikeSuspensionTypeFilter}
          onChange={handleBikeSuspensionChange}
        />

        <FilterField
          fieldLabel="Types"
          options={bikeTypes}
          value={bikeTypeFilter}
          onChange={hanldleBikeTypeChange}
        />

        <FilterField
          fieldLabel="Materials"
          options={bikeMaterials}
          value={bikeMaterialFilter}
          onChange={handleBikeMaterialChange}
        />

        <FilterField
          fieldLabel="Sizes"
          options={bikeSizes}
          value={bikeSizeFilter}
          onChange={handleBikeSizeChange}
        />
        <Button
          onClick={handleFilterReset}
        >
          Reset filters
        </Button>
      </Box>
    </Drawer>
  );
};

export default Filter;
