import { create } from 'zustand';
import { getAllInfo, getDetailInfo } from '../../api/donation/item';

const Donation = create((set) => ({
  data: [],
  detailData: '',
  itemCnt: '',
  error: null,
  message: null,
  loadAllData: async () => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await getAllInfo();
      set({ data: response, isLoading: false });
      console.log(`** loadDataAll >> ${response.length}`);
    } catch (e) {
      set({ error: e.response.message, isLoading: false });
    }
  },

  loadDetailData: async (item_id) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await getDetailInfo(item_id);
      set({ detailData: response, isLoading: false });
      console.log(`** loadDetailData >> ${response}`);
    } catch (e) {
      set({ error: e.response.message, isLoading: false });
    }
  },

  setItemCnt: (val) => set({ itemCnt: val }),
}));

export const useDonation = () => {
  const { data, detailData, itemcnt, setItemCnt, loadAllData, loadDetailData } =
    Donation();
  return { data, detailData, itemcnt, setItemCnt, loadAllData, loadDetailData };
};
