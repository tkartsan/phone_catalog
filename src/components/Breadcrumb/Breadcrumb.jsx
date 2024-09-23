import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowRightIcon, HomeIcon } from '../../assets';

export const Breadcrumb = ({ currentName }) => {
  return (
    <nav className="flex gap-2 pb-7">
      <Link to="/" className="color-colorTextBase">
        <HomeIcon className="w-4 h-4" />
      </Link>
      <div className="text-colorGrey">
        <ArrowRightIcon />
      </div>
      <div className="text-colorGrey">{currentName}</div>
    </nav>
  );
};
