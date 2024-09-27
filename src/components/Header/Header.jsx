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
      ? 'text-xs font-extrabold uppercase text-colorBlack'
      : 'text-xs font-extrabold uppercase hover:text-colorGrey';

  return (
    <header className="w-full bg-colorDarkerWhite h-[86px] text-colorTextBase fixed top-0 z-10">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <WebsiteLogo />
        </div>

        {/* Navigation links in the center */}
        <nav>
          <ul className="flex space-x-12 text-colorBlack font-medium list-none">
            {navLinks.map((link) => (
              <li key={link.to}>
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
