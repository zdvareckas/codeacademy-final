const domain = 'http://localhost:8000';
const collectionName = 'types';

const fetchAll = async () => {
  const response = await fetch(`${domain}/${collectionName}`);
  const fetchedItems = await response.json();

  return fetchedItems;
};

export const typesService = {
  fetchAll,
};
