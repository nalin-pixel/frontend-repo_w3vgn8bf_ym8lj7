const palette = {
  river: '#0A2A43',
  clay: '#D98C52',
  paper: '#F9F7F2',
  sprout: '#A7DCA5',
  sky: '#CFE7F5',
  bloom: '#E7B7C8',
  slate: '#66727C',
}

function Watercolor({ className = '', color = '#fff', opacity = 0.4 }) {
  return (
    <div className={`rounded-3xl blur-2xl ${className}`} style={{ background: color, opacity }} />
  )
}

export default function StoryStrip() {
  return (
    <section id="journey" className="relative" style={{ backgroundColor: palette.paper }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Watercolor className="absolute top-8 left-8 w-40 h-40" color={palette.sky} />
        <Watercolor className="absolute bottom-8 right-8 w-56 h-56" color={palette.bloom} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm border border-[#0A2A43]/10 rounded-3xl p-6">
            <p className="text-sm uppercase tracking-wide text-[#66727C]">Scene 1</p>
            <h3 className="mt-2 font-serif-display text-2xl text-[#0A2A43]">Mornings that don’t rush</h3>
            <p className="mt-3 text-[#1A1C1D]/80">Start slow, follow curiosity. A walk, a question, a page in the nature journal. Learning begins gently.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-[#0A2A43]/10 rounded-3xl p-6">
            <p className="text-sm uppercase tracking-wide text-[#66727C]">Scene 2</p>
            <h3 className="mt-2 font-serif-display text-2xl text-[#0A2A43]">Projects that feel alive</h3>
            <p className="mt-3 text-[#1A1C1D]/80">Maps on the table, clay on hands, a book half‑open. We turn sparks into small, doable steps.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-[#0A2A43]/10 rounded-3xl p-6">
            <p className="text-sm uppercase tracking-wide text-[#66727C]">Scene 3</p>
            <h3 className="mt-2 font-serif-display text-2xl text-[#0A2A43]">Evenings with ease</h3>
            <p className="mt-3 text-[#1A1C1D]/80">Reflect without pressure. Notice what mattered. Tomorrow can be lighter because today had meaning.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
