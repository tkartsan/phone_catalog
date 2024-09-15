import React from 'react';

export const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white p-4 fixed top-0 z-10">
      <div className="flex justify-between items-center container mx-auto">
        <div className="text-lg font-bold">NICE GADGETS</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/phones" className="hover:text-gray-400">
                Phones
              </a>
            </li>
            <li>
              <a href="/tablets" className="hover:text-gray-400">
                Tablets
              </a>
            </li>
            <li>
              <a href="/accessories" className="hover:text-gray-400">
                Accessories
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <button aria-label="Wishlist" className="hover:text-gray-400">
            ❤️
          </button>
          <button aria-label="Cart" className="hover:text-gray-400">
            🛒
          </button>
        </div>
      </div>
    </header>
  );
};
