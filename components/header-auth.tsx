"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Heart, LogOut, Package, Settings, User } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

export default function HeaderAuth() {
    const { user, isAuthenticated, logout, isLoadingUser } = useAuth()

    if (isLoadingUser) {
        return (
            <div className="flex items-center gap-4">
                <div className="h-9 w-16 bg-muted animate-pulse rounded-md" />
                <div className="h-9 w-20 bg-muted animate-pulse rounded-md" />
            </div>
        )
    }

    if (!isAuthenticated) {
        return (
            <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" asChild>
                    <Link href="/auth/login">로그인</Link>
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                    <Link href="/auth/register">회원가입</Link>
                </Button>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex" asChild>
                <Link href="/wishlist">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">찜 목록</span>
                </Link>
            </Button>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{user?.name}</p>
                            <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link href="/profile">
                            <User className="mr-2 h-4 w-4" />
                            <span>프로필</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/my-bids">
                            <Package className="mr-2 h-4 w-4" />
                            <span>내 입찰</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/wishlist">
                            <Heart className="mr-2 h-4 w-4" />
                            <span>찜 목록</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/settings">
                            <Settings className="mr-2 h-4 w-4" />
                            <span>설정</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => logout()}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>로그아웃</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
