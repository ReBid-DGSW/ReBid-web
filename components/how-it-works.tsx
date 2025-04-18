import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, DollarSign, Package, ShoppingBag, User } from "lucide-react"

export default function HowItWorks() {
    const steps = [
        {
            icon: <Package className="h-10 w-10 text-primary" />,
            title: "판매자가 상품 등록",
            description: "판매자가 시작가와 경매 기간을 설정하여 상품을 등록합니다.",
        },
        {
            icon: <User className="h-10 w-10 text-secondary" />,
            title: "구매자가 한 번만 입찰",
            description: "각 구매자는 자신이 생각하는 최고의 가격으로 단 한 번만 입찰할 수 있습니다.",
        },
        {
            icon: <Clock className="h-10 w-10 text-gold" />,
            title: "경매 종료",
            description: "경매 시간이 종료되면 더 이상 입찰을 받지 않습니다.",
        },
        {
            icon: <DollarSign className="h-10 w-10 text-accent" />,
            title: "최고 입찰자 낙찰",
            description: "가장 높은 금액을 제시한 구매자가 자동으로 낙찰됩니다.",
        },
        {
            icon: <ShoppingBag className="h-10 w-10 text-primary" />,
            title: "안전한 거래 진행",
            description: "결제가 처리되고 판매자는 낙찰자에게 상품을 배송합니다.",
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-dark via-dark to-primary">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <Badge className="bg-accent text-dark">이용 방법</Badge>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                            단일 입찰 경매 시스템 이용 방법
                        </h2>
                        <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            우리의 단일 입찰 경매 시스템은 공정하고 투명하며 스트레스 없는 거래를 위해 설계되었습니다.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-5 md:gap-4 lg:gap-8 mt-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center">
                            <Card className="w-full bg-white/10 backdrop-blur-sm border-white/20">
                                <CardHeader className="pb-2">
                                    <div className="mb-2 flex justify-center">{step.icon}</div>
                                    <CardTitle className="text-xl text-white text-center">
                                        {index + 1}. {step.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-white/70 text-center">{step.description}</p>
                                </CardContent>
                            </Card>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-white/50">
                                    <ArrowRight className="h-6 w-6" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}