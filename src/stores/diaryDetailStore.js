import { create } from 'zustand';
import { getDiaryDetailAll } from '../api/pet/care/diary/diaryDetail';

const diaryDetailStroe = create((set) => ({
  data: [],
  error: null,
  message: null,
  loadData: async (fosterDiaryId) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await getDiaryDetailAll(fosterDiaryId);
      set({ data: response.data, isLoading: false });
    } catch (e) {
      set({ error: e.response.message, isLoading: false });
    }
  },
}));

export const diaryDetail = () => {
  const { data, loadData } = diaryDetailStroe();
  return { data, loadData };
};
