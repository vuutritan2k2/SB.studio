import { create } from 'zustand';
import { getUserInfo } from '../services/userService';

const useZustand = create((set) => ({
    // Trạng thái người dùng
    userInfo: null,
    unauthorized: null,

    // Hàm để cập nhật thông tin người dùng
    getInfo: (data) => set({ userInfo: data }),

    // Hàm để lấy thông tin người dùng từ API
    fetchUserInfo: async () => {
        const state = useZustand.getState();
        if (state.userInfo === null) {
            try {
                const response = await getUserInfo();
                set({ userInfo: response });
            } catch (error) {
                set({ userInfo: null, unauthorized: true });
            }
        }
    },
}))

export default useZustand