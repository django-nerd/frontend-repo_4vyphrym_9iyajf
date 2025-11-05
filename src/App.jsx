import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = useCallback((product) => {
    setCart((prev) => [...prev, product])
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <ProductGrid onAddToCart={handleAddToCart} />
        <section id="collections" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
              <div className="grid md:grid-cols-2">
                <div className="p-10">
                  <p className="text-sm font-semibold text-fuchsia-700">SS24 Capsule</p>
                  <h3 className="mt-2 text-2xl font-bold">City Rhythm Collection</h3>
                  <p className="mt-2 text-gray-600 max-w-prose">
                    Inspired by late night train rides, neon skylines, and the pulse of the crowd. Technical fabrics meet relaxed silhouettes.
                  </p>
                  <a href="#shop" className="mt-6 inline-block rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black transition">Shop the capsule</a>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1548883354-7622d03aca29?q=80&w=1400&auto=format&fit=crop"
                    alt="Collection preview"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
