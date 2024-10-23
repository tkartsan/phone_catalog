import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCompareStore = create(
  persist(
    (set) => ({
      comparedDevices: [],
      deviceType: null,

      addDeviceToCompare: (device, deviceType) =>
        set((state) => {
          if (state.comparedDevices.length >= 2) {
            console.error('You cannot compare more than two devices');

            return state;
          }

          if (state.deviceType !== null && state.deviceType !== deviceType) {
            return {
              comparedDevices: [device],
              deviceType,
            };
          }

          if (state.deviceType === null || state.deviceType === deviceType) {
            if (!state.comparedDevices.some((d) => d.id === device.id)) {
              return {
                comparedDevices: [...state.comparedDevices, device],
                deviceType,
              };
            }
          }

          return state;
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
