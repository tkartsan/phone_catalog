import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import accessoriescover from './../../assets/accessoriescover.png';
import phonecover from './../../assets/phonescover.png';
import tabletcover from './../../assets/tabletscover.png';

export const CategoriesPick = ({ phones, tablets, accessories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (phones && tablets && accessories) {
      const categoriesData = [
        {
          title: 'Mobile phones',
          image: phonecover,
          models: `${phones.length} models`,
          bgColor: '#6D6474',
          link: '/mobile-phones', // URL path for redirection
        },
        {
          title: 'Tablets',
          image: tabletcover,
          models: `${tablets.length} models`,
          bgColor: '#808080',
          link: '/tablets', // URL path for redirection
        },
        {
          title: 'Accessories',
          image: accessoriescover,
          models: `${accessories.length} models`,
          bgColor: 'rgb(50%, 30%, 20%)',
          link: '/accessories', // URL path for redirection
        },
      ];

      setCategories(categoriesData);
    }
  }, [phones, tablets, accessories]);

  return (
    <div className="max-w-[1136px] mx-auto">
      <div className="font-extrabold text-2xl leading-10">Shop by category</div>
      <div className="flex justify-between gap-4">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div key={index} className="w-[368px]">
              <Link to={category.link}>
                <div
                  className="w-[368px] h-[368px] relative"
                  style={{ backgroundColor: category.bgColor }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 w-[368px] h-[368px] object-cover"
                  />
                </div>
              </Link>
              <Link to={category.link} className="no-underline text-black">
                <h3 className="mt-3 mb-1.5 text-lg font-semibold text-left">
                  {category.title}
                </h3>
              </Link>
              <p className="text-gray-500 text-left m-0">{category.models}</p>
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
};
