import { WishlistButton } from "@/components/wishlist-button"

async function getProduct(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000)) 
  return {
    id,
    name: `Product ${id}`,
    description: `This is the description for product ${id}.`,
    price: 29.99,
    imageUrl: `/images/product-${(Number.parseInt(id) % 5) + 1}.jpg`, 
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <WishlistButton productId={params.id} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={product.imageUrl || "/placeholder.svg"} alt={product.name} className="rounded-lg" />
        <div>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-xl font-semibold mt-4">Price: ${product.price}</p>
          {/* Add to cart button or other actions here */}
        </div>
      </div>
    </div>
  )
}
