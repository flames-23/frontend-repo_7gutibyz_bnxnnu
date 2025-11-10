import PageShell from '../components/PageShell'

export default function Contact() {
  return (
    <PageShell>
      <section className="bg-navy text-beige">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="font-serif text-3xl">Contatti & Prenota</h1>
          <form className="mt-8 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm text-beige/80">Nome</label>
              <input className="rounded-md bg-white/5 px-3 py-2 border border-white/10 focus:outline-none" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-beige/80">Email</label>
              <input type="email" className="rounded-md bg-white/5 px-3 py-2 border border-white/10 focus:outline-none" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-beige/80">Telefono (opzionale)</label>
              <input className="rounded-md bg-white/5 px-3 py-2 border border-white/10 focus:outline-none" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-beige/80">Di cosa hai bisogno?</label>
              <textarea rows="4" className="rounded-md bg-white/5 px-3 py-2 border border-white/10 focus:outline-none"></textarea>
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-beige/80">Budget approssimativo</label>
              <select className="rounded-md bg-white/5 px-3 py-2 border border-white/10 focus:outline-none">
                <option>Sotto €1.000</option>
                <option>€1.000 - €5.000</option>
                <option>Oltre €5.000</option>
              </select>
            </div>
            <button className="mt-2 rounded-md bg-gold px-4 py-2 text-navy font-semibold hover:brightness-110">Invia</button>
          </form>

          <div className="mt-10 rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="font-semibold text-beige">Prenota una discovery call</h2>
            <p className="mt-2 text-sm text-beige/80">Scegli un orario direttamente dal calendario.</p>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-md border border-white/10">
              <iframe src="https://calendly.com/" className="h-full w-full" title="Calendly" />
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold text-beige">FAQ</h2>
            <div className="mt-4 grid gap-3 text-sm text-beige/80">
              <details className="rounded-md border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer text-beige">Devo conoscere lo stoicismo?</summary>
                <p className="mt-2">No, partiamo dai principi fondamentali e li applichiamo subito al tuo contesto.</p>
              </details>
              <details className="rounded-md border border-white/10 bg-white/5 p-4">
                <summary className="cursor-pointer text-beige">Quanto tempo richiede?</summary>
                <p className="mt-2">Dipende dall’offerta scelta: da 30 minuti per una call a 6-8 settimane per un percorso.</p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
