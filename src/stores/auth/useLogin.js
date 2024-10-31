import { create } from 'zustand';
import { login } from '../../api/auth/auth';

const useLoginStore = create((set) => ({
  error: null,
  message: null,
  login: async (data) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await login(data);
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      set({ error: error.response.data.message, isLoading: false });
    }
  },
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));

export const useLogin = () => {
  const { error, message, login, setEmail, setPassword } = useLoginStore();
  return { error, message, login, setEmail, setPassword };
};
