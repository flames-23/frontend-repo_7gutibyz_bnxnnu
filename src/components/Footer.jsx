import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy text-beige/70">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gold to-terracotta" />
            <span className="font-serif text-xl text-beige">Stoic Leadership</span>
          </div>
          <p className="mt-4 text-sm">Strumenti pratici di saggezza antica per leader moderni.</p>
        </div>
        <div>
          <h4 className="font-semibold text-beige">Pagine</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-beige">Chi Siamo</Link></li>
            <li><Link to="/services" className="hover:text-beige">Servizi</Link></li>
            <li><Link to="/blog" className="hover:text-beige">Blog</Link></li>
            <li><Link to="/testimonials" className="hover:text-beige">Testimonianze</Link></li>
            <li><Link to="/contact" className="hover:text-beige">Contatti</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-beige">Newsletter</h4>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="La tua email" className="flex-1 rounded-md bg-white/5 px-3 py-2 text-sm placeholder:text-beige/50 focus:outline-none border border-white/10" />
            <button className="rounded-md bg-gold px-3 py-2 text-sm font-semibold text-navy hover:brightness-110">Iscriviti</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs">© {new Date().getFullYear()} Stoic Leadership. Tutti i diritti riservati.</div>
    </footer>
  )
}
