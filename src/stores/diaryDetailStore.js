import { create } from 'zustand';
import {
  getDiaryDetailAll,
  diaryDelete,
} from '../api/pet/care/diary/diaryDetail';

const diaryDetailStore = create((set) => ({
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
  deleteData: async (fosterDiaryId) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const message = await diaryDelete(fosterDiaryId);
      set({ message: message || '삭제 성공', isLoading: false });

      set((state) => ({
        data: state.data.filter((item) => item.id !== fosterDiaryId),
      }));
    } catch (e) {
      set({
        error: e.response?.message || '삭제 실패',
        isLoading: false,
      });
    }
  },
}));

export const diaryDetail = () => {
  const { data, loadData, deleteData } = diaryDetailStore();
  return { data, loadData, deleteData };
};
