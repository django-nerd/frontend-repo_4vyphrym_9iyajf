import { useState } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-500" />
            <a href="#" className="text-xl font-extrabold tracking-tight">
              <span className="text-gray-900">global</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-cyan-600">.pulse</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#shop" className="hover:text-gray-900">Shop</a>
            <a href="#collections" className="hover:text-gray-900">Collections</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="relative inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition bg-white">
              <ShoppingBag className="h-4 w-4" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-fuchsia-600 px-1 text-xs font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-gray-700">
              <a href="#shop" className="px-2 py-2 rounded-md hover:bg-gray-50">Shop</a>
              <a href="#collections" className="px-2 py-2 rounded-md hover:bg-gray-50">Collections</a>
              <a href="#about" className="px-2 py-2 rounded-md hover:bg-gray-50">About</a>
              <a href="#contact" className="px-2 py-2 rounded-md hover:bg-gray-50">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
