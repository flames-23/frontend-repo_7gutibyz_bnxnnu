import PageShell from '../components/PageShell'

export default function About() {
  return (
    <PageShell>
      <section className="bg-navy text-beige">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="font-serif text-3xl">Chi Siamo</h1>
          <p className="mt-6 text-beige/80">Ho scoperto lo stoicismo durante una fase di forte pressione professionale. Applicando i suoi principi ho trasformato il mio modo di decidere, comunicare e guidare. Oggi aiuto imprenditori e manager a fare lo stesso: ridurre l’ansia decisionale, aumentare la chiarezza e creare risultati misurabili.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-beige">Perché questo progetto</h3>
              <p className="mt-2 text-sm text-beige/80">Missione: rendere lo stoicismo uno strumento operativo per leader moderni.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-beige">Credenziali</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-beige/80 space-y-1">
                <li>10+ anni di leadership in aziende tech</li>
                <li>Formazione in coaching e comunicazione</li>
                <li>Risultati concreti con clienti</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
