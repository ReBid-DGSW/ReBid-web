"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/hooks/use-auth"

export default function ForgotPasswordForm() {
    const { forgotPassword, isSendingResetEmail } = useAuth()
    const [success, setSuccess] = useState(false)
    const [email, setEmail] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        forgotPassword(email)
        setSuccess(true)
    }

    return (
        <div className="space-y-6">
            {success ? (
                <Alert className="border-green-500 bg-green-50 text-green-800">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertDescription>
                        비밀번호 재설정 링크가 <strong>{email}</strong>로 전송되었습니다. 이메일을 확인해주세요.
                    </AlertDescription>
                </Alert>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">이메일</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSendingResetEmail}
                        />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSendingResetEmail}>
                        {isSendingResetEmail ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                처리 중...
                            </>
                        ) : (
                            "비밀번호 재설정 링크 받기"
                        )}
                    </Button>
                </form>
            )}
        </div>
    )
}
