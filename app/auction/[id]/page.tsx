"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Clock, DollarSign, Heart, MessageSquare, Star, Truck, User, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Logo from "@/components/logo"
import { Check } from "lucide-react"

export default function AuctionDetailPage({ params }: { params: { id: string } }) {
    const [bidAmount, setBidAmount] = useState("")

    // This would normally come from an API call using the ID
    const auction = {
        id: params.id,
        title: "애플 에어팟 프로 2세대",
        description:
            "거의 새 상품입니다. 2개월 전에 구매했으며, 보증서와 모든 액세서리가 포함되어 있습니다. 개인 사정으로 판매합니다.",
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
            avatar: "/placeholder.svg?height=40&width=40",
        },
        location: "서울 강남구",
        shippingOptions: [
            { method: "직거래", price: 0 },
            { method: "일반 배송", price: 3000 },
            { method: "당일 배송", price: 5000 },
        ],
        bidHistory: [
            { user: "apple_fan", amount: 178500, time: "3시간 전" },
            { user: "music_lover", amount: 175000, time: "5시간 전" },
            { user: "tech_geek", amount: 170000, time: "7시간 전" },
            { user: "bargain_hunter", amount: 165000, time: "9시간 전" },
            { user: "audio_pro", amount: 160000, time: "11시간 전" },
        ],
    }

    const handleBidSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle bid submission logic here
        alert(`₩${bidAmount}의 입찰이 완료되었습니다!`)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="border-b sticky top-0 z-50 bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                        <Logo />
                        <div className="hidden md:flex relative w-full max-w-sm items-center">
                            <Input type="search" placeholder="Search for items..." className="bg-muted border-none" />
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium hover:text-primary">
                            Home
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                            Browse
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                            Sell
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                            How It Works
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="hidden md:flex">
                            <Heart className="h-5 w-5" />
                            <span className="sr-only">Wishlist</span>
                        </Button>
                        <Button variant="outline" size="sm" className="hidden md:flex">
                            Sign In
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                            Register
                        </Button>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <div className="container px-4 py-6 md:py-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        상품 목록으로 돌아가기
                    </Link>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <div className="rounded-lg overflow-hidden border bg-card">
                                <img
                                    src={auction.image || "/placeholder.svg"}
                                    alt={auction.title}
                                    className="w-full object-cover aspect-video"
                                />
                            </div>

                            <Tabs defaultValue="details" className="mt-6">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="details">상품 정보</TabsTrigger>
                                    <TabsTrigger value="shipping">배송 정보</TabsTrigger>
                                    <TabsTrigger value="seller">판매자 정보</TabsTrigger>
                                </TabsList>
                                <TabsContent value="details" className="p-4 border rounded-lg mt-2">
                                    <h3 className="font-semibold text-lg mb-2">상품 설명</h3>
                                    <p className="text-muted-foreground">{auction.description}</p>

                                    <Separator className="my-4" />

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="text-sm font-medium">카테고리</h4>
                                            <p className="text-sm text-muted-foreground">{auction.category}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">거래 지역</h4>
                                            <p className="text-sm text-muted-foreground">{auction.location}</p>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="shipping" className="p-4 border rounded-lg mt-2">
                                    <h3 className="font-semibold text-lg mb-2">배송 옵션</h3>
                                    <div className="space-y-4">
                                        {auction.shippingOptions.map((option, index) => (
                                            <div key={index} className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Truck className="h-4 w-4 text-muted-foreground" />
                                                    <span>{option.method}</span>
                                                </div>
                                                <span className="font-medium">
                          {option.price === 0 ? "무료" : `₩${option.price.toLocaleString()}`}
                        </span>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                                <TabsContent value="seller" className="p-4 border rounded-lg mt-2">
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src={auction.seller.avatar} alt={auction.seller.name} />
                                            <AvatarFallback>{auction.seller.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-semibold">{auction.seller.name}</h3>
                                            <div className="flex items-center gap-1 text-sm">
                                                <Star className="h-3 w-3 fill-gold text-gold" />
                                                <span>{auction.seller.rating} 평점</span>
                                                <span className="text-muted-foreground">({auction.seller.sales}회 판매)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator className="my-4" />

                                    <Button variant="outline" className="w-full" size="sm">
                                        <MessageSquare className="h-4 w-4 mr-2" />
                                        판매자에게 문의하기
                                    </Button>
                                </TabsContent>
                            </Tabs>
                        </div>

                        <div>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Badge className="bg-secondary text-white">단일 입찰 경매</Badge>
                                        <CardTitle>{auction.title}</CardTitle>
                                    </div>
                                    <CardDescription>한 번만 입찰 가능합니다</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm">시작가</div>
                                        <div className="font-medium">₩{auction.startingBid.toLocaleString()}</div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm">현재 최고 입찰가</div>
                                        <div className="font-bold text-lg">₩{auction.highestBid.toLocaleString()}</div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-sm">
                                            <Users className="h-4 w-4" />
                                            <span>입찰 {auction.currentBids}회</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-amber-500 text-sm">
                                            <Clock className="h-4 w-4" />
                                            <span>남은 시간: {auction.endsIn}</span>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div>
                                        <h3 className="font-medium mb-2">입찰하기</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            단 한 번만 입찰할 수 있습니다. 신중하게 결정하세요!
                                        </p>
                                        <form onSubmit={handleBidSubmit}>
                                            <div className="flex items-center">
                                                <div className="relative flex-1">
                                                    <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                                    <Input
                                                        type="number"
                                                        placeholder="입찰 금액 입력"
                                                        className="pl-8"
                                                        value={bidAmount}
                                                        onChange={(e) => setBidAmount(e.target.value)}
                                                        required
                                                        min={auction.highestBid + 1000}
                                                        step="1000"
                                                    />
                                                </div>
                                                <Button type="submit" className="ml-2 bg-primary hover:bg-primary/90">
                                                    입찰하기
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col items-start">
                                    <h3 className="font-medium mb-2">최근 입찰 내역</h3>
                                    <div className="w-full space-y-2">
                                        {auction.bidHistory.slice(0, 3).map((bid, index) => (
                                            <div key={index} className="flex justify-between items-center text-sm">
                                                <div className="flex items-center gap-1">
                                                    <User className="h-3 w-3 text-muted-foreground" />
                                                    <span>{bid.user}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span>₩{bid.amount.toLocaleString()}</span>
                                                    <span className="text-xs text-muted-foreground">{bid.time}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="link" size="sm" className="mt-2 px-0">
                                        전체 {auction.bidHistory.length}개 입찰 내역 보기
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card className="mt-4">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-base">단일 입찰 경매의 장점</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                                <Check className="h-3 w-3 text-primary" />
                                            </div>
                                            <span>입찰 경쟁이나 가격 상승 없음</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                                <Check className="h-3 w-3 text-primary" />
                                            </div>
                                            <span>모든 구매자에게 공정한 기회</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                                <Check className="h-3 w-3 text-primary" />
                                            </div>
                                            <span>스트레스 없는 입찰 경험</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                                <Check className="h-3 w-3 text-primary" />
                                            </div>
                                            <span>투명하고 예측 가능한 프로세스</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
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
        </div>
    )
}
