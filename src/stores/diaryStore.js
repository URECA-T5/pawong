import { create } from 'zustand';

export const diaryStore = create((set) => ({
  formData: {
    tag: '',
    title: '',
    location: '',
    story: '',
    image: null,
  },
  selectedTag: '',

  setFormData: (newFormData) =>
    set(() => ({
      formData: {
        ...newFormData,
      },
    })),
  setSelectedTag: (tag) => set({ selectedTag: tag }),
}));
export default diaryStore;
