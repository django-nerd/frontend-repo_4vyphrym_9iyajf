import { useMemo } from 'react'
import { Star, Heart, ShoppingBag } from 'lucide-react'

const productsData = [
  {
    id: 'hoodie-black',
    title: 'Pulse Hoodie – Black',
    price: 79,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1200&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 'tshirt-white',
    title: 'Core Tee – White',
    price: 35,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 'cap-black',
    title: 'Global Cap – Black',
    price: 29,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pants-stone',
    title: 'Motion Pants – Stone',
    price: 69,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1516349935484-a17aa318ccf0?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function ProductGrid({ onAddToCart }) {
  const products = useMemo(() => productsData, [])

  return (
    <section id="shop" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured products</h2>
            <p className="text-gray-600 mt-1">Curated picks from our latest drop.</p>
          </div>
          <a href="#collections" className="text-sm font-medium text-fuchsia-700 hover:text-fuchsia-800">View all</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)
          )}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow">
            {product.tag}
          </span>
        )}
        <button
          onClick={() => onAddToCart?.(product)}
          className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-black"
        >
          <ShoppingBag className="h-4 w-4" />
          Add
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 leading-tight">{product.title}</h3>
            <div className="mt-1 inline-flex items-center gap-1 text-xs text-amber-600">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-900">${product.price}</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
            <Heart className="h-4 w-4" />
            Wishlist
          </button>
          <a href="#" className="text-sm font-medium text-fuchsia-700 hover:text-fuchsia-800">Details</a>
        </div>
      </div>
    </div>
  )
}
