"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { auctionsAPI, type AuctionsQuery, type BidRequest } from "@/lib/api/auctions"
import { useToast } from "@/components/ui/use-toast"

export function useAuctions(query: AuctionsQuery = {}) {
    return useQuery({
        queryKey: ["auctions", query],
        queryFn: () => auctionsAPI.getAuctions(query),
        staleTime: 1000 * 60 * 5,
    })
}

export function useAuction(id: string) {
    return useQuery({
        queryKey: ["auctions", id],
        queryFn: () => auctionsAPI.getAuction(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 2,
    })
}

export function useBidHistory(auctionId: string) {
    return useQuery({
        queryKey: ["auctions", auctionId, "bids"],
        queryFn: () => auctionsAPI.getBidHistory(auctionId),
        enabled: !!auctionId,
        refetchInterval: 1000 * 30,
    })
}

export function useUserBids() {
    return useQuery({
        queryKey: ["user", "bids"],
        queryFn: auctionsAPI.getUserBids,
        enabled: !!localStorage.getItem("token"),
    })
}

export function usePlaceBid() {
    const queryClient = useQueryClient()
    const { toast } = useToast()

    return useMutation({
        mutationFn: (data: BidRequest) => auctionsAPI.placeBid(data),
        onSuccess: (_, variables) => {
            // 경매 정보 갱신
            queryClient.invalidateQueries({ queryKey: ["auctions", variables.auctionId] })
            queryClient.invalidateQueries({ queryKey: ["auctions", variables.auctionId, "bids"] })
            queryClient.invalidateQueries({ queryKey: ["user", "bids"] })

            toast({
                title: "입찰 완료",
                description: "입찰이 성공적으로 등록되었습니다.",
            })
        },
        onError: (error) => {
            toast({
                title: "입찰 실패",
                description: error.message,
                variant: "destructive",
            })
        },
    })
}
