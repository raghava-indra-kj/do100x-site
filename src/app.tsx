import { AppBar } from './ui/components/app-bar'
import { Hero } from './ui/components/hero'
import { Products } from './ui/components/products'
import { Footer } from './ui/components/footer'

export default function App() {
  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface-canvas)' }}>
      <AppBar />
      <main style={{ flex: 1 }}>
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  )
}
