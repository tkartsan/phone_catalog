import './App.css';

import { CategoriesPick } from './components/CategoriesPick';
import { CoverSlider } from './components/CoverSlider';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ModelsSlider } from './components/ModelsSlider';
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
          <ModelsSlider
            phones={getMostRecentPhones(phonesData, productsData)}
            title="Brand new models"
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
          <ModelsSlider
            phones={getTopDiscountedPhones(phonesData)}
            title="Hot prices"
            isShowDiscount={true}
          />
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
