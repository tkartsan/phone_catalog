import React from 'react';

export const PhoneCard = ({ phone }) => {
  return (
    <div className="bg-white border-solid border-colorLightGrey p-4 flex flex-col max-w-[272px]">
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
        <p className="mt-2 font-bold text-xl text-black">
          ${phone.priceDiscount ? phone.priceDiscount : phone.priceRegular}
        </p>

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
      <div className="mt-0">
        <button className="w-full bg-black text-white px-4 py-2">
          Add to cart
        </button>
      </div>
    </div>
  );
};
