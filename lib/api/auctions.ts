export interface Auction {
    id: string
    title: string
    description: string
    startingBid: number
    currentBids: number
    highestBid: number
    endsAt: string
    image: string
    category: string
    seller: {
        id: string
        name: string
        rating: number
        sales: number
        avatar?: string
    }
    location: string
    shippingOptions: Array<{
        method: string
        price: number
        location?: string
    }>
    status: "active" | "ended" | "cancelled"
    createdAt: string
    updatedAt: string
}

export interface BidRequest {
    auctionId: string
    amount: number
}

export interface BidHistory {
    id: string
    user: string
    amount: number
    createdAt: string
}

export interface AuctionsQuery {
    page?: number
    limit?: number
    category?: string
    search?: string
    sortBy?: "ending-soon" | "newest" | "price-low" | "price-high" | "most-bids"
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

export const auctionsAPI = {
    // 경매 목록 조회
    getAuctions: async (
        query: AuctionsQuery = {},
    ): Promise<{
        auctions: Auction[]
        total: number
        page: number
        totalPages: number
    }> => {
        const searchParams = new URLSearchParams()

        Object.entries(query).forEach(([key, value]) => {
            if (value !== undefined) {
                searchParams.append(key, value.toString())
            }
        })

        const response = await fetch(`${API_BASE_URL}/auctions?${searchParams}`)

        if (!response.ok) {
            throw new Error("경매 목록을 가져올 수 없습니다.")
        }

        return response.json()
    },

    // 특정 경매 상세 조회
    getAuction: async (id: string): Promise<Auction> => {
        const response = await fetch(`${API_BASE_URL}/auctions/${id}`)

        if (!response.ok) {
            throw new Error("경매 정보를 가져올 수 없습니다.")
        }

        return response.json()
    },

    // 입찰하기
    placeBid: async (data: BidRequest): Promise<void> => {
        const token = localStorage.getItem("token")

        const response = await fetch(`${API_BASE_URL}/auctions/${data.auctionId}/bid`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ amount: data.amount }),
        })

        if (!response.ok) {
            throw new Error("입찰에 실패했습니다.")
        }
    },

    // 입찰 내역 조회
    getBidHistory: async (auctionId: string): Promise<BidHistory[]> => {
        const response = await fetch(`${API_BASE_URL}/auctions/${auctionId}/bids`)

        if (!response.ok) {
            throw new Error("입찰 내역을 가져올 수 없습니다.")
        }

        return response.json()
    },

    // 사용자의 입찰 내역 조회
    getUserBids: async (): Promise<
        Array<{
            auction: Auction
            bid: BidHistory
            status: "winning" | "outbid" | "won" | "lost"
        }>
    > => {
        const token = localStorage.getItem("token")

        const response = await fetch(`${API_BASE_URL}/user/bids`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (!response.ok) {
            throw new Error("입찰 내역을 가져올 수 없습니다.")
        }

        return response.json()
    },
}
