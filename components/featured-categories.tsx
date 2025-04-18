import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, Shirt, Home, Palette, Music, Car, Book, Gift } from "lucide-react"

export default function FeaturedCategories() {
    const categories = [
        {
            name: "전자기기",
            icon: <Laptop className="h-6 w-6 text-primary" />,
            color: "bg-primary/10",
            items: 1245,
        },
        {
            name: "패션",
            icon: <Shirt className="h-6 w-6 text-secondary" />,
            color: "bg-secondary/10",
            items: 983,
        },
        {
            name: "가구/인테리어",
            icon: <Home className="h-6 w-6 text-gold" />,
            color: "bg-gold/10",
            items: 567,
        },
        {
            name: "취미/예술",
            icon: <Palette className="h-6 w-6 text-accent" />,
            color: "bg-accent/10",
            items: 421,
        },
        {
            name: "음악/악기",
            icon: <Music className="h-6 w-6 text-primary" />,
            color: "bg-primary/10",
            items: 298,
        },
        {
            name: "자동차/오토바이",
            icon: <Car className="h-6 w-6 text-secondary" />,
            color: "bg-secondary/10",
            items: 176,
        },
        {
            name: "도서/티켓",
            icon: <Book className="h-6 w-6 text-gold" />,
            color: "bg-gold/10",
            items: 752,
        },
        {
            name: "기타",
            icon: <Gift className="h-6 w-6 text-accent" />,
            color: "bg-accent/10",
            items: 324,
        },
    ]

    return (
        <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <Badge className="bg-secondary text-white">카테고리</Badge>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">원하는 카테고리를 찾아보세요</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            다양한 카테고리에서 품질 좋은 중고 상품을 찾아보세요
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {categories.map((category, index) => (
                        <Link href="#" key={index}>
                            <Card className="overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className={`rounded-full ${category.color} p-4 mb-4`}>{category.icon}</div>
                                    <h3 className="font-semibold">{category.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{category.items.toLocaleString()}개 상품</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}