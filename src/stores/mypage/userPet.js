import { create } from 'zustand';
import { getCareInfo } from '../../api/pet/care/list/list';

const userPet = create((set) => ({
  pets: [],
  fetchPets: async () => {
    const petData = await getCareInfo();
    if (petData) {
      set({ pets: petData });
    }
  },
}));

export default userPet;
