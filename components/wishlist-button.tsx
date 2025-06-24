"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WishlistButtonProps {
  productId: string
  initialIsWishlisted?: boolean
  className?: string
}

export function WishlistButton({ productId, initialIsWishlisted = false, className }: WishlistButtonProps) {
  const [isWishlisted, setIsWishlisted] = useState(initialIsWishlisted)
  const [isLoading, setIsLoading] = useState(false)

  const toggleWishlist = async () => {
    setIsLoading(true)
    try {
      // API 호출 (실제 구현 시)
      // if (isWishlisted) {
      //   await api.delete(`/wishlist/${productId}`)
      // } else {
      //   await api.post('/wishlist', { productId })
      // }

      setIsWishlisted(!isWishlisted)
    } catch (error) {
      console.error("관심상품 처리 실패:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleWishlist}
      disabled={isLoading}
      className={cn(
        "transition-colors",
        isWishlisted && "bg-red-50 border-red-200 text-red-600 hover:bg-red-100",
        className,
      )}
    >
      <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
    </Button>
  )
}
