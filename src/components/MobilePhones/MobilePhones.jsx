import './MobilePhones.css';

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Breadcrumb } from '../Breadcrumb';
import { PhoneCard } from '../PhoneCard';

export const MobilePhones = ({ phones }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const phonesPerPage = 16;

  if (!phones) {
    return null;
  }

  const phoneCount = phones.length;
  const totalPages = Math.ceil(phoneCount / phonesPerPage);

  const indexOfLastPhone = (currentPage + 1) * phonesPerPage;
  const indexOfFirstPhone = indexOfLastPhone - phonesPerPage;
  const currentPhones = phones.slice(indexOfFirstPhone, indexOfLastPhone);

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="container">
      <Breadcrumb currentName="Phones" />
      <div className="title">Mobile Phones</div>
      <p className="subtitle">{phoneCount} models</p>
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
