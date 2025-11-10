import { ShieldCheck, Eye, Target } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Resilienza', desc: 'Mantieni equilibrio nelle turbolenze e rispondi con lucidità.' },
  { icon: Eye, title: 'Chiarezza', desc: 'Separa ciò che controlli da ciò che non controlli e focalizza l’energia.' },
  { icon: Target, title: 'Risultati', desc: 'Sistema pratico per decisioni efficaci e azioni misurabili.' },
]

export default function Benefits() {
  return (
    <section className="bg-navy text-beige">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <Icon className="h-8 w-8 text-gold" />
              <h3 className="mt-4 font-serif text-xl">{title}</h3>
              <p className="mt-2 text-beige/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
