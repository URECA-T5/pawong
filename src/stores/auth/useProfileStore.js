import { create } from 'zustand';

const useProfileStore = create((set) => ({
  profileImage: null,
  password: '',
  checkPassword: '',
  nickName: '',

  setProfileImage: (image) => set({ profileImage: image }),
  setPassword: (password) => set({ password }),
  setCheckPassword: (checkPassword) => set({ checkPassword }),
  setNickName: (nickName) => set({ nickName }),

  resetProfile: () =>
    set({ profileImage: null, password: '', checkPassword: '', nickName: '' }),
}));

export default useProfileStore;
