import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCompareStore = create(
  persist(
    (set, get) => ({
      comparedDevices: [],

      addDeviceToCompare: (device) => {
        const { comparedDevices } = get();

        if (
          comparedDevices.length < 2 &&
          !comparedDevices.some((d) => d.id === device.id)
        ) {
          set({ comparedDevices: [...comparedDevices, device] });
        }
      },

      removeDeviceFromCompare: (deviceId) =>
        set((state) => ({
          comparedDevices: state.comparedDevices.filter(
            (device) => device.id !== deviceId,
          ),
        })),

      clearComparedDevices: () => set({ comparedDevices: [] }),

      isCompared: (deviceId) =>
        get().comparedDevices.some((device) => device.id === deviceId),
    }),
    {
      name: 'compare-store',
    },
  ),
);
