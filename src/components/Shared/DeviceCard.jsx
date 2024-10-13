import React from 'react';
import { Link } from 'react-router-dom';

import { HeartIcon, RedHeartIcon } from '../../assets';
import { useCartStore } from '../../store/useCartStore';
import { useFavoritesStore } from '../../store/useFavoritesStore';

export const DeviceCard = ({ item, itemType, isShowDiscount }) => {
  // Extract cart-related actions and state
  const { addToCart, removeFromCart, isInCart } = useCartStore();

  // Extract favorites-related actions and state
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const handleToggleFavorite = () => {
    if (isFavorite(item.id)) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  const handleCartClick = () => {
    if (isInCart(item.id)) {
      removeFromCart(item.id);
    } else {
      addToCart(item);
    }
  };

  const isAddedToCart = isInCart(item.id);

  return (
    <Link to={`/${itemType}/${item.id}`} className="no-underline">
      <div className="bg-white border-solid border-colorLightGrey p-4 flex flex-col max-w-[272px] hover:shadow-lg transition-shadow duration-200">
        <div>
          <div className="flex justify-center mb-4">
            <img
              src={`/${item.images[0]}`}
              alt={item.name}
              className="w-[150px] h-[200px] object-contain transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 className="font-bold text-lg text-black whitespace-normal overflow-hidden text-ellipsis min-h-[56px]">
            {item.name}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <p className="font-bold text-xl text-black">
              ${isShowDiscount ? item.priceDiscount : item.priceRegular}
            </p>
            {isShowDiscount && (
              <p className="text-gray-500 line-through">${item.priceRegular}</p>
            )}
          </div>
          <div className="flex items-center my-2">
            <div className="flex-grow bg-gray-300 h-[1px]"></div>
          </div>

          <div className="flex flex-col gap-2 text-12 font-semibold mb-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Screen</span>
              <span className="text-black text-right overflow-hidden truncate w-[120px]">
                {item.screen}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Capacity</span>
              <span className="text-black">{item.capacity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">RAM</span>
              <span className="text-black">{item.ram}</span>
            </div>
          </div>
        </div>
        <div className="mt-0 flex gap-2">
          <button
            className={`w-full px-4 py-2 border ${
              isAddedToCart
                ? 'bg-white text-green-500 border-colorLightGrey border-solid'
                : 'bg-black text-white'
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleCartClick();
            }}
          >
            {isAddedToCart ? 'Added to cart' : 'Add to cart'}
          </button>
          <button
            className="w-10 h-10 flex justify-center items-center border-solid border-colorLightGrey"
            onClick={(e) => {
              e.preventDefault();
              handleToggleFavorite();
            }}
          >
            {isFavorite(item.id) ? <RedHeartIcon /> : <HeartIcon />}
          </button>
        </div>
      </div>
    </Link>
  );
};
