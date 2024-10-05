import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeftIcon } from '../../assets';
import { ModelsSlider } from '../ModelsSlider';

import { Breadcrumb } from './../Breadcrumb';
import { PhonePurchasePanel } from './PhonePurchasePanel';
import { RenderPhoneSpecs } from './RenderPhoneSpecs';

export const PhoneDetails = ({ phones }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const phone = phones?.find((p) => p.id === id);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedCapacity, setSelectedCapacity] = useState();
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    if (phone) {
      setSelectedColor(phone.color);
      setSelectedCapacity(phone.capacity);
      setSelectedImage(phone.images[0]);
    }
  }, [phone]);

  if (!phones.length) {
    return null;
  }

  if (!phone) {
    return <p>Phone not found</p>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const newPhoneId = phones.find(
      (p) =>
        p.namespaceId === phone.namespaceId &&
        p.color === color &&
        p.capacity === selectedCapacity,
    )?.id;

    if (newPhoneId) {
      navigate(`/phones/${newPhoneId}`);
    }
  };

  const handleCapacityChange = (capacity) => {
    setSelectedCapacity(capacity);
    const newPhoneId = phones.find(
      (p) =>
        p.namespaceId === phone.namespaceId &&
        p.color === selectedColor &&
        p.capacity === capacity,
    )?.id;

    if (newPhoneId) {
      navigate(`/phones/${newPhoneId}`);
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
            <span className="text-colorGrey hover:text-colorBlack">Back</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-6">{phone.name}</h1>
        <div className="flex justify-between">
          <div className="flex flex-col justify-start items-start gap-4">
            {phone.images.map((image, index) => (
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
                  alt={phone.name}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img
              src={`/${selectedImage}`}
              alt={phone.name}
              className="h-[464px] object-contain"
            />
          </div>
          <PhonePurchasePanel
            phone={phone}
            selectedColor={selectedColor}
            selectedCapacity={selectedCapacity}
            handleColorChange={handleColorChange}
            handleCapacityChange={handleCapacityChange}
          />
        </div>
        <div className="flex gap-10 mt-6">
          {renderDescription()}
          <RenderPhoneSpecs phone={phone} />
        </div>
        {!!phones.length ? (
          <div className="mt-8">
            <ModelsSlider
              phones={phones.slice(0, 10)}
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
