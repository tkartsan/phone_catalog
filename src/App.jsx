import './App.css';

import { CoverSlider } from './components/CoverSlider';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NewModelsSlider } from './components/NewModelsSlider';
import { useFetch } from './hooks/useFetch';
import { getMostRecentPhones } from './utils/getMostRecentPhones';

function App() {
  const { data: phonesJson } = useFetch('/api/phones.json');
  const { data: productsJson } = useFetch('/api/products.json');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col gap-4 pt-[100px]">
        <CoverSlider />
        {phonesJson && productsJson ? (
          <NewModelsSlider
            phones={getMostRecentPhones(phonesJson, productsJson)}
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
