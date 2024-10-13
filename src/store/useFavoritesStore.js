import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      cart: [],
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
      name: 'favorites-store',
    },
  ),
);
