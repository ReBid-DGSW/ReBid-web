import Link from "next/link"
import type { Metadata } from "next"
import ForgotPasswordForm from "@/components/auth/forgot-password-form"
import Logo from "@/components/logo"

export const metadata: Metadata = {
    title: "비밀번호 찾기 | ReTrade",
    description: "ReTrade 계정의 비밀번호를 재설정하세요",
}

export default function ForgotPasswordPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
                <Link href="/" className="mb-8">
                    <Logo size="lg" />
                </Link>
                <div className="w-full max-w-md">
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold">비밀번호 찾기</h1>
                        <p className="mt-2 text-muted-foreground">
                            가입한 이메일 주소를 입력하시면 비밀번호 재설정 링크를 보내드립니다
                        </p>
                    </div>
                    <ForgotPasswordForm />
                    <div className="mt-8 text-center text-sm">
                        <p className="text-muted-foreground">
                            <Link href="/auth/login" className="font-medium text-primary hover:underline">
                                로그인 페이지로 돌아가기
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <footer className="border-t py-4 text-center text-sm text-muted-foreground">
                <p>© 2025 ReTrade. All rights reserved.</p>
            </footer>
        </div>
    )
}
