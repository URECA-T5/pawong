import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserProfile = create(
  persist(
    (set) => ({
      user: {
        nickName: '',
        profileImage: '',
        isAdmin: false,
      },
      setUser: (userData) => set({ user: { ...userData } }),
      clearUser: () =>
        set({ user: { nickName: '', profileImage: '', isAdmin: false } }),
    }),
    { name: 'useUserProfile', partialize: (state) => ({ user: state.user }) },
  ),
);

export default useUserProfile;
