import Link from "next/link"
import type { Metadata } from "next"
import RegisterForm from "@/components/auth/register-form"
import Logo from "@/components/logo"

export const metadata: Metadata = {
    title: "회원가입 | ReTrade",
    description: "ReTrade에 가입하고 단일 입찰 경매에 참여하세요",
}

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
                <Link href="/" className="mb-8">
                    <Logo size="lg" />
                </Link>
                <div className="w-full max-w-md">
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold">회원가입</h1>
                        <p className="mt-2 text-muted-foreground">ReTrade에 가입하고 단일 입찰 경매에 참여하세요</p>
                    </div>
                    <RegisterForm />
                    <div className="mt-8 text-center text-sm">
                        <p className="text-muted-foreground">
                            이미 계정이 있으신가요?{" "}
                            <Link href="/auth/login" className="font-medium text-primary hover:underline">
                                로그인
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
