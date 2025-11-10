import PageShell from '../components/PageShell'

const posts = [
  { title: 'La Dicotomia del Controllo nelle negoziazioni', excerpt: 'Una guida pratica per focalizzarti su ciò che conta davvero.' },
  { title: 'Morning routine stoica per leader', excerpt: 'Tre esercizi per più chiarezza e meno reattività.' },
  { title: 'Decisioni sotto incertezza', excerpt: 'Un framework stoico per muoversi in mercati complessi.' },
]

export default function Blog() {
  return (
    <PageShell>
      <section className="bg-navy text-beige">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h1 className="font-serif text-3xl">Blog & Risorse</h1>
          <div className="mt-8 grid gap-6">
            {posts.map((p) => (
              <article key={p.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="font-serif text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-beige/80">{p.excerpt}</p>
                <button className="mt-4 rounded-md border border-white/20 px-4 py-2 text-sm hover:bg-white/5">Leggi</button>
              </article>
            ))}
          </div>
          <aside className="mt-10 rounded-lg border border-white/10 bg-white/5 p-6">
            <h4 className="font-semibold text-beige">Scarica la Guida Gratuita</h4>
            <p className="mt-2 text-sm text-beige/80">Iscriviti alla newsletter per ricevere risorse pratiche.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="La tua email" className="flex-1 rounded-md bg-white/5 px-3 py-2 text-sm placeholder:text-beige/50 focus:outline-none border border-white/10" />
              <button className="rounded-md bg-gold px-3 py-2 text-sm font-semibold text-navy hover:brightness-110">Scarica</button>
            </form>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
