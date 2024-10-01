import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePhoneStore = create(
  persist(
    (set, get) => ({
      // Cart management
      cart: [],

      addToCart: (phone) =>
        set((state) => {
          const existsInCart = state.cart.some((item) => item.id === phone.id);

          if (!existsInCart) {
            return { cart: [...state.cart, { ...phone, quantity: 1 }] }; // Start with quantity 1
          }

          return state; // No changes if phone is already in the cart
        }),

      removeFromCart: (phoneId) =>
        set((state) => ({
          cart: state.cart.filter((phone) => phone.id !== phoneId),
        })),

      isInCart: (phoneId) => get().cart.some((phone) => phone.id === phoneId),

      // Favorites management
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
      name: 'phone-store', // Local storage key for Zustand store
    },
  ),
);
