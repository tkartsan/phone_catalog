import React from 'react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-white text-gray-600 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold text-black">
          <span role="img" aria-label="nice gadgets">
            👍
          </span>{' '}
          NICE GADGETS
        </div>
        <nav className="flex space-x-8">
          <a href="/github" className="hover:text-black">
            GITHUB
          </a>
          <a href="/contacts" className="hover:text-black">
            CONTACTS
          </a>
          <a href="/rights" className="hover:text-black">
            RIGHTS
          </a>
        </nav>
        <button
          className="flex items-center justify-center border border-gray-400 p-2 hover:bg-gray-200"
          onClick={scrollToTop}
        >
          Back to top <span className="ml-1">⬆️</span>
        </button>
      </div>
    </footer>
  );
};
