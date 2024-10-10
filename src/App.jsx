import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Accessories } from './components/Accessories';
import { AccessoryDetails } from './components/AccessoryDetails';
import { CartPage } from './components/Cart/CartPage';
import { FavoritePhones } from './components/FavoritePhones';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { MobilePhones } from './components/MobilePhones';
import { PhoneDetails } from './components/PhoneDetails';
import { ScrollToTop } from './components/ScrollToTop';
import { TabletDetails } from './components/TabletDetails';
import { Tablets } from './components/Tablets';
import { useFetch } from './hooks/useFetch';
import { getItemsWithNumericId } from './utils/getItemsWithNumericId';

function App() {
  const { data: phonesData } = useFetch('/api/phones.json');
  const { data: tabletsData } = useFetch('/api/tablets.json');
  const { data: accessoriesData } = useFetch('/api/accessories.json');
  const { data: productsData } = useFetch('/api/products.json');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col gap-8 pt-[100px]">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                phonesData={phonesData}
                productsData={productsData}
                tabletsData={tabletsData}
                accessoriesData={accessoriesData}
              />
            }
          />
          <Route
            path="/phones"
            element={<MobilePhones phones={phonesData} />}
          />
          <Route path="/tablets" element={<Tablets tablets={tabletsData} />} />
          <Route
            path="/tablets/:id"
            element={
              <TabletDetails
                tablets={getItemsWithNumericId(tabletsData, productsData)}
              />
            }
          />
          <Route
            path="/accessories"
            element={<Accessories accessories={accessoriesData} />}
          />
          <Route
            path="/accessories/:id"
            element={
              <AccessoryDetails
                accessories={getItemsWithNumericId(
                  accessoriesData,
                  productsData,
                )}
              />
            }
          />
          <Route
            path="/phones/:id"
            element={
              <PhoneDetails
                phones={getItemsWithNumericId(phonesData, productsData)}
              />
            }
          />
          <Route path="/favorites" element={<FavoritePhones />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
