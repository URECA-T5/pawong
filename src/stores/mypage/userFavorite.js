import { create } from 'zustand';
import { getUserFavList } from '../../api/pet/care/favorites/getFavorite';

const userFavorite = create((set) => ({
  favPets: [],
  fetchFavPets: async () => {
    const favData = await getUserFavList();
    if (favData) {
      set({ favPets: favData });
    }
  },
}));

export default userFavorite;
