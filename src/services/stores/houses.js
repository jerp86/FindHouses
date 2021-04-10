import create from 'zustand';

export const useHousesStore = create(set => ({
  offset: 0,
  setOffset: offset => set({ offset }),

  loadingHousesList: true,
  setLoadingHousesList: loadingHousesList => set({ loadingHousesList }),

  housesList: [],
  setHousesList: hoseList => set({ hoseList }),

  selectedHouse: null,
  setSelectedHouse: selectedHouse => set({ selectedHouse }),

  query: null,
  setQuery: query => set({ query }),
}));
