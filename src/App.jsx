import './App.css';

import { useFetch } from './hooks/useFetch';
import { Footer } from './Footer';
import { Header } from './Header';
import { PhoneCard } from './PhoneCard';

function App() {
  const { data: phones } = useFetch('/api/phones.json');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-20">
        {phones ? (
          <div className="flex flex-wrap gap-6 justify-center">
            {phones.map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
