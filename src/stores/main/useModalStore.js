import { create } from 'zustand';

const useModalStore = create((set) => ({
  isLogoutModalVisible: false,
  showLogoutModal: () => set({ isLogoutModalVisible: true }),
  hideLogoutModal: () => set({ isLogoutModalVisible: false }),
  handleMouseLeave: () => set({ isLogoutModalVisible: false }),
}));

export default useModalStore;
