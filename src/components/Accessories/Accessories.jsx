import './Accessories.css';

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { AccessoryCard } from '../AccessoryCard';
import { Breadcrumb } from '../Breadcrumb';

export const Accessories = ({ accessories }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [accessoriesPerPage, setAccessoriesPerPage] = useState(16);
  const [sortOption, setSortOption] = useState('');

  if (!accessories) {
    return null;
  }

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  const handleItemsPerPageChange = (event) => {
    const value = event.target.value;

    setAccessoriesPerPage(
      value === 'ALL' ? accessories.length : parseInt(value, 10),
    );
    setCurrentPage(0);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(0);
  };

  const sortedAccessories = [...accessories].sort((a, b) => {
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

  const accessoryCount = sortedAccessories.length;
  const totalPages =
    accessoriesPerPage === accessories.length
      ? 1
      : Math.ceil(accessoryCount / accessoriesPerPage);

  const indexOfLastAccessory = (currentPage + 1) * accessoriesPerPage;
  const indexOfFirstAccessory = indexOfLastAccessory - accessoriesPerPage;
  const currentAccessories = sortedAccessories.slice(
    indexOfFirstAccessory,
    indexOfLastAccessory,
  );

  return (
    <div className="container">
      <Breadcrumb />
      <div className="title">Accessories</div>
      <p className="subtitle">{accessoryCount} models</p>

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
            value={
              accessoriesPerPage === accessories.length
                ? 'ALL'
                : accessoriesPerPage
            }
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
      </div>

      <div className="accessory-grid">
        {currentAccessories.map((accessory) => (
          <AccessoryCard
            key={accessory.id}
            accessory={accessory}
            isShowDiscount={true}
          />
        ))}
      </div>

      {accessoriesPerPage !== accessories.length && (
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
      )}
    </div>
  );
};
