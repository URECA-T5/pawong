import { create } from 'zustand';
import { signup } from '../../api/auth/auth';

const useSignupStore = create((set) => ({
  error: null,
  message: null,
  profileImage: null,
  signup: async (data) => {
    try {
      const response = await signup(data);
      set({ message: response.data.message });
    } catch (error) {
      set({ error: error.response.data.message });
    }
  },
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setNickName: (nickName) => set({ nickName }),
  setProfileImage: (image) => set({ profileImage: image }),
  removeProfileImage: () => set({ profileImage: null }),
}));

export const useSignup = () => {
  const {
    signup,
    setEmail,
    setPassword,
    setNickName,
    setProfileImage,
    profileImage,
    removeProfileImage,
  } = useSignupStore();
  return {
    signup,
    setEmail,
    setPassword,
    setNickName,
    setProfileImage,
    profileImage,
    removeProfileImage,
  };
};
