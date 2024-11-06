import { create } from 'zustand';

const useUserProfile = create((set) => ({
  user: {
    nickName: '',
    profileImage: '',
  },
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: { nickName: '', profileImage: '' } }),
}));

export default useUserProfile;
