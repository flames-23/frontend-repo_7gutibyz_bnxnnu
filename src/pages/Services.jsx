import PageShell from '../components/PageShell'

const products = [
  { title: 'Journal Stoico', desc: 'Strumento quotidiano per applicare i principi con metodo.', price: '€29', color: 'from-blue-600/20 to-blue-600/5', tag: 'Digitale' },
  { title: 'Corso Intensivo', desc: 'Curriculum pratico con esercizi, casi reali e supporto.', price: '€399', color: 'from-green-600/20 to-green-600/5', tag: 'Corso' },
  { title: 'Coaching Premium', desc: 'Percorso 1:1 con processo chiaro: application → discovery call → programma.', price: 'Su richiesta', color: 'from-yellow-700/20 to-yellow-700/5', tag: 'Premium' },
]

export default function Services() {
  return (
    <PageShell>
      <section className="bg-navy text-beige">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-serif text-3xl">Servizi</h1>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.title} className={`rounded-xl border border-white/10 bg-gradient-to-br ${p.color} p-6`}>
                <div className="text-xs uppercase tracking-wider text-beige/60">{p.tag}</div>
                <h3 className="mt-2 font-serif text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-beige/80">{p.desc}</p>
                <div className="mt-4 text-beige font-semibold">{p.price}</div>
                <button className="mt-6 w-full rounded-md bg-gold px-4 py-2 text-navy font-semibold hover:brightness-110">Acquista Ora</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
