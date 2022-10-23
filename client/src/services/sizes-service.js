const domain = 'http://localhost:8000';
const collectionName = 'sizes';

const fetchAll = async () => {
  const response = await fetch(`${domain}/${collectionName}`);
  const fetchedItems = await response.json();

  return fetchedItems;
};

export const sizesService = {
  fetchAll,
};
