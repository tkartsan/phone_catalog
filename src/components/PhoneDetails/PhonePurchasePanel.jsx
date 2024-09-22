import React from 'react';

import { phoneColorNamesMap } from '../../global/constants';
export const PhonePurchasePanel = ({
  phone,
  selectedColor,
  handleColorChange,
  selectedCapacity,
  handleCapacityChange,
}) => {
  return (
    <div className="flex flex-col w-[400px] space-y-4">
      <p className="text-right text-sm text-gray-500">ID: {phone.numericId}</p>

      <div className="space-y-2">
        <p className="text-lg">Available colors</p>
        <div className="flex space-x-4">
          {phone.colorsAvailable.map((color, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-full border-2 border-solid ${
                selectedColor === color ? 'border-black' : 'border-gray-300'
              }`}
              style={{
                backgroundColor: phoneColorNamesMap[color] || '#000000',
              }}
              onClick={() => handleColorChange(color)}
            ></button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-lg">Select capacity</p>
        <div className="flex space-x-4">
          {phone.capacityAvailable.map((capacity, index) => (
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
          <p className="text-3xl font-bold">${phone.priceDiscount}</p>
          <p className="text-lg text-gray-500 line-through">
            ${phone.priceRegular}
          </p>
        </div>
      </div>
      <button className="px-4 py-3 bg-black text-white text-center">
        Add to cart
      </button>
      <div className="flex flex-col space-y-2 mt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Screen</span>
          <span className="text-black">{phone.screen}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Resolution</span>
          <span className="text-black">{phone.resolution}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Processor</span>
          <span className="text-black">{phone.processor}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">RAM</span>
          <span className="text-black">{phone.ram}</span>
        </div>
      </div>
    </div>
  );
};
