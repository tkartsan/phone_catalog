import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeartIcon, HomeIcon, WebsiteLogo } from '../../assets';

export const Header = () => {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/phones', label: 'Phones' },
    { to: '/tablets', label: 'Tablets' },
    { to: '/accessories', label: 'Accessories' },
  ];

  const linkClass = (isActive) =>
    isActive
      ? 'text-xs font-extrabold uppercase text-colorBlack border-0 border-b-[10px] border-colorBlack h-full flex items-center justify-center navActive'
      : 'text-xs font-extrabold uppercase text-colorGrey hover:text-colorGrey h-full flex items-center justify-center';

  return (
    <header className="w-full bg-colorBgBase h-[86px] text-colorTextBase fixed top-0 z-10">
      <div className="flex justify-between items-center container mx-auto h-full">
        <div className="flex items-center">
          <WebsiteLogo />
        </div>

        {/* Navigation links in the center */}
        <nav className="h-full">
          <ul className="flex space-x-12 font-medium list-none h-full m-0">
            {navLinks.map((link) => (
              <li key={link.to} className="h-full">
                <NavLink
                  to={link.to}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Wishlist and Cart icons on the right */}
        <div className="flex items-center space-x-6">
          <div className="w-[1px] h-[86px] bg-colorBgGrey"></div>
          <button
            aria-label="Wishlist"
            className="hover:text-colorGrey w-[40px]"
          >
            <HeartIcon className="h-6 w-6" />
          </button>
          <div className="w-[1px] h-[86px] bg-colorBgGrey"></div>
          <button aria-label="Cart" className="hover:text-colorGrey w-[40px]">
            <HomeIcon className="h-6 w-6" />
          </button>
          <div className="w-[1px] h-[86px] bg-colorBgGrey"></div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-colorBgGrey"></div>
    </header>
  );
};
