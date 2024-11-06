import { create } from 'zustand';
import { getDiaryALL } from '../api/diary/listAll';

export const diaryListALLStore = create((set, get) => ({
  data: [],
  error: null,
  message: null,
  selectedTag: '전체',
  loadData: async () => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await getDiaryALL();
      set({ data: response.data, isLoading: false });
    } catch (e) {
      set({ error: e.response.message, isLoading: false });
    }
  },
  setSelectedTag: (tag) => set({ selectedTag: tag }),
  filteredData: () => {
    const { selectedTag, data } = get();
    return selectedTag === '전체'
      ? data
      : data.filter((item) => item.tag === selectedTag);
  },
}));

export const useDiaryListALL = () => {
  const { data, loadData, filteredData } = diaryListALLStore();
  return { data: filteredData(), loadData };
};
