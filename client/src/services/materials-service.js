const domain = 'http://localhost:2566';
const collectionName = 'api/materials';

const fetchAll = async () => {
  const response = await fetch(`${domain}/${collectionName}`);
  const fetchedItems = await response.json();

  return fetchedItems;
};

export const materialsService = {
  fetchAll,
};
