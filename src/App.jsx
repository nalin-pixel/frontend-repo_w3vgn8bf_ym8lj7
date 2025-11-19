import Hero from './components/Hero'
import Features from './components/Features'
import StoryStrip from './components/StoryStrip'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* custom font classes */}
      <style>{`
        .font-serif-display { font-family: Georgia, 'Times New Roman', serif; letter-spacing: -0.01em; }
      `}</style>

      {/* top notice bar with warm clay */}
      <div className="text-center text-sm py-2" style={{ backgroundColor: '#D98C52', color: '#0A2A43' }}>
        Home Ed Coach — calm guidance for personalised learning
      </div>

      <Hero />
      <Features />
      <StoryStrip />

      {/* reassurance block */}
      <section className="relative bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif-display text-3xl text-[#0A2A43]">Calm, human, and grounded in real education</h2>
          <p className="mt-4 text-lg text-[#1A1C1D]/80 max-w-3xl mx-auto">We’re educators, parents and mentors. We pair warm expertise with tools that feel handcrafted — never corporate — so your family’s learning can flourish.</p>
          <div className="mt-8 inline-flex gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CFE7F5]/60 text-[#0A2A43]">SEN‑aware</span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A7DCA5]/60 text-[#0A2A43]">Child‑led</span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E7B7C8]/60 text-[#0A2A43]">Gently structured</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
