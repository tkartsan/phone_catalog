import React from 'react';

import { CategoriesPick } from '../CategoriesPick';
import { CoverSlider } from '../CoverSlider';
import { ModelsSlider } from '../ModelsSlider';

import { getMostRecentPhones } from './../../utils/getMostRecentPhones';
import { getTopDiscountedPhones } from './../../utils/getTopDiscountedPhones';

export const HomePage = ({
  phonesData,
  productsData,
  tabletsData,
  accessoriesData,
}) => {
  return (
    <>
      <CoverSlider />
      {phonesData && productsData ? (
        <ModelsSlider
          phones={getMostRecentPhones(phonesData, productsData)}
          title="Brand new models"
          isShowDiscount={false}
          sliderId="brand-new-models"
        />
      ) : (
        <p>Loading...</p>
      )}
      <CategoriesPick
        phones={phonesData}
        tablets={tabletsData}
        accessories={accessoriesData}
      />
      {phonesData && productsData ? (
        <ModelsSlider
          phones={getTopDiscountedPhones(phonesData)}
          title="Hot prices"
          isShowDiscount={true}
          sliderId="hot-prices"
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
