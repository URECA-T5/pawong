import { create } from 'zustand';
import { getUserCareList } from '../../api/pet/care/userList/userList';

const userPet = create((set) => ({
  pets: [],
  fetchPets: async () => {
    const petData = await getUserCareList();
    if (petData) {
      set({ pets: petData });
    }
  },
}));

export default userPet;
