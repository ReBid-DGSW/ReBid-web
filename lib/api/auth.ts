const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

export interface User {
    id: string
    email: string
    name: string
    avatar?: string
    createdAt: string
    updatedAt: string
}

export interface LoginRequest {
    email: string
    password: string
    rememberMe?: boolean
}

export interface RegisterRequest {
    email: string
    name: string
    password: string
    agreeTerms: boolean
    agreePrivacy: boolean
    agreeMarketing?: boolean
}

export interface AuthResponse {
    user: User
    token: string
    refreshToken: string
}

export const authAPI = {
    login: async (data: LoginRequest): Promise<AuthResponse> => {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (!response.ok) {
            throw new Error("로그인에 실패했습니다.")
        }

        return response.json()
    },

    register: async (data: RegisterRequest): Promise<AuthResponse> => {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (!response.ok) {
            throw new Error("회원가입에 실패했습니다.")
        }

        return response.json()
    },

    logout: async (): Promise<void> => {
        const token = localStorage.getItem("token")

        await fetch(`${API_BASE_URL}/auth/logout`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
    },

    me: async (): Promise<User> => {
        const token = localStorage.getItem("token")

        const response = await fetch(`${API_BASE_URL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (!response.ok) {
            throw new Error("사용자 정보를 가져올 수 없습니다.")
        }

        return response.json()
    },

    forgotPassword: async (email: string): Promise<void> => {
        const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })

        if (!response.ok) {
            throw new Error("비밀번호 재설정 이메일 전송에 실패했습니다.")
        }
    },

    refreshToken: async (): Promise<AuthResponse> => {
        const refreshToken = localStorage.getItem("refreshToken")

        const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken }),
        })

        if (!response.ok) {
            throw new Error("토큰 갱신에 실패했습니다.")
        }

        return response.json()
    },
}
