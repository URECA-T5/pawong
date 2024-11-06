import { create } from 'zustand';
import { localLogin } from '../../api/auth/auth';
import useUserProfile from './useUserProfile';

const useLoginStore = create((set) => ({
  error: null,
  message: null,
  login: async (data) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const { message, user } = await localLogin(data);
      set({ message, isLoading: false });
      const setUser = useUserProfile.getState().setUser;
      setUser(user);
    } catch (error) {
      set({ error: error.response.data.message, isLoading: false });
    }
  },
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));

export const useLogin = () => {
  const { login, setEmail, setPassword } = useLoginStore();
  return { login, setEmail, setPassword };
};
