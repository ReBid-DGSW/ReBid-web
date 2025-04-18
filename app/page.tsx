import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, Heart, Search, ShoppingBag, Star, TrendingUp } from "lucide-react"
import Logo from "@/components/logo"
import FeaturedCategories from "@/components/featured-categories"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        <header className="border-b sticky top-0 z-50 bg-background">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Logo />
              <div className="hidden md:flex relative w-full max-w-sm items-center">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search for items..." className="pl-8 bg-muted border-none" />
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium hover:text-primary">
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
          <div className="md:hidden border-t">
            <div className="container py-2">
              <div className="relative w-full items-center">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search for items..." className="pl-8 bg-muted border-none" />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-secondary">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    단 한 번의 입찰로 <br />
                    공정한 중고거래를 경험하세요
                  </h1>
                  <p className="text-white/80 md:text-xl max-w-[600px]">
                    우리의 단일 입찰 경매 시스템으로 불필요한 가격 경쟁 없이 공정하고 투명한 거래를 즐기세요. 한 번만
                    입찰하고, 최고가로 낙찰받으세요.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg" className="bg-accent text-dark hover:bg-accent/90 font-semibold">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      상품 둘러보기
                    </Button>
                    <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                      판매하기
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -top-4 -left-4 h-72 w-72 bg-accent/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-4 -right-4 h-72 w-72 bg-gold/20 rounded-full blur-3xl" />
                    <Card className="relative border-2 overflow-hidden">
                      <CardHeader className="pb-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-secondary text-white">인기 상품</Badge>
                            <CardTitle className="text-lg">애플 에어팟 프로 2세대</CardTitle>
                          </div>
                        </div>
                        <CardDescription>시작가: ₩150,000</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                              src="/placeholder.svg?height=400&width=600"
                              alt="애플 에어팟 프로"
                              className="object-cover w-full h-full"
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          12시간 남음
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">입찰하기</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FeaturedCategories />

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Badge className="bg-primary text-white">인기 상품</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">지금 인기있는 경매</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    신뢰할 수 있는 판매자의 품질 좋은 상품을 둘러보세요. 단 한 번의 입찰 기회를 놓치지 마세요!
                  </p>
                </div>
              </div>
              <Tabs defaultValue="all" className="mt-8">
                <div className="flex justify-center">
                  <TabsList className="bg-muted/60">
                    <TabsTrigger value="all">전체</TabsTrigger>
                    <TabsTrigger value="electronics">전자기기</TabsTrigger>
                    <TabsTrigger value="fashion">패션</TabsTrigger>
                    <TabsTrigger value="home">가구/인테리어</TabsTrigger>
                    <TabsTrigger value="hobby">취미/레저</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <Card key={item} className="overflow-hidden">
                          <div className="aspect-square overflow-hidden">
                            <img
                                src={`/placeholder.svg?height=300&width=300&text=Item+${item}`}
                                alt={`Item ${item}`}
                                className="object-cover w-full h-full transition-transform hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <Badge className="bg-secondary text-white mb-2">단일 입찰</Badge>
                            <h3 className="font-semibold text-lg line-clamp-1">상품명 예시 {item}</h3>
                            <div className="flex justify-between items-center mt-1">
                              <p className="font-bold text-lg">₩{(Math.floor(Math.random() * 50) + 5) * 10000}</p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {Math.floor(Math.random() * 24) + 1}시간 남음
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 pt-0 flex justify-between">
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="h-4 w-4 fill-gold text-gold" />
                              <span>{(Math.random() * 2 + 3).toFixed(1)}</span>
                            </div>
                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                              입찰하기
                            </Button>
                          </CardFooter>
                        </Card>
                    ))}
                  </div>
                  <div className="flex justify-center mt-8">
                    <Button variant="outline" size="lg" className="gap-2">
                      더 많은 상품 보기
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="electronics" className="mt-6">
                  <div className="flex items-center justify-center p-8 text-center">
                    <p className="text-muted-foreground">전자기기 카테고리의 상품이 여기에 표시됩니다.</p>
                  </div>
                </TabsContent>
                <TabsContent value="fashion" className="mt-6">
                  <div className="flex items-center justify-center p-8 text-center">
                    <p className="text-muted-foreground">패션 카테고리의 상품이 여기에 표시됩니다.</p>
                  </div>
                </TabsContent>
                <TabsContent value="home" className="mt-6">
                  <div className="flex items-center justify-center p-8 text-center">
                    <p className="text-muted-foreground">가구/인테리어 카테고리의 상품이 여기에 표시됩니다.</p>
                  </div>
                </TabsContent>
                <TabsContent value="hobby" className="mt-6">
                  <div className="flex items-center justify-center p-8 text-center">
                    <p className="text-muted-foreground">취미/레저 카테고리의 상품이 여기에 표시됩니다.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          <HowItWorks />

          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <Badge className="bg-primary text-white">왜 ReTrade인가요?</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    단일 입찰 경매 시스템의 장점
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    우리의 플랫폼은 농수산물 시장에서 검증된 경매 방식을 중고거래에 도입했습니다.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        시간 압박 없음
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        마지막 순간의 가격 경쟁이나 스나이핑 없이 편안하게 입찰하세요.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        공정한 가격
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        입찰 경쟁으로 인한 가격 상승 없이 실제 시장 가치에 상품을 구매하세요.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                        예측 가능한 거래
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        판매자는 간단하고 투명한 프로세스로 안정적인 수익을 창출할 수 있습니다.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-primary" />
                        모두를 위한 기회
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        자금이 제한된 사용자도 시장에 공정하게 참여할 수 있도록 돕습니다.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
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
