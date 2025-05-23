import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryProvider } from "@/components/providers/query-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "ReTrade - 단일 입찰 중고거래 플랫폼",
    description: "단 한 번의 입찰로 공정한 중고거래를 경험하세요",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
        <body className={inter.className}>
        <QueryProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                {children}
                <Toaster />
            </ThemeProvider>
        </QueryProvider>
        </body>
        </html>
    )
}
