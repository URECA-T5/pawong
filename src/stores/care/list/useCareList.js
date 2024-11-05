import { create } from 'zustand';
import { getCareInfo } from '../../../api/pet/care/list/list';

const careListStroe = create((set) => ({
  data: [],
  error: null,
  message: null,
  loadData: async () => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await getCareInfo();
      set({ data: response, isLoading: false });
    } catch (e) {
      set({ error: e.response.message, isLoading: false });
    }
  },
}));

export const useCareList = () => {
  const { data, loadData } = careListStroe();
  return { data, loadData };
};
