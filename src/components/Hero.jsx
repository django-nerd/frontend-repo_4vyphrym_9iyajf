import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-20">
          <div>
            <p className="mb-3 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
              New drop just landed
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Streetwear with a global heartbeat
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Meet global.pulse — a new wave of essentials made for movement, music, and cities that never sleep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white hover:bg-black transition shadow">
                Shop now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#collections" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-gray-900 hover:bg-gray-50 transition">
                Explore collections
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-gradient-to-br from-gray-50 to-white">
              <img
                src="https://images.unsplash.com/photo-1520975938075-74b69acb29ed?q=80&w=1200&auto=format&fit=crop"
                alt="Model wearing global.pulse apparel"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
              <p className="text-sm font-semibold">Signature Hoodie</p>
              <p className="text-sm text-gray-600">Heavyweight, relaxed fit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
