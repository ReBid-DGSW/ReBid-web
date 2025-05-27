export interface Product {
    id: string
    title: string
    price: number
    originalPrice?: number
    discount?: number
    condition: string
    description: string
    images: string[]
    category: string
    subcategory: string
    location: string
    uploadDate: string
    views: number
    likes: number
    seller: {
        id: string
        name: string
        rating: number
        sales: number
        avatar?: string
    }
    specs: Array<{
        name: string
        value: string
    }>
    shippingOptions: Array<{
        method: string
        price: number
        location?: string
    }>
    status: "available" | "sold" | "reserved"
    createdAt: string
    updatedAt: string
}

export interface ProductsQuery {
    page?: number
    limit?: number
    category?: string
    subcategory?: string
    search?: string
    minPrice?: number
    maxPrice?: number
    condition?: string
    location?: string
    sortBy?: "newest" | "price-low" | "price-high" | "popular"
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

export const productsAPI = {
    // 상품 목록 조회
    getProducts: async (
        query: ProductsQuery = {},
    ): Promise<{
        products: Product[]
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

        const response = await fetch(`${API_BASE_URL}/products?${searchParams}`)

        if (!response.ok) {
            throw new Error("상품 목록을 가져올 수 없습니다.")
        }

        return response.json()
    },

    // 특정 상품 상세 조회
    getProduct: async (id: string): Promise<Product> => {
        const response = await fetch(`${API_BASE_URL}/products/${id}`)

        if (!response.ok) {
            throw new Error("상품 정보를 가져올 수 없습니다.")
        }

        return response.json()
    },

    // 관련 상품 조회
    getRelatedProducts: async (id: string): Promise<Product[]> => {
        const response = await fetch(`${API_BASE_URL}/products/${id}/related`)

        if (!response.ok) {
            throw new Error("관련 상품을 가져올 수 없습니다.")
        }

        return response.json()
    },

    // 상품 찜하기/취소
    toggleLike: async (id: string): Promise<{ liked: boolean }> => {
        const token = localStorage.getItem("token")

        const response = await fetch(`${API_BASE_URL}/products/${id}/like`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (!response.ok) {
            throw new Error("찜하기에 실패했습니다.")
        }

        return response.json()
    },
}
