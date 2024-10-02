export const getAccessoryWithNumericId = (accessories = [], products = []) => {
  if (!accessories || !products) {
    return [];
  }

  const productIdMap = products.reduce((map, product) => {
    map[product.itemId] = product.id;

    return map;
  }, {});

  return accessories.map((accessory) => {
    const numericId = productIdMap[accessory.id] || 'Unknown';

    return { ...accessory, numericId };
  });
};
