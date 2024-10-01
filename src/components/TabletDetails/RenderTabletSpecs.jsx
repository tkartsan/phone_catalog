import React from 'react';

export const RenderTabletSpecs = ({ tablet }) => {
  return (
    <div className="w-[559px]">
      <h2 className="text-2xl font-bold mb-4">Tech specs</h2>
      <div className="h-[1px] bg-gray-300 w-full mb-6"></div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Screen</span>
          <span className="text-black">{tablet.screen}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Resolution</span>
          <span className="text-black">{tablet.resolution}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Processor</span>
          <span className="text-black">{tablet.processor}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">RAM</span>
          <span className="text-black">{tablet.ram}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Built-in memory</span>
          <span className="text-black">{tablet.capacity}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Camera</span>
          <span className="text-black">{tablet.camera}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Zoom</span>
          <span className="text-black">{tablet.zoom}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Cell</span>
          <span className="text-black">{tablet.cell.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};
