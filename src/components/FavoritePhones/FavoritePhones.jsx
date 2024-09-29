// import './FavoritePhones.css';

import React from 'react';

import { usePhoneStore } from '../../store';
import { Breadcrumb } from '../Breadcrumb';
import { PhoneCard } from '../PhoneCard';

export const FavoritePhones = () => {
  const { favorites } = usePhoneStore();

  if (!favorites || favorites.length === 0) {
    return (
      <div className="container">
        <Breadcrumb currentName="Favourites" />
        <h1 className="title">Favourites</h1>
        <p className="subtitle">Your favourites list is empty.</p>
      </div>
    );
  }

  const phoneCount = favorites.length;

  return (
    <div className="container">
      <Breadcrumb currentName="Favourites" />
      <div className="title">Favourites</div>
      <p className="subtitle">{phoneCount} models</p>

      {/* 4-column grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} isShowDiscount={false} />
        ))}
      </div>
    </div>
  );
};
