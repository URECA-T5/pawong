import { create } from 'zustand';
import { upload } from '../../../api/pet/care/upload/upload';

export const petUploadStore = create((set) => ({
  formData: {
    name: '',
    rescueLocation: '',
    age: '',
    breed: '',
    weight: '',
    info: '',
    profileImage: null,
  },
  protectionType: null,
  species: null,
  gender: null,
  isNeutered: null,
  vaccinations: [],

  setFormData: (newFormData) =>
    set(() => ({
      formData: {
        ...newFormData,
      },
    })),
  setProtectionType: (val) => set({ protectionType: val }),
  setSpecies: (val) => set({ species: val }),
  setGender: (val) => set({ gender: val }),
  setIsNeutered: (val) => set({ isNeutered: val }),
  setVaccinations: (val) => set({ vaccinations: val }),

  error: null,
  // message: null,
  upload: async (data) => {
    try {
      const response = await upload(data);
      // set({ message: response.message });
    } catch (e) {
      set({ error: e.response.message });
    }
  },
}));
export default petUploadStore;
