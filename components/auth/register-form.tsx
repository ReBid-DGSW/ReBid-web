"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RegisterForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
        agreePrivacy: false,
        agreeMarketing: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setError(null)
    }

    const handleCheckboxChange = (name: string, checked: boolean) => {
        setFormData((prev) => ({ ...prev, [name]: checked }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        if (formData.password !== formData.confirmPassword) {
            setError("비밀번호가 일치하지 않습니다.")
            setIsLoading(false)
            return
        }

        if (!formData.agreeTerms || !formData.agreePrivacy) {
            setError("필수 약관에 동의해주세요.")
            setIsLoading(false)
            return
        }

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            router.push("/auth/login?registered=true")
        } catch (err) {
            setError("회원가입에 실패했습니다. 다시 시도해주세요.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-6">
            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="홍길동"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">비밀번호</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                    <p className="text-xs text-muted-foreground">8자 이상, 영문, 숫자, 특수문자를 포함해주세요</p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </div>

                <Separator />

                <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                        <Checkbox
                            id="agree-terms"
                            checked={formData.agreeTerms}
                            onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                            disabled={isLoading}
                        />
                        <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="agree-terms" className="text-sm font-normal cursor-pointer">
                                <span className="text-destructive">*</span> 이용약관에 동의합니다
                            </Label>
                            <p className="text-xs text-muted-foreground underline cursor-pointer">이용약관 보기</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-2">
                        <Checkbox
                            id="agree-privacy"
                            checked={formData.agreePrivacy}
                            onCheckedChange={(checked) => handleCheckboxChange("agreePrivacy", checked as boolean)}
                            disabled={isLoading}
                        />
                        <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="agree-privacy" className="text-sm font-normal cursor-pointer">
                                <span className="text-destructive">*</span> 개인정보 수집 및 이용에 동의합니다
                            </Label>
                            <p className="text-xs text-muted-foreground underline cursor-pointer">개인정보처리방침 보기</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-2">
                        <Checkbox
                            id="agree-marketing"
                            checked={formData.agreeMarketing}
                            onCheckedChange={(checked) => handleCheckboxChange("agreeMarketing", checked as boolean)}
                            disabled={isLoading}
                        />
                        <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="agree-marketing" className="text-sm font-normal cursor-pointer">
                                마케팅 정보 수신에 동의합니다 (선택)
                            </Label>
                            <p className="text-xs text-muted-foreground">이벤트 및 혜택 정보를 받아보실 수 있습니다</p>
                        </div>
                    </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            회원가입 중...
                        </>
                    ) : (
                        "회원가입"
                    )}
                </Button>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">또는</span>
                </div>
            </div>

            <div className="grid gap-3">
                <Button variant="outline" type="button" disabled={isLoading}>
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                    Google 계정으로 회원가입
                </Button>
                <Button variant="outline" type="button" disabled={isLoading}>
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook 계정으로 회원가입
                </Button>
            </div>
        </div>
    )
}
