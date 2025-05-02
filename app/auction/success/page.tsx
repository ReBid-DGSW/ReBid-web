"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, Search, ShoppingBag } from "lucide-react"
import Logo from "@/components/logo"
import { Progress } from "@/components/ui/progress"

export default function BidSuccessPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const amount = searchParams.get("amount")
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress(0)

        const timer = setTimeout(() => {
            setProgress(100)
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <header className="border-b sticky top-0 z-50 bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                        <Logo />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" className="hidden md:flex">
                            로그인
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                            회원가입
                        </Button>
                    </div>
                </div>
            </header>
            <main className="flex-1 bg-muted/30 flex items-center justify-center">
                <div className="container max-w-md px-4 py-8">
                    <Card className="overflow-hidden">
                        <CardHeader className="bg-primary text-white text-center">
                            <div className="flex justify-center mb-2">
                                <CheckCircle className="h-12 w-12 text-accent" />
                            </div>
                            <CardTitle className="text-xl">입찰 완료!</CardTitle>
                            <CardDescription className="text-white/80">입찰이 성공적으로 등록되었습니다</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 text-center">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">입찰 금액</p>
                                    <p className="text-2xl font-bold">{amount ? `₩${Number.parseInt(amount).toLocaleString()}` : "₩0"}</p>
                                </div>

                                <div className="bg-muted p-4 rounded-lg text-left">
                                    <h4 className="font-medium">다음 단계</h4>
                                    <ul className="text-sm text-muted-foreground mt-2 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                                <CheckCircle className="h-3 w-3 text-primary" />
                                            </div>
                                            <span>경매 종료 시간까지 기다려주세요.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                                <CheckCircle className="h-3 w-3 text-primary" />
                                            </div>
                                            <span>낙찰 시 이메일로 알림을 받게 됩니다.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                                <CheckCircle className="h-3 w-3 text-primary" />
                                            </div>
                                            <span>낙찰 후 24시간 이내에 결제를 완료해주세요.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">경매 종료까지</p>
                                    <Progress value={progress} className="h-2" />
                                    <p className="text-sm font-medium">12시간 23분 남음</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="p-6 flex flex-col gap-2">
                            <Button asChild className="w-full bg-primary hover:bg-primary/90">
                                <Link href={`/auction/${params.id}`}>
                                    <ShoppingBag className="h-4 w-4 mr-2" />
                                    상품 페이지로 돌아가기
                                </Link>
                            </Button>
                            <div className="flex gap-2 w-full">
                                <Button asChild variant="outline" className="w-1/2">
                                    <Link href="/">
                                        <Home className="h-4 w-4 mr-2" />
                                        홈으로
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="w-1/2">
                                    <Link href="/browse">
                                        <Search className="h-4 w-4 mr-2" />더 둘러보기
                                    </Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </main>
            <footer className="border-t py-6 md:py-0 bg-dark text-white">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Logo size="sm" />
                        <p className="text-sm text-white/70">© 2025 ReTrade. All rights reserved.</p>
                    </div>
                    <nav className="flex items-center gap-4 text-sm">
                        <Link href="#" className="text-white/70 hover:text-white hover:underline underline-offset-4">
                            이용약관
                        </Link>
                        <Link href="#" className="text-white/70 hover:text-white hover:underline underline-offset-4">
                            개인정보처리방침
                        </Link>
                        <Link href="#" className="text-white/70 hover:text-white hover:underline underline-offset-4">
                            고객센터
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}
