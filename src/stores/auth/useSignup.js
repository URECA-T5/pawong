import { create } from 'zustand';
import { signup } from '../../api/auth/auth';

const useSignupStore = create((set) => ({
  error: null,
  message: null,
  user: {
    email: '',
    password: '',
    nickName: '',
    profileImage: null,
  },
  signup: async (data) => {
    try {
      const response = await signup(data);
      set({ message: response.data.message });
    } catch (error) {
      set({ error: error.response.data.message });
    }
  },
  setEmail: (email) => set((state) => ({ user: { ...state.user, email } })),
  setPassword: (password) =>
    set((state) => ({ user: { ...state.user, password } })),
  setNickName: (nickName) =>
    set((state) => ({ user: { ...state.user, nickName } })),
  setProfileImage: (userProfileImage) =>
    set((state) => ({
      user: { ...state.user, profileImage: userProfileImage },
    })),
}));

export default useSignupStore;
