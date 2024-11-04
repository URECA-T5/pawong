import { create } from 'zustand';

export const petUploadStore = create((set) => ({
  formData: {
    name: '',
    rescueLocation: '',
    age: '',
    weight: '',
    info: '',
    profileImage: null,
  },
  protectionType: null,
  species: null,
  bread: null,
  gender: null,
  isNeutered: null,
  vaccination: [],

  setFormData: (newFormData) =>
    set(() => ({
      formData: {
        ...newFormData,
      },
    })),
  setProtectionType: (val) => set({ protectionType: val }),
  setSpecies: (val) => set({ species: val }),
  setBread: (val) => set({ bread: val }),
  setGender: (val) => set({ gender: val }),
  setIsNeutered: (val) => set({ isNeutered: val }),
  setVaccination: (val) => set({ vaccination: val }),
}));
export default petUploadStore;
