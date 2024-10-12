import './MobilePhones.css';

import React, { useState } from 'react';

import { CustomDropdown } from '../CustomDropdown';
import { DeviceCard } from '../Shared/DeviceCard';

export const MobilePhones = ({ phones }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [phonesPerPage, setPhonesPerPage] = useState(16);
  const [sortOption, setSortOption] = useState('');

  const sortOptions = [
    { value: '', label: '--' },
    { value: 'lowestPrice', label: 'Lowest price first' },
    { value: 'highestPrice', label: 'Highest price first' },
    { value: 'biggestDiscount', label: 'Biggest discount' },
  ];

  const itemsPerPageOptions = [
    { value: 12, label: '12' },
    { value: 16, label: '16' },
    { value: 24, label: '24' },
    { value: 48, label: '48' },
    { value: 'ALL', label: 'ALL' },
  ];

  if (!phones) {
    return null;
  }

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  const handleItemsPerPageChange = (event) => {
    const value = event.target.value;

    setPhonesPerPage(value === 'ALL' ? phones.length : parseInt(value, 10));
    setCurrentPage(0);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(0);
  };

  const sortedPhones = [...phones].sort((a, b) => {
    switch (sortOption) {
      case 'lowestPrice':
        return a.priceRegular - b.priceRegular;
      case 'highestPrice':
        return b.priceRegular - a.priceRegular;
      case 'biggestDiscount':
        return (
          b.priceRegular - b.priceDiscount - (a.priceRegular - a.priceDiscount)
        );
      default:
        return 0;
    }
  });

  const phoneCount = sortedPhones.length;
  const totalPages =
    phonesPerPage === phones.length ? 1 : Math.ceil(phoneCount / phonesPerPage);

  const indexOfLastPhone = (currentPage + 1) * phonesPerPage;
  const indexOfFirstPhone = indexOfLastPhone - phonesPerPage;
  const currentPhones = sortedPhones.slice(indexOfFirstPhone, indexOfLastPhone);

  return (
    <div className="container">
      <div className="title">Mobile Phones</div>
      <p className="subtitle">{phoneCount} models</p>

      {/* <div className="flex gap-6 mb-8">
        <div className="flex flex-col">
          <div className="font-semibold mb-1 text-colorGrey">Sort by</div>
          <select
            id="sort-option"
            value={sortOption}
            onChange={handleSortOptionChange}
            className="flex border-solid border-colorGrey p-2"
          >
            <option value="">--</option>
            <option value="lowestPrice">Lowest price first</option>
            <option value="highestPrice">Highest price first</option>
            <option value="biggestDiscount">Biggest discount</option>
          </select>
        </div>

        <div className="flex flex-col">
          <div className="font-semibold mb-1 text-colorGrey">Items on page</div>
          <select
            id="items-per-page"
            value={phonesPerPage === phones.length ? 'ALL' : phonesPerPage}
            onChange={handleItemsPerPageChange}
            className="flex border-solid border-colorGrey p-2"
          >
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="48">48</option>
            <option value="ALL">ALL</option>
          </select>
        </div>
      </div> */}

      <div className="flex gap-6 mb-8">
        <CustomDropdown
          options={sortOptions}
          selectedOption={sortOptions.find((opt) => opt.value === sortOption)}
          setSelectedOption={(option) => setSortOption(option.value)}
          label="Sort by"
          width="186px"
          height="40px"
        />

        <CustomDropdown
          options={itemsPerPageOptions}
          selectedOption={itemsPerPageOptions.find(
            (opt) => opt.value === phonesPerPage || opt.value === 'ALL',
          )}
          setSelectedOption={(option) =>
            setPhonesPerPage(
              option.value === 'ALL' ? phones.length : option.value,
            )
          }
          label="Items on page"
          width="128px"
          height="40px"
        />
      </div>

      <div className="phone-grid">
        {currentPhones.map((phone) => (
          <DeviceCard
            key={phone.id}
            item={phone}
            itemType="phones"
            isShowDiscount={true}
          />
        ))}
      </div>
    </div>
  );
};
