import React from 'react';

export const RenderAccessorySpecs = ({ accessory }) => {
  return (
    <div className="w-[559px]">
      <h2 className="text-2xl font-bold mb-4">Tech specs</h2>
      <div className="h-[1px] bg-gray-300 w-full mb-6"></div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Screen</span>
          <span className="text-black">{accessory.screen}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Resolution</span>
          <span className="text-black">{accessory.resolution}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Processor</span>
          <span className="text-black">{accessory.processor}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">RAM</span>
          <span className="text-black">{accessory.ram}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Cell</span>
          <span className="text-black">{accessory.cell.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};
