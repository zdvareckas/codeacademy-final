const domain = 'http://localhost:2566';
const collectionName = 'api/bikes';
const relationshipParams = 'expand=all';

const fetchAll = async (searchParams = null) => {
  const urlSearchParams = searchParams ? `&${searchParams}` : '';
  const response = await fetch(`${domain}/${collectionName}?${relationshipParams}${urlSearchParams}`);
  const fetchedItems = await response.json();

  return fetchedItems;
};

const fetchById = async (id) => {
  const fetchedData = await fetch(`${domain}/${collectionName}/${id}?${relationshipParams}`);
  const item = await fetchedData.json();

  return item;
};

export const bikesService = {
  fetchAll,
  fetchById,
};
