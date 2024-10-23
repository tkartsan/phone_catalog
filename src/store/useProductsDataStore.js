import { create } from 'zustand';

export const useProductsDataStore = create((set) => ({
  phonesData: null,
  tabletsData: null,
  accessoriesData: null,
  productsData: null,

  setPhonesData: (phonesData) => set({ phonesData }),
  setTabletsData: (tabletsData) => set({ tabletsData }),
  setAccessoriesData: (accessoriesData) => set({ accessoriesData }),
  setProductsData: (productsData) => set({ productsData }),
}));
