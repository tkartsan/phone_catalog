export const getTabletsWithNumericId = (tablets = [], products = []) => {
  if (!tablets || !products) {
    return [];
  }

  const productIdMap = products.reduce((map, product) => {
    map[product.itemId] = product.id;

    return map;
  }, {});

  return tablets.map((tablet) => {
    const numericId = productIdMap[tablet.id] || 'Unknown';

    return { ...tablet, numericId };
  });
};
