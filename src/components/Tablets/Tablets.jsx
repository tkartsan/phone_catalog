import './Tablets.css';

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Breadcrumb } from '../Breadcrumb';
import { TabletCard } from '../TabletCard';

export const Tablets = ({ tablets }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [tabletsPerPage, setTabletsPerPage] = useState(16);
  const [sortOption, setSortOption] = useState('');

  if (!tablets) {
    return null;
  }

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  const handleItemsPerPageChange = (event) => {
    const value = event.target.value;

    setTabletsPerPage(value === 'ALL' ? tablets.length : parseInt(value, 10));
    setCurrentPage(0);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(0);
  };

  const sortedTablets = [...tablets].sort((a, b) => {
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

  const tabletCount = sortedTablets.length;
  const totalPages =
    tabletsPerPage === tablets.length
      ? 1
      : Math.ceil(tabletCount / tabletsPerPage);

  const indexOfLastTablet = (currentPage + 1) * tabletsPerPage;
  const indexOfFirstTablet = indexOfLastTablet - tabletsPerPage;
  const currentTablets = sortedTablets.slice(
    indexOfFirstTablet,
    indexOfLastTablet,
  );

  return (
    <div className="container">
      <Breadcrumb />
      <div className="title">Tablets</div>
      <p className="subtitle">{tabletCount} models</p>

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
            value={tabletsPerPage === tablets.length ? 'ALL' : tabletsPerPage}
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

      <div className="phone-grid">
        {currentTablets.map((tablet) => (
          <TabletCard key={tablet.id} tablet={tablet} isShowDiscount={true} />
        ))}
      </div>

      {tabletsPerPage !== tablets.length && (
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
