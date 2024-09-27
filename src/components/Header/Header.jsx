import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeartIcon, HomeIcon, WebsiteLogo } from '../../assets';

export const Header = () => {
  return (
    <header className="w-full bg-colorDarkerWhite h-[86px] text-colorTextBase fixed top-0 z-10">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <WebsiteLogo />
        </div>

        {/* Navigation links in the center */}
        <nav>
          <ul className="flex space-x-12 text-colorBlack font-medium list-none">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-[5px] border-colorBlack text-xs font-extrabold text-left tracking-[0.04em] uppercase leading-[11px] text-colorBlack'
                    : 'border-b-2 border-colorBlack no-underline text-xs font-extrabold text-left tracking-[0.04em] uppercase leading-[11px] text-colorBlack hover:text-colorGrey'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/phones"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-[5px] border-colorBlack text-xs font-extrabold text-left tracking-[0.04em] uppercase leading-[11px] text-colorBlack'
                    : 'border-b-2 border-colorBlack no-underline text-xs font-extrabold text-left tracking-[0.04em] uppercase leading-[11px] text-colorBlack hover:text-colorGrey'
                }
              >
                Phones
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tablets"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-[5px] border-colorBlack text-xs font-extrabold text-left tracking-[0.04em] uppercase leading-[11px] text-colorBlack'
                    : 'border-b-2 border-colorBlack no-underline text-xs font-extrabold text-left tracking-[0.04em] uppercase leading-[11px] text-colorBlack hover:text-colorGrey'
                }
              >
                Tablets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accessories"
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-[5px] border-colorBlack text-xs font-extrabold text-left tracking-[0.04em] uppercase leading-[11px] text-colorBlack'
                    : 'border-b-2 border-colorBlack no-underline text-xs font-extrabold text-left tracking-[0.04em] uppercase leading-[11px] text-colorBlack hover:text-colorGrey'
                }
              >
                Accessories
              </NavLink>
            </li>
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
