import { create } from 'zustand';

export const diaryListTabStore = create((set) => ({
  selectedTag: '전체',
  setSelectedTag: (tag) => set({ selectedTag: tag }),
}));
