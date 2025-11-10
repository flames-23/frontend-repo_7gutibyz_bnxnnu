import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/80" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-beige"
        >
          Trasforma l'Incertezza in Opportunità con la Saggezza Stoica
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-beige/80"
        >
          Per imprenditori, manager e leader in transizione che cercano chiarezza, resilienza e risultati concreti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-navy font-semibold hover:brightness-110 transition">
            Inizia il Tuo Percorso Stoico
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link to="/blog" className="inline-flex items-center justify-center rounded-md border border-beige/20 px-6 py-3 text-beige/90 hover:bg-white/5 transition">
            Scarica la Guida Gratuita
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="mt-8 text-beige/70"
        >
          Oltre 500 imprenditori hanno trasformato la loro leadership
        </motion.div>
      </div>
    </section>
  )
}
