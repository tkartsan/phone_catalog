import { useEffect } from 'react';

import { useProductsDataStore } from '../store';

import { useFetch } from './useFetch';

export const useDataFetch = () => {
  const { setPhonesData, setTabletsData, setAccessoriesData, setProductsData } =
    useProductsDataStore();

  const { data: phonesData } = useFetch('/api/phones.json');
  const { data: tabletsData } = useFetch('/api/tablets.json');
  const { data: accessoriesData } = useFetch('/api/accessories.json');
  const { data: productsData } = useFetch('/api/products.json');

  useEffect(() => {
    if (phonesData) {
      setPhonesData(phonesData);
    }
  }, [phonesData, setPhonesData]);

  useEffect(() => {
    if (tabletsData) {
      setTabletsData(tabletsData);
    }
  }, [tabletsData, setTabletsData]);

  useEffect(() => {
    if (accessoriesData) {
      setAccessoriesData(accessoriesData);
    }
  }, [accessoriesData, setAccessoriesData]);

  useEffect(() => {
    if (productsData) {
      setProductsData(productsData);
    }
  }, [productsData, setProductsData]);
};
