import './MobilePhones.css';

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Breadcrumb } from '../Breadcrumb';
import { PhoneCard } from '../PhoneCard';

export const MobilePhones = ({ phones }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [phonesPerPage, setPhonesPerPage] = useState(16);
  const [sortOption, setSortOption] = useState('');

  if (!phones) {
    return null;
  }

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  const handleItemsPerPageChange = (event) => {
    setPhonesPerPage(parseInt(event.target.value, 10));
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
  const totalPages = Math.ceil(phoneCount / phonesPerPage);

  const indexOfLastPhone = (currentPage + 1) * phonesPerPage;
  const indexOfFirstPhone = indexOfLastPhone - phonesPerPage;
  const currentPhones = sortedPhones.slice(indexOfFirstPhone, indexOfLastPhone);

  return (
    <div className="container">
      <Breadcrumb currentName="Phones" />
      <div className="title">Mobile Phones</div>
      <p className="subtitle">{phoneCount} models</p>

      <div className="flex gap-6 mb-4">
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
            value={phonesPerPage}
            onChange={handleItemsPerPageChange}
            className="flex border-solid border-colorGrey p-2"
          >
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="48">48</option>
          </select>
        </div>
      </div>

      <div className="phone-grid">
        {currentPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} isShowDiscount={true} />
        ))}
      </div>

      <div className="pagination-container">
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel=""
          pageCount={totalPages}
          marginPagesDisplayed={0}
          pageRangeDisplayed={totalPages}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active-page"
          pageClassName="page"
          pageLinkClassName="page-link"
          previousClassName="page-prev"
          nextClassName="page-next"
          disabledClassName="disabled"
          breakClassName="hidden"
        />
      </div>
    </div>
  );
};