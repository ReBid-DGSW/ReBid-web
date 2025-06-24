// API 베이스 URL을 백엔드 서버로 변경
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

// 소셜 로그인 함수들 추가
export const socialLogin = {
  google: () => {
    window.location.href = `${API_BASE_URL.replace("/api", "")}/oauth2/authorization/google`
  },
  facebook: () => {
    window.location.href = `${API_BASE_URL.replace("/api", "")}/oauth2/authorization/facebook`
  },
}

// 기존 API 함수들의 엔드포인트를 백엔드와 맞춤
export const authAPI = {
  login: (data: LoginData) => api.post("/auth/login", data),
  register: (data: RegisterData) => api.post("/auth/register", data),
  getCurrentUser: () => api.get("/users/me"),
}

export const productAPI = {
  getProducts: (params?: any) => api.get("/products", { params }),
  getProduct: (id: string) => api.get(`/products/${id}`),
  createProduct: (data: any) => api.post("/products", data),
  searchProducts: (keyword: string, params?: any) => api.get("/products/search", { params: { keyword, ...params } }),
  getRecentProducts: (limit = 10) => api.get("/products/recent", { params: { limit } }),
}

export const auctionAPI = {
  getAuction: (id: string) => api.get(`/auctions/${id}`),
  createAuction: (data: any) => api.post("/auctions", data),
  getActiveAuctions: () => api.get("/auctions/active"),
}

export const bidAPI = {
  placeBid: (data: any) => api.post("/bids", data),
  getBidsByAuction: (auctionId: string, params?: any) => api.get(`/bids/auction/${auctionId}`, { params }),
  getHighestBid: (auctionId: string) => api.get(`/bids/auction/${auctionId}/highest`),
  getBidCount: (auctionId: string) => api.get(`/bids/auction/${auctionId}/count`),
}
