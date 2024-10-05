import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeftIcon } from '../../assets';

import { Breadcrumb } from './../Breadcrumb';
import { AccessoryPurchasePanel } from './AccessoryPurchasePanel';
import { RenderAccessorySpecs } from './RenderAccessorySpecs';

export const AccessoryDetails = ({ accessories }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const accessory = accessories?.find((a) => a.id === id);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedCapacity, setSelectedCapacity] = useState();
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    if (accessory) {
      setSelectedColor(accessory.color);
      setSelectedCapacity(accessory.capacity);
      setSelectedImage(accessory.images[0]);
    }
  }, [accessory]);

  if (!accessories.length) {
    return null;
  }

  if (!accessory) {
    return <p>Accessory not found</p>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const newAccessoryId = accessories.find(
      (a) =>
        a.namespaceId === accessory.namespaceId &&
        a.color === color &&
        a.capacity === selectedCapacity,
    )?.id;

    if (newAccessoryId) {
      navigate(`/accessories/${newAccessoryId}`);
    }
  };

  const handleCapacityChange = (capacity) => {
    setSelectedCapacity(capacity);
    const newAccessoryId = accessories.find(
      (a) =>
        a.namespaceId === accessory.namespaceId &&
        a.color === selectedColor &&
        a.capacity === capacity,
    )?.id;

    if (newAccessoryId) {
      navigate(`/accessories/${newAccessoryId}`);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const renderDescription = () => {
    return (
      <div className="w-[559px]">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <div className="h-[1px] bg-gray-300 w-full mb-6"></div>
        {accessory.description.map((section, index) => (
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

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[1136px] gap-6 py-4">
        <div className="flex flex-col gap-2">
          <Breadcrumb />
          <div
            className="flex items-center gap-2 cursor-pointer text-gray-600"
            onClick={handleBackClick}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="text-lg">Back</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-6">{accessory.name}</h1>
        <div className="flex justify-between">
          <div className="flex flex-col justify-start items-start gap-4">
            {accessory.images.map((image, index) => (
              <div
                key={index}
                className={`w-[78px] h-[78px] cursor-pointer border-solid ${
                  selectedImage === image
                    ? 'border-colorGrey'
                    : 'border-colorLightGrey'
                }`}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={`/${image}`}
                  alt={accessory.name}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img
              src={`/${selectedImage}`}
              alt={accessory.name}
              className="h-[464px] object-contain"
            />
          </div>
          <AccessoryPurchasePanel
            accessory={accessory}
            selectedColor={selectedColor}
            selectedCapacity={selectedCapacity}
            handleColorChange={handleColorChange}
            handleCapacityChange={handleCapacityChange}
          />
        </div>
        <div className="flex gap-10 mt-6">
          {renderDescription()}
          <RenderAccessorySpecs accessory={accessory} />
        </div>
        {!!accessories.length ? (
          <div className="mt-8"></div>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};
