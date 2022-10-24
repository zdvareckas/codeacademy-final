import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { sizesService } from '../../../services/sizes-service';
import { categoriesService } from '../../../services/category-service';
import { Filter } from '../../../components';
import FilterField from '../../../components/filter/components/filter-field';

const EquiptmentsFilter = () => {
  const [equiptmentSizeFilter, setEquipmentSizeFilter] = React.useState('');
  const [equiptmentCategoryFilter, setEquiptmentCategoryFilter] = React.useState('');

  const [equiptmentSizes, setEquiptmentSizes] = React.useState([]);
  const [equiptmentCategories, setEquipmentCategories] = React.useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    (async () => {
      const [fetchedSizes, fetchedCategories] = await Promise.all(
        [
          sizesService.fetchAll(),
          categoriesService.fetchAll(),
        ],
      );
      setEquiptmentSizes(fetchedSizes);
      setEquipmentCategories(fetchedCategories);
    })();
  }, []);

  const handleEquiptmentCategoryChange = (e) => {
    if (e.target.value) {
      searchParams.set('categoryId', e.target.value);
    } else {
      searchParams.delete('categoryId');
    }

    setSearchParams(searchParams);
    setEquiptmentCategoryFilter(e.target.value);
  };

  const handleEquiptmentSizeChange = (e) => {
    if (e.target.value) {
      searchParams.set('sizeId', e.target.value);
    } else {
      searchParams.delete('sizeId');
    }

    setSearchParams(searchParams);
    setEquipmentSizeFilter(e.target.value);
  };

  const handleFilterReset = () => {
    setSearchParams([]);
    setEquipmentSizeFilter('');
    setEquiptmentCategoryFilter('');
  };

  return (
    <Filter
      handleReset={handleFilterReset}
    >
      <FilterField
        fieldLabel="Categories"
        options={equiptmentCategories}
        value={equiptmentCategoryFilter}
        onChange={handleEquiptmentCategoryChange}
      />
      <FilterField
        fieldLabel="Sizes"
        options={equiptmentSizes}
        value={equiptmentSizeFilter}
        onChange={handleEquiptmentSizeChange}
      />
    </Filter>
  );
};
export default EquiptmentsFilter;
