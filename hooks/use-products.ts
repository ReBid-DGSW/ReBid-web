"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { productsAPI, type ProductsQuery } from "@/lib/api/products"
import { useToast } from "@/components/ui/use-toast"

export function useProducts(query: ProductsQuery = {}) {
    return useQuery({
        queryKey: ["products", query],
        queryFn: () => productsAPI.getProducts(query),
        staleTime: 1000 * 60 * 5,
    })
}

export function useProduct(id: string) {
    return useQuery({
        queryKey: ["products", id],
        queryFn: () => productsAPI.getProduct(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 10,
    })
}

export function useRelatedProducts(id: string) {
    return useQuery({
        queryKey: ["products", id, "related"],
        queryFn: () => productsAPI.getRelatedProducts(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 15,
    })
}

export function useToggleProductLike() {
    const queryClient = useQueryClient()
    const { toast } = useToast()

    return useMutation({
        mutationFn: (id: string) => productsAPI.toggleLike(id),
        onSuccess: (data, productId) => {
            // 상품 정보 갱신
            queryClient.invalidateQueries({ queryKey: ["products", productId] })

            toast({
                title: data.liked ? "찜 추가" : "찜 해제",
                description: data.liked ? "찜 목록에 추가되었습니다." : "찜 목록에서 제거되었습니다.",
            })
        },
        onError: (error) => {
            toast({
                title: "오류",
                description: error.message,
                variant: "destructive",
            })
        },
    })
}
