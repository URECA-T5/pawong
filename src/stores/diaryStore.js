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

  setFormData: (name, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    })),
  setSelectedTag: (tag) => set({ selectedTag: tag }),
}));
export default diaryStore;
