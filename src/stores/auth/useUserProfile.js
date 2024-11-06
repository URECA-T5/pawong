import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserProfile = create(
  persist(
    (set) => ({
      user: {
        nickName: '',
        profileImage: '',
      },
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: { nickName: '', profileImage: '' } }),
    }),
    { name: 'useUserProfile', partialize: (state) => ({ user: state.user }) },
  ),
);

export default useUserProfile;
