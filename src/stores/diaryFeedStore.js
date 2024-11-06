import { create } from 'zustand';
import { getDiaryInfo } from '../api/pet/care/diary/diaryFeed';

const diaryFeedStroe = create((set) => ({
  data: [],
  error: null,
  message: null,
  loadData: async (pet_id) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await getDiaryInfo(pet_id);
      set({ data: response.pet, isLoading: false });
    } catch (e) {
      set({ error: e.response.message, isLoading: false });
    }
  },
}));

export const diaryFeed = () => {
  const { data, loadData } = diaryFeedStroe();
  return { data, loadData };
};
