import create from 'zustand';

export const useHousesStore = create(set => ({
  housesList: [],
  setHousesList: hoseList => set({ hoseList }),

  selectedHouse: null,
  setSelectedHouse: selectedHouse => set({ selectedHouse }),
}));
