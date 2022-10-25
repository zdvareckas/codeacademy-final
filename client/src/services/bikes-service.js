const domain = process.env.REACT_APP_SERVER_DOMAIN;
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

const addNew = async (data) => {
  const response = await fetch(`${domain}/${collectionName}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  });
  const responseData = await response.json();

  if (response.status >= 400) {
    throw new Error(responseData.message);
  }

  return response;
};

export const bikesService = {
  fetchAll,
  fetchById,
  addNew,
};
