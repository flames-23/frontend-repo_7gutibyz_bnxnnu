import PageShell from '../components/PageShell'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import VideoIntro from '../components/VideoIntro'

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Benefits />
      <VideoIntro />
    </PageShell>
  )
}
