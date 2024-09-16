import './App.css';

import { CategoriesPick } from './components/CategoriesPick';
import { CoverSlider } from './components/CoverSlider';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NewModelsSlider } from './components/NewModelsSlider';
import { useFetch } from './hooks/useFetch';
import { getMostRecentPhones } from './utils/getMostRecentPhones';

function App() {
  const { data: phonesJson } = useFetch('/api/phones.json');
  const { data: tabletsJson } = useFetch('/api/tablets.json');
  const { data: accessoriesJson } = useFetch('/api/accessories.json');
  const { data: productsJson } = useFetch('/api/products.json');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col gap-8 pt-[100px]">
        <CoverSlider />
        {phonesJson && productsJson ? (
          <NewModelsSlider
            phones={getMostRecentPhones(phonesJson, productsJson)}
          />
        ) : (
          <p>Loading...</p>
        )}
        <CategoriesPick
          phones={phonesJson}
          tablets={tabletsJson}
          accessories={accessoriesJson}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
