import { create } from 'zustand'

interface AuthData {
    email: string
    password: string,
    confirmPassword?: string
}

interface AuthState {
    authData: AuthData,
    setAuth: (auth: AuthData) => void,
    clearStore: () => void
}

const useAuthStore = create<AuthState>((set) => ({
    authData: {
        email: '',
        password: '',
        confirmPassword: ''
    },
    setAuth: (auth: AuthData) => set({ authData: auth }),
    clearStore: () => set({ authData: { email: '', password: '', confirmPassword: '' } })
}));

export default useAuthStore


