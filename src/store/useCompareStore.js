import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCompareStore = create(
  persist(
    (set) => ({
      comparedDevices: [],
      deviceType: null, // Store the type of devices being compared

      addDeviceToCompare: (device, deviceType) =>
        set((state) => {
          // If the device is already in comparison, do nothing
          if (state.comparedDevices.some((d) => d.id === device.id)) {
            return state;
          }

          // If comparing two devices and adding a different type, reset the comparison
          if (state.deviceType !== null && state.deviceType !== deviceType) {
            return {
              comparedDevices: [device], // Replace with new device
              deviceType, // Set the new type
            };
          }

          // If the device type matches, proceed with adding to comparison
          if (state.deviceType === null || state.deviceType === deviceType) {
            return {
              comparedDevices: [...state.comparedDevices, device],
              deviceType,
            };
          }

          // Handle case where 2 devices are already in comparison
          if (state.comparedDevices.length >= 2) {
            return {
              comparedDevices: [device], // Replace with new device
              deviceType, // Reset with the new device type
            };
          }
        }),

      removeDeviceFromCompare: (deviceId) =>
        set((state) => {
          const newDevices = state.comparedDevices.filter(
            (device) => device.id !== deviceId,
          );

          return {
            comparedDevices: newDevices,
            deviceType: newDevices.length === 0 ? null : state.deviceType,
          };
        }),

      clearComparedDevices: () =>
        set({ comparedDevices: [], deviceType: null }),
    }),
    {
      name: 'compare-store',
    },
  ),
);
