import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePhoneStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (phone) =>
        set((state) => ({
          favorites: [...state.favorites, phone],
        })),
      removeFavorite: (phoneId) =>
        set((state) => ({
          favorites: state.favorites.filter((phone) => phone.id !== phoneId),
        })),
      isFavorite: (phoneId) =>
        get().favorites.some((phone) => phone.id === phoneId),
    }),
    {
      name: 'favorite-phones', // Key for localStorage
    },
  ),
);
