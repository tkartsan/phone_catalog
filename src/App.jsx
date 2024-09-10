import './App.css';

import { useFetch } from './hooks/useFetch';

function App() {
  // const { data: accessories } = useFetch('/api/accessories.json');
  const { data: phones } = useFetch('/api/phones.json');

  return (
    <div>
      {phones ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {phones.map((phone) => (
            <div
              key={phone.id}
              className="bg-white border border-gray-300 p-4 shadow-md flex flex-col w-[300px] "
            >
              <div>
                <div className="flex justify-center mb-4">
                  <img
                    src={`/${phone.images[0]}`}
                    alt={phone.name}
                    className="w-[150px] h-[200px] object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-black whitespace-normal overflow-hidden text-ellipsis min-h-[56px]">
                  {phone.name}
                </h3>
                <p className="mt-2 font-bold text-xl text-black">
                  $
                  {phone.priceDiscount
                    ? phone.priceDiscount
                    : phone.priceRegular}
                </p>

                <div className="flex items-center my-2">
                  <div className="flex-grow bg-gray-300 h-[1px]"></div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between ">
                    <span className="text-gray-500">Screen</span>
                    <span className="text-black">{phone.screen}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Capacity</span>
                    <span className="text-black">{phone.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">RAM</span>
                    <span className="text-black">{phone.ram}</span>
                  </div>
                </div>
              </div>
              <div className="mt-0">
                <button className="w-full bg-black text-white px-4 py-2">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
