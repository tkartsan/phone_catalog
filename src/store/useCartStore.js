import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      favorites: [],
      addToCart: (phone) =>
        set((state) => {
          const existsInCart = state.cart.some((item) => item.id === phone.id);

          if (!existsInCart) {
            return { cart: [...state.cart, { ...phone, quantity: 1 }] };
          }

          return state;
        }),
      removeFromCart: (phoneId) =>
        set((state) => ({
          cart: state.cart.filter((phone) => phone.id !== phoneId),
        })),
      isInCart: (phoneId) => get().cart.some((phone) => phone.id === phoneId),
      updateCartQuantity: (phoneId, newQuantity) =>
        set((state) => {
          const updatedCart = state.cart.map((item) =>
            item.id === phoneId ? { ...item, quantity: newQuantity } : item,
          );

          return { cart: updatedCart };
        }),
      totalItemsInCart: () =>
        get().cart.reduce((acc, purchase) => acc + (purchase.quantity || 1), 0),
      clearCart: () =>
        set(() => ({
          cart: [],
        })),
    }),
    {
      name: 'cart-store',
    },
  ),
);
