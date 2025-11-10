import PageShell from '../components/PageShell'

const testimonials = [
  { name: 'Giulia R., CEO', quote: 'Ho ridotto lo stress decisionale del 40% e chiarito le priorità del team.', before: 'Decisioni lente, reattività alta', after: 'Focus chiaro, ritmo sostenibile' },
  { name: 'Marco B., Founder', quote: 'Strumenti pratici, applicabili subito. Impatto concreto su vendite e serenità.', before: 'Pressione continua', after: 'Metodo e lucidità' },
]

export default function Testimonials() {
  return (
    <PageShell>
      <section className="bg-navy text-beige">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h1 className="font-serif text-3xl">Testimonianze</h1>
          <div className="mt-8 grid gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <blockquote className="text-beige/90">“{t.quote}”</blockquote>
                <div className="mt-3 text-xs text-beige/60">{t.name}</div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-md border border-white/10 bg-white/5 p-3"><strong>Prima:</strong> {t.before}</div>
                  <div className="rounded-md border border-white/10 bg-white/5 p-3"><strong>Dopo:</strong> {t.after}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
