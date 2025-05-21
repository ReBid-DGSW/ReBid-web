import Link from "next/link"
import type { Metadata } from "next"
import LoginForm from "@/components/auth/login-form"
import Logo from "@/components/logo"

export const metadata: Metadata = {
    title: "로그인 | ReTrade",
    description: "ReTrade 계정에 로그인하세요",
}

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
                <Link href="/" className="mb-8">
                    <Logo size="lg" />
                </Link>
                <div className="w-full max-w-md">
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold">로그인</h1>
                        <p className="mt-2 text-muted-foreground">ReTrade 계정에 로그인하고 단일 입찰 경매에 참여하세요</p>
                    </div>
                    <LoginForm />
                    <div className="mt-8 text-center text-sm">
                        <p className="text-muted-foreground">
                            아직 계정이 없으신가요?{" "}
                            <Link href="/auth/register" className="font-medium text-primary hover:underline">
                                회원가입
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
