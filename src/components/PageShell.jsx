import Navbar from './Navbar'
import Footer from './Footer'

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
