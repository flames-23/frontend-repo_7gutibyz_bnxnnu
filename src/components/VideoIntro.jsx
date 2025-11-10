export default function VideoIntro() {
  return (
    <section className="bg-navy text-beige">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Introduzione allo Stoicismo per Leader"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
