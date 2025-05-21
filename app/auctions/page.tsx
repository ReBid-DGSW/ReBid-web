import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Fish, Leaf, Search, ShoppingBag, Users } from "lucide-react"

export default function AuctionsPage() {
    const auctions = [
        {
            id: 1,
            title: "에어팟 프로2",
            description: "에어팟프로2 일주일만 썼습니다",
            startingBid: 200000.0,
            currentBids: 12,
            endsIn: "2 days",
            image: "/placeholder.svg?height=200&width=300",
            icon: <Leaf className="h-5 w-5 text-green-500" />,
            category: "Produce",
        },
        {
            id: 2,
            title: "도우너 인형",
            description: "아기공룡둘리 둘리친구 도우너 인형입니다.",
            startingBid: 20000.0,
            currentBids: 8,
            endsIn: "1 day",
            image: "/placeholder.svg?height=200&width=300",
            icon: <Fish className="h-5 w-5 text-blue-500" />,
            category: "Seafood",
        },
        {
            id: 3,
            title: "또치 인형",
            description: "아기공룡둘리 둘리친구 또치 인형입니다.",
            startingBid: 22000.0,
            currentBids: 15,
            endsIn: "3 days",
            image: "/placeholder.svg?height=200&width=300",
            icon: <Leaf className="h-5 w-5 text-green-500" />,
            category: "Produce",
        },
        {
            id: 4,
            title: "희동이 인형",
            description: "아기공룡둘리 아기 희동이 인형입니다.",
            startingBid: 28000.0,
            currentBids: 7,
            endsIn: "12 hours",
            image: "/placeholder.svg?height=200&width=300",
            icon: <ShoppingBag className="h-5 w-5 text-amber-500" />,
            category: "Dairy",
        },
        {
            id: 5,
            title: "김둘라 김준환",
            description: "이번 한번만 팝니다 급매 입니다.",
            startingBid: 20000000.0,
            currentBids: 5,
            endsIn: "4 days",
            image: "/placeholder.svg?height=200&width=300",
            icon: <ShoppingBag className="h-5 w-5 text-amber-500" />,
            category: "Dairy",
        },
        {
            id: 6,
            title: "둘리 인형",
            description: "아기공룡둘리 인형입니다",
            startingBid: 30000.0,
            currentBids: 10,
            endsIn: "2 days",
            image: "/placeholder.svg?height=200&width=300",
            icon: <Fish className="h-5 w-5 text-blue-500" />,
            category: "Seafood",
        },
        {
            id: 7,
            title: "길동이 인형",
            description: "아기공룡둘리 길동이 인형입니다.",
            startingBid: 34000.0,
            currentBids: 9,
            endsIn: "1 day",
            image: "/placeholder.svg?height=200&width=300",
            icon: <Leaf className="h-5 w-5 text-green-500" />,
            category: "Produce",
        },
        {
            id: 8,
            title: "마이콜 인형",
            description: "정말 구하기 힘든 일본 한정판 마이콜인형입니다.",
            startingBid: 50000.0,
            currentBids: 14,
            endsIn: "5 days",
            image: "/placeholder.svg?height=200&width=300",
            icon: <ShoppingBag className="h-5 w-5 text-amber-500" />,
            category: "Meat",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <header className="border-b">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold">AgroBid</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                            Home
                        </Link>
                        <Link href="/auctions" className="text-sm font-medium text-primary underline underline-offset-4">
                            Auctions
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            How It Works
                        </Link>
                        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                            About
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm">
                            Sign In
                        </Button>
                        <Button size="sm">Register</Button>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <div className="container px-4 py-6 md:py-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">All Auctions</h1>
                            <p className="text-muted-foreground">Browse all available auctions and place your single best bid</p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input type="search" placeholder="Search auctions..." className="pl-8 w-full sm:w-[250px]" />
                            </div>
                            <Select defaultValue="all">
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem value="produce">Produce</SelectItem>
                                    <SelectItem value="seafood">Seafood</SelectItem>
                                    <SelectItem value="dairy">Dairy</SelectItem>
                                    <SelectItem value="meat">Meat</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="ending-soon">
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ending-soon">Ending Soon</SelectItem>
                                    <SelectItem value="newest">Newest</SelectItem>
                                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                                    <SelectItem value="most-bids">Most Bids</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                        {auctions.map((auction) => (
                            <Card key={auction.id} className="overflow-hidden">
                                <CardHeader className="pb-0">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            {auction.icon}
                                            <CardTitle className="text-lg">{auction.title}</CardTitle>
                                        </div>
                                    </div>
                                    <CardDescription>Starting bid: ${auction.startingBid.toFixed(2)}</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                                        <img
                                            src={auction.image || "/placeholder.svg"}
                                            alt={auction.title}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground">{auction.description}</p>
                                    <div className="mt-2 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                                        {auction.category}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Users className="h-3 w-3" />
                                            {auction.currentBids} bids placed
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-amber-500">
                                            <Clock className="h-3 w-3" />
                                            Ends in {auction.endsIn}
                                        </div>
                                    </div>
                                    <Button size="sm">Place Bid</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" disabled>
                                &lt;
                            </Button>
                            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                                1
                            </Button>
                            <Button variant="outline" size="sm">
                                2
                            </Button>
                            <Button variant="outline" size="sm">
                                3
                            </Button>
                            <Button variant="outline" size="icon">
                                &gt;
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                        <p className="text-sm text-muted-foreground">© 2025 AgroBid. All rights reserved.</p>
                    </div>
                    <nav className="flex items-center gap-4 text-sm">
                        <Link href="#" className="text-muted-foreground hover:underline underline-offset-4">
                            Terms
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:underline underline-offset-4">
                            Privacy
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:underline underline-offset-4">
                            Contact
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
};