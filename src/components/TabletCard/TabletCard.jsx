import React from 'react';
import { Link } from 'react-router-dom';

import { HeartIcon, RedHeartIcon } from '../../assets';
import { usePhoneStore } from '../../store';

export const TabletCard = ({ tablet, isShowDiscount }) => {
  const { addFavorite, removeFavorite, isFavorite, addToCart, isInCart } =
    usePhoneStore();

  const handleToggleFavorite = () => {
    if (isFavorite(tablet.id)) {
      removeFavorite(tablet.id);
    } else {
      addFavorite(tablet);
    }
  };

  const handleAddToCart = () => {
    if (!isInCart(tablet.id)) {
      addToCart(tablet);
    }
  };

  return (
    <Link to={`/tablets/${tablet.id}`} className="no-underline">
      <div className="bg-white border-solid border-colorLightGrey p-4 flex flex-col max-w-[272px] hover:shadow-lg transition-shadow duration-200">
        <div>
          <div className="flex justify-center mb-4">
            <img
              src={`/${tablet.images[0]}`}
              alt={tablet.name}
              className="w-[150px] h-[200px] object-contain"
            />
          </div>
          <h3 className="font-bold text-lg text-black whitespace-normal overflow-hidden text-ellipsis min-h-[56px]">
            {tablet.name}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <p className="font-bold text-xl text-black">
              ${isShowDiscount ? tablet.priceDiscount : tablet.priceRegular}
            </p>
            {isShowDiscount && (
              <p className="text-gray-500 line-through">
                ${tablet.priceRegular}
              </p>
            )}
          </div>
          <div className="flex items-center my-2">
            <div className="flex-grow bg-gray-300 h-[1px]"></div>
          </div>

          <div className="mb-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Screen</span>
              <span className="text-black text-right overflow-hidden truncate w-[120px]">
                {tablet.screen}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Capacity</span>
              <span className="text-black">{tablet.capacity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">RAM</span>
              <span className="text-black">{tablet.ram}</span>
            </div>
          </div>
        </div>
        <div className="mt-0 flex gap-2">
          <button
            className="w-full bg-black text-white px-4 py-2"
            onClick={(e) => {
              e.preventDefault(); // Prevents Link navigation when the button is clicked
              handleAddToCart(); // Add to cart logic
            }}
          >
            {isInCart(tablet.id) ? 'In Cart' : 'Add to cart'}
          </button>
          <button
            className="w-10 h-10 flex justify-center items-center border-solid border-colorLightGrey"
            onClick={(e) => {
              e.preventDefault();
              handleToggleFavorite();
            }}
          >
            {isFavorite(tablet.id) ? <RedHeartIcon /> : <HeartIcon />}
          </button>
        </div>
      </div>
    </Link>
  );
};