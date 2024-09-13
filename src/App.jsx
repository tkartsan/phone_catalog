import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PhoneSlider } from './components/PhoneSlider';
import { useFetch } from './hooks/useFetch';

function App() {
  const { data: phonesJson } = useFetch('/api/phones.json');
  // const { data: productsJson } = useFetch('/api/products.json');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-[82px]">
        {phonesJson ? (
          <PhoneSlider phones={phonesJson.slice(0, 10)} />
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
