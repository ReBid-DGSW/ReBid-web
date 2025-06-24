"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"

export default function OAuth2RedirectPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login } = useAuth()

  useEffect(() => {
    const token = searchParams.get("token")
    const error = searchParams.get("error")

    if (token) {
      // 토큰을 localStorage에 저장
      localStorage.setItem("token", token)

      // 사용자 정보 가져오기
      login.mutate(
        { token },
        {
          onSuccess: () => {
            router.push("/")
          },
          onError: () => {
            router.push("/login?error=oauth_failed")
          },
        },
      )
    } else if (error) {
      router.push(`/login?error=${error}`)
    } else {
      router.push("/login")
    }
  }, [searchParams, router, login])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">로그인 처리 중...</p>
      </div>
    </div>
  )
}
