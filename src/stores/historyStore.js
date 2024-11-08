import { create } from 'zustand';
import {
  getDonationHistory,
  getDonationSentHistory,
  patchAcceptDonation,
  patchRefuseDonation,
} from '../api/donation/history/listHistory';

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
  selectedPet: null,
  donationHistory: [],

  setSelectedPet: (pet) => set({ selectedPet: pet }),

  fetchDonationHistory: async (petId) => {
    console.log(`[fetchDonationHistory : petId] >> ${petId}`);
    try {
      const history = await getDonationHistory(petId);
      set({ donationHistory: history });
    } catch (error) {
      console.error('후원 내역을 가져오는 데 실패했습니다:', error);
    }
  },
}));

export const DonationSentHistory = create((set) => ({
  donations: [],
  fetchDonations: async () => {
    const data = await getDonationSentHistory();
    set({ donations: data });
  },
}));

export const DonationAcceptStore = create((set) => ({
  DonationAccept: [],
  fetchIsAccepted: async (flag, donationId) => {
    console.log(`[donationId] >> ${donationId}`);
    try {
      flag === '거절'
        ? await patchRefuseDonation(donationId)
        : await patchAcceptDonation(donationId);
    } catch (error) {
      console.error('[fetchIsAccpeted]:', error);
    }
  },
}));
