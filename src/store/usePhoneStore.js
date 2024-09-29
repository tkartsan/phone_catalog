import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePhoneStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (phone) =>
        set((state) => {
          const cart = state.cart;
          const existsInCart = cart.some((item) => item.id === phone.id);

          if (!existsInCart) {
            return { cart: [...state.cart, { ...phone, quantity: 1 }] }; // Start with quantity 1
          }

          return state; // Return the current state if the phone is already in the cart
        }),
      updateCartQuantity: (phoneId, quantity) =>
        set((state) => ({
          cart: state.cart.map((phone) =>
            phone.id === phoneId ? { ...phone, quantity } : phone,
          ),
        })),
      removeFromCart: (phoneId) =>
        set((state) => ({
          cart: state.cart.filter((phone) => phone.id !== phoneId),
        })),
    }),
    {
      name: 'phone-store', // Local storage key for the store
    },
  ),
);
