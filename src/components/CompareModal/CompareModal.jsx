import React from 'react';

import { useCompareStore } from '../../store';

export const CompareModal = ({ isOpen, closeModal }) => {
  const { comparedDevices, removeDeviceFromCompare } = useCompareStore();

  if (!isOpen) return null;

  const handleDeleteDevice = (deviceId) => {
    removeDeviceFromCompare(deviceId);
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-[60%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">You're comparing devices</h2>
          <button onClick={closeModal} className="text-xl font-bold">
            ✕
          </button>
        </div>
        <div className="flex justify-between">
          {comparedDevices.length > 0 ? (
            comparedDevices.map((device, index) => (
              <div
                key={device.id}
                className="w-1/2 p-4 border-solid border-black"
              >
                {/* Display the image of the device */}
                <img
                  src={device.image}
                  alt={device.name}
                  className="w-full h-[200px] object-contain mb-4"
                />
                {/* Display the name of the device */}
                <div className="text-xl font-semibold text-center">
                  {device.name}
                </div>
                <button
                  className="mt-4 bg-red-500 text-white p-2 rounded"
                  onClick={() => handleDeleteDevice(device.id)}
                >
                  Delete this device
                </button>
              </div>
            ))
          ) : (
            <div className="w-1/2 p-4 border">No device selected</div>
          )}
        </div>
        <div className="mt-4">
          <button
            className="bg-gray-300 p-2 rounded"
            disabled={comparedDevices.length < 2}
          >
            Compare Now
          </button>
        </div>
      </div>
    </div>
  );
};
