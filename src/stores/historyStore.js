import { create } from 'zustand';

export const DonationHistoryTabStore = create((set) => ({
  selectedTab: { tabName: '1', tabIndex: 0, direction: 1 },
  initializeTab: (tabName, tabIndex) =>
    set({ selectedTab: { tabName, tabIndex, direction: 1 } }),
  selectTab: (tabName, tabIndex) =>
    set((state) => ({
      selectedTab: {
        tabName,
        tabIndex,
        direction: state.selectedTab.tabIndex < tabIndex ? 1 : -1,
      },
    })),
}));

export const DonationReceivedStore = create((set) => ({
  selectedDog: null,
  setSelectedDog: (dog) => set({ selectedDog: dog }),
}));
