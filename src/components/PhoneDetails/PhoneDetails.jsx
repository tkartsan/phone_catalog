import { useParams } from 'react-router-dom';

import { ArrowLeftIcon } from '../../assets';
import { useFetch } from '../../hooks/useFetch';
import { ModelsSlider } from '../ModelsSlider';

import { Breadcrumb } from './../Breadcrumb';

export const PhoneDetails = ({ phones }) => {
  const { phoneId } = useParams();
  const phone = phones?.find((p) => p.id === phoneId);
  const { data: phonesData } = useFetch('/api/phones.json');

  if (!phone) {
    return <p>Phone not found</p>;
  }

  // Function to render description
  const renderDescription = () => {
    return (
      <div className="w-[559px]">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        {/* Divider */}
        <div className="h-[1px] bg-gray-300 w-full mb-6"></div>
        {phone.description.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
            <div className="text-base text-gray-700 leading-6">
              {section.text.map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Function to render tech specs
  const renderTechSpecs = () => {
    return (
      <div className="w-[559px]">
        <h2 className="text-2xl font-bold mb-4">Tech specs</h2>
        {/* Divider */}
        <div className="h-[1px] bg-gray-300 w-full mb-6"></div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Screen</span>
            <span className="text-black">{phone.screen}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Resolution</span>
            <span className="text-black">{phone.resolution}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Processor</span>
            <span className="text-black">{phone.processor}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">RAM</span>
            <span className="text-black">{phone.ram}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Built in memory</span>
            <span className="text-black">{phone.capacity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Camera</span>
            <span className="text-black">{phone.camera}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Zoom</span>
            <span className="text-black">{phone.zoom}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Cell</span>
            <span className="text-black">{phone.cell.join(', ')}</span>
          </div>
        </div>
      </div>
    );
  };

  // Function to go back in browser history
  const handleBackClick = () => {
    window.history.back(); // Go back in browser history
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-[1136px] gap-6 py-4">
        {/* Breadcrumbs */}
        <div className="flex flex-col gap-2">
          <Breadcrumb currentName={phone.name} className="text-left" />
          <div
            className="flex items-center gap-2 cursor-pointer text-gray-600"
            onClick={handleBackClick}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="text-lg">Back</span>
          </div>
        </div>

        {/* Phone name */}
        <h1 className="text-3xl font-bold mb-6">{phone.name}</h1>

        {/* Phone image left-aligned */}
        <div className="flex justify-start">
          <img
            src={`/${phone.images[0]}`}
            alt={phone.name}
            className="h-[464px] object-contain"
          />
        </div>

        {/* Wrapper for description and tech specs in flex */}
        <div className="flex gap-10 mt-6">
          {renderDescription()}
          {renderTechSpecs()}
        </div>

        {/* Slider for recommended phones */}
        {phonesData && phonesData.length > 0 ? (
          <div className="mt-8">
            <ModelsSlider
              phones={phonesData}
              title="You may also like"
              isShowDiscount={true}
            />
          </div>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};
