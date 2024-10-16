import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCompareStore = create(
  persist(
    (set) => ({
      comparedDevices: [],
      deviceType: null, // Store the type of devices being compared

      addDeviceToCompare: (device, deviceType) =>
        set((state) => {
          if (state.deviceType === null || state.deviceType === deviceType) {
            if (
              state.comparedDevices.length < 2 &&
              !state.comparedDevices.some((d) => d.id === device.id)
            ) {
              return {
                comparedDevices: [...state.comparedDevices, device],
                deviceType,
              };
            }
          } else {
            return {
              comparedDevices: [device],
              deviceType,
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
