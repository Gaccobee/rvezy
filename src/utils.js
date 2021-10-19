export const constructUrlAndOptions = (apiUrl, apiKey, page, order, limit) => {
  const options = {
    headers: {
      "x-api-key": apiKey,
    },
  };

  const url = new URL(apiUrl);
  // Could also use a loop here but for this example/exercise
  // I think this is fine. 
  if (page) url.searchParams.append('page', page)
  if (order) url.searchParams.append('order', order)
  if (limit) url.searchParams.append('limit', limit)

  return { url, options } 
}

export const getBreedName = (item) => {
  if (
    item &&
    item.hasOwnProperty("breeds") &&
    Array.isArray(item.breeds) &&
    item.breeds.length > 0
  ) {
    return item["breeds"][0]["name"];
  }
  return undefined
};

export const dataTransform = (record) => {
  if (record && typeof record === 'object' && !Array.isArray(record)) {
    return [
      record?.id,
      getBreedName(record),
      record?.url,
    ];
  }
  return []
}