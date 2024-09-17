import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { useFetch } from './hooks/useFetch';

function App() {
  const { data: phonesData } = useFetch('/api/phones.json');
  const { data: tabletsData } = useFetch('/api/tablets.json');
  const { data: accessoriesData } = useFetch('/api/accessories.json');
  const { data: productsData } = useFetch('/api/products.json');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col gap-8 pt-[100px]">
        <HomePage
          phonesData={phonesData}
          productsData={productsData}
          tabletsData={tabletsData}
          accessoriesData={accessoriesData}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
