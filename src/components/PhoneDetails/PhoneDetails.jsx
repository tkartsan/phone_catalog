import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeftIcon } from '../../assets';
import { phoneColorNamesMap } from '../../global/constants';
import { ModelsSlider } from '../ModelsSlider';

import { Breadcrumb } from './../Breadcrumb';

export const PhoneDetails = ({ phones }) => {
  const navigate = useNavigate();
  const { phoneId } = useParams();

  if (!phones.length) {
    return null;
  }

  const phone = phones?.find((p) => p.id === phoneId);

  if (!phone) {
    return <p>Phone not found</p>;
  }

  const handleBackClick = () => {
    navigate(-1); // Navigate back one step in history
  };

  const handleColorChange = (color) => {
    const newPhoneId = phones.find(
      (p) => p.namespaceId === phone.namespaceId && p.color === color,
    )?.id;

    if (newPhoneId) {
      navigate(`/phones/${newPhoneId}`);
    }
  };

  // Function to handle capacity change
  const handleCapacityChange = (capacity) => {
    const newPhoneId = phones.find(
      (p) => p.namespaceId === phone.namespaceId && p.capacity === capacity,
    )?.id;

    if (newPhoneId) {
      navigate(`/phones/${newPhoneId}`);
    }
  };

  const renderRightPanel = () => {
    return (
      <div className="flex flex-col w-[400px] space-y-4">
        {/* ID on the top */}
        <p className="text-right text-sm text-gray-500">
          ID: {phone.numericId}
        </p>

        {/* Colors */}
        <div className="space-y-2">
          <p className="text-lg">Available colors</p>
          <div className="flex space-x-4">
            {phone.colorsAvailable.map((color, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full border-2 border-solid ${
                  phone.color === color ? 'border-black' : 'border-gray-300'
                }`}
                style={{
                  backgroundColor: phoneColorNamesMap[color] || '#000000',
                }} // Map color names to hex codes
                onClick={() => handleColorChange(color)}
              ></button>
            ))}
          </div>
        </div>

        {/* Capacity */}
        <div className="space-y-2">
          <p className="text-lg">Select capacity</p>
          <div className="flex space-x-4">
            {phone.capacityAvailable.map((capacity, index) => (
              <button
                key={index}
                className={`px-4 py-2 border border-solid text-sm ${
                  phone.capacity === capacity
                    ? 'border-colorBgBase bg-colorTextBase text-colorBgBase'
                    : 'border-gray-300'
                }`}
                onClick={() => handleCapacityChange(capacity)}
              >
                {capacity}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold">${phone.priceDiscount}</p>
            <p className="text-lg text-gray-500 line-through">
              ${phone.priceRegular}
            </p>
          </div>
        </div>

        {/* Add to cart */}
        <button className="px-4 py-3 bg-black text-white text-center">
          Add to cart
        </button>

        {/* Tech specs */}
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

  const renderDescription = () => {
    return (
      <div className="w-[559px]">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <div className="h-[1px] bg-gray-300 w-full mb-6"></div>
        {phone.description.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
            <div className="text-base text-gray-700 leading-6">
              {section.text.map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTechSpecs = () => {
    return (
      <div className="w-[559px]">
        <h2 className="text-2xl font-bold mb-4">Tech specs</h2>
        <div className="h-[1px] bg-gray-300 w-full mb-6"></div>
        <div className="flex flex-col gap-4">
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

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[1136px] gap-6 py-4">
        <div className="flex flex-col gap-2">
          <Breadcrumb currentName={phone.name} />
          <div
            className="flex items-center gap-2 cursor-pointer text-gray-600"
            onClick={handleBackClick}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="text-lg">Back</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-6">{phone.name}</h1>

        {/* Flex container for image and right panel */}
        <div className="flex justify-between">
          <div className="flex justify-start">
            <img
              src={`/${phone.images[0]}`}
              alt={phone.name}
              className="h-[464px] object-contain"
            />
          </div>

          {/* Right - Phone details */}
          {renderRightPanel()}
        </div>

        {/* About and Tech Specs */}
        <div className="flex gap-10 mt-6">
          {renderDescription()}
          {renderTechSpecs()}
        </div>

        {/* Models slider */}
        {!!phones.length ? (
          <div className="mt-8">
            <ModelsSlider
              phones={phones}
              title="You may also like"
              isShowDiscount={true}
            />
          </div>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};
