import './App.css';

import { CategoriesPick } from './components/CategoriesPick';
import { CoverSlider } from './components/CoverSlider';
import { DiscountModelsSlider } from './components/DiscountModelsSlider';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NewModelsSlider } from './components/NewModelsSlider';
import { useFetch } from './hooks/useFetch';
import { getMostRecentPhones } from './utils/getMostRecentPhones';
import { getTopDiscountedPhones } from './utils/getTopDiscountedPhones';

function App() {
  const { data: phonesData } = useFetch('/api/phones.json');
  const { data: tabletsData } = useFetch('/api/tablets.json');
  const { data: accessoriesData } = useFetch('/api/accessories.json');
  const { data: productsData } = useFetch('/api/products.json');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col gap-8 pt-[100px]">
        <CoverSlider />
        {phonesData && productsData ? (
          <NewModelsSlider
            phones={getMostRecentPhones(phonesData, productsData)}
          />
        ) : (
          <p>Loading...</p>
        )}
        <CategoriesPick
          phones={phonesData}
          tablets={tabletsData}
          accessories={accessoriesData}
        />
        {phonesData && productsData ? (
          <DiscountModelsSlider phones={getTopDiscountedPhones(phonesData)} />
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
