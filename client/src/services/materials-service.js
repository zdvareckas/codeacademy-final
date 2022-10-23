const domain = process.env.REACT_APP_SERVER_DOMAIN;
const collectionName = 'api/materials';

const fetchAll = async () => {
  const response = await fetch(`${domain}/${collectionName}`);
  const fetchedItems = await response.json();

  return fetchedItems;
};

export const materialsService = {
  fetchAll,
};
