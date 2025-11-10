import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Chi Siamo' },
  { to: '/services', label: 'Servizi' },
  { to: '/blog', label: 'Blog' },
  { to: '/testimonials', label: 'Testimonianze' },
  { to: '/contact', label: 'Contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-navy/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gold to-terracotta"></div>
            <span className="font-serif text-xl text-beige">Stoic Leadership</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-beige' : 'text-beige/70 hover:text-beige'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy shadow-sm hover:brightness-110 transition"
            >
              Inizia il Percorso
            </Link>
          </nav>

          <button
            className="md:hidden text-beige"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded px-3 py-2 text-sm ${isActive ? 'bg-white/5 text-beige' : 'text-beige/80 hover:text-beige hover:bg-white/5'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy shadow-sm hover:brightness-110 transition"
              >
                Inizia il Percorso
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
