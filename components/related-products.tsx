import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function RelatedProducts() {
    const products = [
        {
            id: 1,
            title: "아이폰 14 프로 256GB",
            price: 980000,
            image: "/placeholder.svg?height=300&width=300&text=iPhone+14+Pro",
            condition: "중고",
            category: "전자기기",
        },
        {
            id: 2,
            title: "갤럭시 Z 폴드 4 512GB",
            price: 1250000,
            image: "/placeholder.svg?height=300&width=300&text=Galaxy+Z+Fold",
            condition: "중고",
            category: "전자기기",
        },
        {
            id: 3,
            title: "아이패드 프로 11인치 M2",
            price: 850000,
            image: "/placeholder.svg?height=300&width=300&text=iPad+Pro",
            condition: "새제품",
            category: "전자기기",
        },
        {
            id: 4,
            title: "갤럭시 워치 5 프로",
            price: 280000,
            image: "/placeholder.svg?height=300&width=300&text=Galaxy+Watch",
            condition: "중고",
            category: "전자기기",
        },
        {
            id: 5,
            title: "에어팟 맥스",
            price: 450000,
            image: "/placeholder.svg?height=300&width=300&text=AirPods+Max",
            condition: "중고",
            category: "전자기기",
        },
        {
            id: 6,
            title: "맥북 프로 14인치 M2",
            price: 1850000,
            image: "/placeholder.svg?height=300&width=300&text=MacBook+Pro",
            condition: "새제품",
            category: "전자기기",
        },
    ]

    return (
        <section className="mt-12 mb-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">이런 상품은 어떠세요?</h2>
                <Link
                    href="/category/electronics"
                    className="text-primary flex items-center gap-1 text-sm font-medium hover:underline"
                >
                    더 보기 <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {products.map((product) => (
                    <Link href={`/product/${product.id}`} key={product.id} className="group">
                        <Card className="overflow-hidden border transition-all hover:shadow-md hover:-translate-y-1">
                            <div className="aspect-square overflow-hidden relative">
                                <Badge className="absolute top-2 left-2 z-10 bg-secondary text-white">{product.condition}</Badge>
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-3">
                                <h3 className="font-medium text-sm line-clamp-1">{product.title}</h3>
                                <p className="font-bold mt-1">₩{product.price.toLocaleString()}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    )
}