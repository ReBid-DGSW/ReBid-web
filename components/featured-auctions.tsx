import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Fish, Leaf, ShoppingBag, Users } from "lucide-react"

export default function FeaturedAuctions() {
    const auctions = [
        {
            id: 1,
            title: "Fresh Organic Vegetables",
            description: "Locally grown organic vegetables, harvested yesterday",
            startingBid: 45.0,
            currentBids: 12,
            endsIn: "2 days",
            image: "/placeholder.svg?height=200&width=300",
            icon: <Leaf className="h-5 w-5 text-green-500" />,
        },
        {
            id: 2,
            title: "Premium Seafood Catch",
            description: "Fresh catch from local fishermen, never frozen",
            startingBid: 65.0,
            currentBids: 8,
            endsIn: "1 day",
            image: "/placeholder.svg?height=200&width=300",
            icon: <Fish className="h-5 w-5 text-blue-500" />,
        },
        {
            id: 3,
            title: "Seasonal Fruit Basket",
            description: "Assortment of in-season fruits from local orchards",
            startingBid: 35.0,
            currentBids: 15,
            endsIn: "3 days",
            image: "/placeholder.svg?height=200&width=300",
            icon: <Leaf className="h-5 w-5 text-green-500" />,
        },
        {
            id: 4,
            title: "Artisanal Cheese Selection",
            description: "Handcrafted cheeses from small-batch producers",
            startingBid: 55.0,
            currentBids: 7,
            endsIn: "12 hours",
            image: "/placeholder.svg?height=200&width=300",
            icon: <ShoppingBag className="h-5 w-5 text-amber-500" />,
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Current Listings</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Auctions</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Browse our selection of quality products from trusted sellers. Remember, you can only bid once!
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
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
                    <Button variant="outline" size="lg">
                        View All Auctions
                    </Button>
                </div>
            </div>
        </section>
    )
}