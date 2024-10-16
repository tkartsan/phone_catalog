import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { useCompareStore } from '../../store';

export const CompareModal = ({ isOpen, closeModal }) => {
  const { comparedDevices, removeDeviceFromCompare } = useCompareStore();
  const navigate = useNavigate(); // Initialize useNavigate for routing

  if (!isOpen) return null;

  const handleDeleteDevice = (deviceId) => {
    removeDeviceFromCompare(deviceId);
  };

  const handleCompareNowClick = () => {
    // Redirect to the /comparison route
    if (comparedDevices.length === 2) {
      navigate('/comparison');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white pl-6 pr-6 pb-6 rounded-md w-[60%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">You're comparing devices</h2>
          <button onClick={closeModal} className="text-xl font-bold">
            ✕
          </button>
        </div>
        <div className="flex justify-between gap-4">
          {comparedDevices.length > 0 ? (
            comparedDevices.map((device) => (
              <div
                key={device.id}
                className="flex flex-col gap-2 w-1/2 p-4 border-solid border-black"
              >
                {device.images && device.images[0] ? (
                  <img
                    src={`/${device.images[0]}`}
                    alt={device.name}
                    className="w-full h-[200px] object-contain mb-4"
                  />
                ) : (
                  <div>No image available</div>
                )}
                <div className="text-xl font-semibold text-center">
                  {device.name}
                </div>
                <button
                  className="mt-4 bg-red-500 text-white p-2"
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
            className="bg-gray-300 p-2"
            disabled={comparedDevices.length < 2}
            onClick={handleCompareNowClick} // Redirect when button is clicked
          >
            Compare Now
          </button>
        </div>
      </div>
    </div>
  );
};
