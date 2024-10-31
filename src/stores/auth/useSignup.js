import { create } from 'zustand';
import { signup } from '../../api/auth/auth';

const useSignupStore = create((set) => ({
  error: null,
  message: null,
  signup: async (data) => {
    set({ error: null, message: null });
    try {
      const response = await signup(data);
      set({ message: response.data.message });
    } catch (error) {
      set({ error: error.response.data.message });
    }
  },
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setName: (name) => set({ name }),
}));

export const useSignup = () => {
  const { error, message, signup, setEmail, setPassword, setName } =
    useSignupStore();
  return { error, message, signup, setEmail, setPassword, setName };
};
