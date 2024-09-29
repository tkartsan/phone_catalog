import React from 'react';
import { Link } from 'react-router-dom';

import { HeartIcon, RedHeartIcon } from '../../assets'; // Assuming you have both icons available
import { usePhoneStore } from '../../store';

export const PhoneCard = ({ phone, isShowDiscount }) => {
  const { addFavorite, removeFavorite, isFavorite } = usePhoneStore();

  const handleToggleFavorite = () => {
    if (isFavorite(phone.id)) {
      removeFavorite(phone.id);
    } else {
      addFavorite(phone);
    }
  };

  return (
    <Link to={`/phones/${phone.id}`} className="no-underline">
      <div className="bg-white border-solid border-colorLightGrey p-4 flex flex-col max-w-[272px] hover:shadow-lg transition-shadow duration-200">
        <div>
          <div className="flex justify-center mb-4">
            <img
              src={`/${phone.images[0]}`}
              alt={phone.name}
              className="w-[150px] h-[200px] object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-black whitespace-normal overflow-hidden text-ellipsis min-h-[56px]">
            {phone.name}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <p className="font-bold text-xl text-black">
              ${isShowDiscount ? phone.priceDiscount : phone.priceRegular}
            </p>
            {isShowDiscount && (
              <p className="text-gray-500 line-through">
                ${phone.priceRegular}
              </p>
            )}
          </div>
          <div className="flex items-center my-2">
            <div className="flex-grow bg-gray-300 h-[1px]"></div>
          </div>

          <div className="mb-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Screen</span>
              <span className="text-black text-right">{phone.screen}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Capacity</span>
              <span className="text-black">{phone.capacity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">RAM</span>
              <span className="text-black">{phone.ram}</span>
            </div>
          </div>
        </div>
        <div className="mt-0 flex gap-2">
          <button
            className="w-full bg-black text-white px-4 py-2"
            onClick={(e) => {
              e.preventDefault(); // Prevents Link navigation when the button is clicked
              // Add to cart logic here
            }}
          >
            Add to cart
          </button>
          <button
            className="w-10 h-10 flex justify-center items-center"
            onClick={(e) => {
              e.preventDefault();
              handleToggleFavorite();
            }}
          >
            {isFavorite(phone.id) ? <RedHeartIcon /> : <HeartIcon />}
          </button>
        </div>
      </div>
    </Link>
  );
};
