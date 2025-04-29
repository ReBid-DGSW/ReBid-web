"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, DollarSign, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Logo from "@/components/logo"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function BidPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const [bidAmount, setBidAmount] = useState("")
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)

    // This would normally come from an API call using the ID
    const auction = {
        id: params.id,
        title: "애플 에어팟 프로 2세대",
        description: "거의 새 상품입니다. 2개월 전에 구매했으며, 보증서와 모든 액세서리가 포함되어 있습니다.",
        startingBid: 150000,
        currentBids: 8,
        highestBid: 178500,
        endsIn: "12시간 23분",
        image: "/placeholder.svg?height=400&width=600",
        category: "전자기기",
        seller: {
            name: "테크마스터",
            rating: 4.9,
            sales: 42,
        },
    }

    const handleBidSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsConfirmOpen(true)
    }

    const confirmBid = () => {
        router.push(`/auction/${params.id}/success?amount=${bidAmount}`)
    }

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
            <main className="flex-1 bg-muted/30">
                <div className="container max-w-4xl px-4 py-8">
                    <Link
                        href={`/auction/${params.id}`}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        상품 페이지로 돌아가기
                    </Link>

                    <div className="grid gap-6">
                        <Card className="overflow-hidden">
                            <CardHeader className="bg-primary text-white">
                                <CardTitle className="text-xl">입찰하기</CardTitle>
                                <CardDescription className="text-white/80">
                                    단일 입찰 경매 시스템에서는 한 번만 입찰할 수 있습니다. 신중하게 결정하세요!
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-1/3">
                                        <div className="rounded-lg overflow-hidden border">
                                            <img
                                                src={auction.image || "/placeholder.svg"}
                                                alt={auction.title}
                                                className="w-full object-cover aspect-square"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <h2 className="text-xl font-semibold">{auction.title}</h2>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Badge className="bg-secondary text-white">단일 입찰 경매</Badge>
                                            <span className="text-sm text-muted-foreground">{auction.category}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">{auction.description}</p>

                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground">시작가</p>
                                                <p className="font-medium">₩{auction.startingBid.toLocaleString()}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">현재 최고 입찰가</p>
                                                <p className="font-medium">₩{auction.highestBid.toLocaleString()}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">입찰 수</p>
                                                <p className="font-medium">{auction.currentBids}회</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">남은 시간</p>
                                                <p className="font-medium text-amber-500">{auction.endsIn}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-6" />

                                <div className="space-y-4">
                                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                                        <div className="flex items-start gap-2">
                                            <Info className="h-5 w-5 text-primary mt-0.5" />
                                            <div>
                                                <h3 className="font-medium">단일 입찰 시스템 안내</h3>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    이 경매는 단일 입찰 시스템으로 진행됩니다. 각 사용자는 단 한 번만 입찰할 수 있으며, 경매 종료
                                                    후 가장 높은 금액을 제시한 사용자가 낙찰됩니다. 신중하게 입찰 금액을 결정하세요.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <form onSubmit={handleBidSubmit}>
                                        <div className="space-y-4">
                                            <div>
                                                <label htmlFor="bid-amount" className="block text-sm font-medium mb-1">
                                                    입찰 금액
                                                </label>
                                                <div className="relative">
                                                    <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                    <Input
                                                        id="bid-amount"
                                                        type="number"
                                                        placeholder="입찰 금액을 입력하세요"
                                                        className="pl-10 text-lg py-6"
                                                        value={bidAmount}
                                                        onChange={(e) => setBidAmount(e.target.value)}
                                                        required
                                                        min={auction.highestBid + 1000}
                                                        step="1000"
                                                    />
                                                    <div className="absolute right-3 top-2.5">
                                                        <TooltipProvider>
                                                            <Tooltip>
                                                                <TooltipTrigger asChild>
                                                                    <Info className="h-5 w-5 text-muted-foreground" />
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p>최소 입찰 금액은 ₩{(auction.highestBid + 1000).toLocaleString()}입니다.</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </div>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    현재 최고 입찰가보다 최소 ₩1,000 이상 높게 입찰해야 합니다.
                                                </p>
                                            </div>

                                            <div className="bg-muted p-4 rounded-lg">
                                                <h4 className="font-medium">입찰 전 확인사항</h4>
                                                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                                                    <li>• 입찰은 한 번만 가능하며, 제출 후에는 수정이나 취소가 불가능합니다.</li>
                                                    <li>• 낙찰 시 구매 확정 및 결제 의무가 있습니다.</li>
                                                    <li>• 경매 종료 후 24시간 이내에 결제를 완료해야 합니다.</li>
                                                </ul>
                                            </div>

                                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 text-lg">
                                                입찰하기
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
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

            <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>입찰 확인</AlertDialogTitle>
                        <AlertDialogDescription>
                            {bidAmount && `₩${Number.parseInt(bidAmount).toLocaleString()}`}의 금액으로 입찰하시겠습니까?
                            <br />
                            <br />
                            <strong>주의:</strong> 단일 입찰 시스템에서는 한 번만 입찰할 수 있으며, 제출 후에는 수정이나 취소가
                            불가능합니다.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>취소</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmBid} className="bg-primary hover:bg-primary/90">
                            확인, 입찰합니다
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
