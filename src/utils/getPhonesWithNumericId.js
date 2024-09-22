export const getPhonesWithNumericId = (phones = [], products = []) => {
  if (!phones || !products) {
    return [];
  }

  const productIdMap = products.reduce((map, product) => {
    map[product.itemId] = product.id;

    return map;
  }, {});

  return phones.map((phone) => {
    const numericId = productIdMap[phone.id] || 'Unknown';

    return { ...phone, numericId };
  });
};
