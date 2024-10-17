import React from 'react';

import { useCompareStore } from '../../store';

export const ComparisonPage = () => {
  const { comparedDevices } = useCompareStore();

  if (comparedDevices.length === 0) {
    return <p>No devices to compare.</p>;
  }

  const specs = [
    { label: 'Screen', key: 'screen' },
    { label: 'Processor', key: 'processor' },
    { label: 'Resolution', key: 'resolution' },
    { label: 'RAM', key: 'ram' },
    { label: 'Cell', key: 'cell' },
    { label: 'Price', key: 'priceDiscount' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 border-solid border-1 border-grey">
      <h1 className="text-2xl font-bold mb-6">Device Comparison</h1>

      <div className="grid grid-cols-3 gap-4 border-b border-gray-300">
        <div className="col-span-1"></div>
        {comparedDevices.map((device, index) => (
          <div
            key={index}
            className="flex flex-col justify-center p-4 border-l border-gray-300"
          >
            <img
              src={`/${device.images ? device.images[0] : ''}`}
              alt={device.name}
              className="h-[200px] object-contain mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center">{device.name}</h2>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4 border-t border-gray-300">
        {specs.map((spec, index) => (
          <React.Fragment key={spec.key}>
            <div
              className={`p-4 font-semibold border-t border-gray-300 border-r ${
                index % 2 === 0 ? 'bg-gray-100' : ''
              }`}
            >
              {spec.label}
            </div>

            {comparedDevices.map((device, i) => (
              <div
                key={i}
                className={`p-4 text-center border-l border-t border-gray-300 ${
                  index % 2 === 0 ? 'bg-gray-100' : ''
                }`}
              >
                {spec.key === 'priceDiscount' ? (
                  device[spec.key] ? (
                    `$${device[spec.key]}`
                  ) : (
                    <span className="text-gray-500">No specification</span>
                  )
                ) : device[spec.key] ? (
                  Array.isArray(device[spec.key]) ? (
                    device[spec.key].join(', ')
                  ) : (
                    device[spec.key]
                  )
                ) : (
                  <span className="text-gray-500">No specification</span>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
