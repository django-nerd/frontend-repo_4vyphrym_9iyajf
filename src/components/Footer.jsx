export default function Footer() {
  return (
    <footer id="about" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-500" />
              <span className="font-extrabold text-gray-900">global<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-cyan-600">.pulse</span></span>
            </div>
            <p className="mt-3 max-w-md text-sm text-gray-600">
              We design everyday essentials for people on the move. Built with premium materials and a focus on comfort and style.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Shop</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#shop" className="hover:text-gray-900">All products</a></li>
              <li><a href="#collections" className="hover:text-gray-900">Collections</a></li>
              <li><a href="#" className="hover:text-gray-900">Lookbook</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} global.pulse. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
