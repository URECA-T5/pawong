import { create } from 'zustand';

export const diaryStore = create((set) => ({
  selectedTag: '',
  setSelectedTag: (tag) => set({ selectedTag: tag }),
  formData: {
    title: '',
    story: '',
    location: '',
    petId: '',
    image: null,
  },
  setFormData: (newData) =>
    set((state) => ({ formData: { ...state.formData, ...newData } })),
}));
export default diaryStore;
