import React, { useState } from 'react';

import { ArrowLeftIcon } from '../../assets'; // Assuming this is your only arrow icon "<"

export const CustomDropdown = ({
  options,
  selectedOption,
  setSelectedOption,
  label,
  width,
  height,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" style={{ width }}>
      <div className="font-semibold mb-1 text-colorGrey">{label}</div>
      <div
        className="border-solid border-colorGrey p-2 cursor-pointer flex justify-between items-center"
        style={{ width, height }} // todo: get rid of inline style
        onClick={toggleDropdown}
      >
        <span>{selectedOption ? selectedOption.label : '--'}</span>
        <span
          style={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(-90deg)',
            width: '16px',
            height: '16px',
            display: 'inline-block',
          }}
        >
          <ArrowLeftIcon />
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full border border-colorGrey bg-white shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 hover:bg-colorLightGrey cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};