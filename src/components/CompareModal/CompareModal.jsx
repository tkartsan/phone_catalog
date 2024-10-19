import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { useCompareStore } from '../../store';

export const CompareModal = ({ closeModal }) => {
  const { comparedDevices, removeDeviceFromCompare } = useCompareStore();
  const navigate = useNavigate();

  if (!comparedDevices.length) return null;

  const handleCompareNowClick = () => {
    if (comparedDevices.length === 2) {
      navigate('/comparison');
    }
  };

  return ReactDOM.createPortal(
    <CSSTransition in={true} timeout={1000} classNames="slide" unmountOnExit>
      <div
        className="fixed right-0 top-0 w-[250px] h-[600px] z-50"
        style={{ transform: 'translateY(0)' }}
      >
        <div className="bg-white p-4 h-full shadow-lg rounded-md border border-solid border-colorBorderGrey">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Compare Devices</h2>
            <button onClick={closeModal} className="text-xl font-bold">
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {comparedDevices.map((device) => (
              <div key={device.id} className="border p-2 rounded-md">
                {device.images && device.images[0] ? (
                  <img
                    src={`/${device.images[0]}`}
                    alt={device.name}
                    className="w-full h-[100px] object-contain mb-2"
                  />
                ) : (
                  <div>No image available</div>
                )}
                <div className="text-center font-semibold">{device.name}</div>
                <button
                  className="bg-red-500 text-white mt-2 p-1 rounded"
                  onClick={() => removeDeviceFromCompare(device.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            className={`mt-4 p-2 w-full rounded ${
              comparedDevices.length < 2 ? 'bg-gray-500' : 'bg-blue-500'
            } text-white`}
            onClick={handleCompareNowClick}
            disabled={comparedDevices.length < 2}
          >
            Compare Now
          </button>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('modal-root'),
  );
};
