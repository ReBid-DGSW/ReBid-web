"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { authAPI } from "@/lib/api/auth"
import { useToast } from "@/components/ui/use-toast"

export function useAuth() {
    const queryClient = useQueryClient()
    const router = useRouter()
    const { toast } = useToast()

    // 현재 사용자 정보 조회
    const { data: user, isLoading: isLoadingUser } = useQuery({
        queryKey: ["auth", "me"],
        queryFn: authAPI.me,
        enabled: !!localStorage.getItem("token"),
        retry: false,
    })

    // 로그인 뮤테이션
    const loginMutation = useMutation({
        mutationFn: authAPI.login,
        onSuccess: (data) => {
            localStorage.setItem("token", data.token)
            localStorage.setItem("refreshToken", data.refreshToken)
            queryClient.setQueryData(["auth", "me"], data.user)
            toast({
                title: "로그인 성공",
                description: `${data.user.name}님, 환영합니다!`,
            })
            router.push("/")
        },
        onError: (error) => {
            toast({
                title: "로그인 실패",
                description: error.message,
                variant: "destructive",
            })
        },
    })

    // 회원가입 뮤테이션
    const registerMutation = useMutation({
        mutationFn: authAPI.register,
        onSuccess: (data) => {
            localStorage.setItem("token", data.token)
            localStorage.setItem("refreshToken", data.refreshToken)
            queryClient.setQueryData(["auth", "me"], data.user)
            toast({
                title: "회원가입 성공",
                description: `${data.user.name}님, 환영합니다!`,
            })
            router.push("/")
        },
        onError: (error) => {
            toast({
                title: "회원가입 실패",
                description: error.message,
                variant: "destructive",
            })
        },
    })

    // 로그아웃 뮤테이션
    const logoutMutation = useMutation({
        mutationFn: authAPI.logout,
        onSuccess: () => {
            queryClient.clear()
            toast({
                title: "로그아웃",
                description: "성공적으로 로그아웃되었습니다.",
            })
            router.push("/")
        },
    })

    // 비밀번호 재설정 이메일 전송
    const forgotPasswordMutation = useMutation({
        mutationFn: authAPI.forgotPassword,
        onSuccess: () => {
            toast({
                title: "이메일 전송 완료",
                description: "비밀번호 재설정 링크가 전송되었습니다.",
            })
        },
        onError: (error) => {
            toast({
                title: "전송 실패",
                description: error.message,
                variant: "destructive",
            })
        },
    })

    return {
        user,
        isLoadingUser,
        isAuthenticated: !!user,
        login: loginMutation.mutate,
        register: registerMutation.mutate,
        logout: logoutMutation.mutate,
        forgotPassword: forgotPasswordMutation.mutate,
        isLoggingIn: loginMutation.isPending,
        isRegistering: registerMutation.isPending,
        isLoggingOut: logoutMutation.isPending,
        isSendingResetEmail: forgotPasswordMutation.isPending,
    }
}
