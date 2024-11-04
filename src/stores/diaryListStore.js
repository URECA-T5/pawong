import { create } from 'zustand';

export const diaryListTabStore = create((set) => ({
  selectedCategory: '전체',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
