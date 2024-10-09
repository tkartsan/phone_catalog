import React from 'react';

import { devicesColorNamesMap } from '../../global/constants';
import { usePhoneStore } from '../../store';

export const AccessoryPurchasePanel = ({
  accessory,
  selectedColor,
  handleColorChange,
  selectedCapacity,
  handleCapacityChange,
}) => {
  const { addToCart, removeFromCart, isInCart } = usePhoneStore();
  const isAccessoryInCart = isInCart(accessory.id);

  const handleCartAction = () => {
    if (isAccessoryInCart) {
      removeFromCart(accessory.id);
    } else {
      addToCart(accessory);
    }
  };

  return (
    <div className="flex flex-col w-[400px] space-y-4">
      <p className="text-right text-sm text-gray-500">
        ID: {accessory.numericId}
      </p>

      <div className="space-y-2">
        <p className="text-lg">Available colors</p>
        <div className="flex space-x-4">
          {accessory.colorsAvailable.map((color, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-full border-2 border-solid ${
                selectedColor === color ? 'border-black' : 'border-gray-300'
              }`}
              style={{
                backgroundColor: devicesColorNamesMap[color] || '#000000',
              }}
              onClick={() => handleColorChange(color)}
            ></button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-lg">Select capacity</p>
        <div className="flex space-x-4">
          {accessory.capacityAvailable.map((capacity, index) => (
            <button
              key={index}
              className={`px-4 py-2 border border-solid text-sm ${
                selectedCapacity === capacity
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 text-black'
              }`}
              onClick={() => handleCapacityChange(capacity)}
            >
              {capacity}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-4">
          <p className="text-3xl font-bold">${accessory.priceDiscount}</p>
          <p className="text-lg text-gray-500 line-through">
            ${accessory.priceRegular}
          </p>
        </div>
      </div>
      <button
        className={`h-[46px] px-4 py-3 transition duration-300 ${
          isAccessoryInCart
            ? 'bg-white text-green-500 border-colorLightGrey border-solid'
            : 'bg-black text-white'
        }`}
        onClick={handleCartAction}
      >
        {isAccessoryInCart ? 'Added to cart' : 'Add to cart'}
      </button>
      <div className="flex flex-col space-y-2 mt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Screen</span>
          <span className="text-black">{accessory.screen}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Resolution</span>
          <span className="text-black">{accessory.resolution}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Processor</span>
          <span className="text-black">{accessory.processor}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">RAM</span>
          <span className="text-black">{accessory.ram}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Cell</span>
          <span className="text-black">{accessory.cell.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};
