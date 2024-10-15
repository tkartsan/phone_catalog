import React from 'react';

import { useCompareStore } from '../../store';

export const ComparisonPage = () => {
  const { comparedDevices } = useCompareStore(); // Get the compared devices from the store

  if (comparedDevices.length === 0) {
    return <p>No devices to compare.</p>;
  }

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Device Comparison</h1>
      <div className="grid grid-cols-2 gap-4">
        {comparedDevices.map((device, index) => (
          <div key={index} className="p-4 border">
            <h2 className="text-xl font-semibold">{device.name}</h2>
            <p>Screen: {device.screen}</p>
            <p>Processor: {device.processor}</p>
            <p>Price: ${device.priceDiscount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
