import { create } from 'zustand';
import { getDiaryInfo } from '../api/pet/care/diary/diaryFeed';

const diaryFeedStore = create((set) => ({
  data: {
    pet: null,
    isUserPet: null,
  },
  error: null,
  message: null,
  isLoading: false,

  loadData: async (pet_id) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await getDiaryInfo(pet_id);
      set({
        data: {
          pet: response.pet,
          isUserPet: response.isUserPet,
        },
        isLoading: false,
      });
    } catch (e) {
      set({ error: e.response.message, isLoading: false });
    }
  },
}));

export const diaryFeed = () => {
  const { data, loadData } = diaryFeedStore();
  return { data, loadData };
};
