const palette = {
  river: '#0A2A43',
  clay: '#D98C52',
  paper: '#F9F7F2',
  sprout: '#A7DCA5',
  sky: '#CFE7F5',
  bloom: '#E7B7C8',
  slate: '#66727C',
}

function SeedIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M22 10c14 0 32 10 32 26 0 10-8 18-18 18C20 54 10 40 10 28 10 18 14 10 22 10z" fill={palette.sprout} opacity="0.5"/>
      <path d="M24 22c4 8 6 16-2 24" stroke={palette.river} strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function PathIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M8 50c12-8 20-10 26-10 8 0 14 2 22 10" stroke={palette.clay} strokeWidth="4" strokeLinecap="round"/>
      <circle cx="10" cy="50" r="3" fill={palette.clay}/>
      <circle cx="54" cy="50" r="3" fill={palette.clay}/>
    </svg>
  )
}

function StarMapIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="14" cy="14" r="2" fill="#1A1C1D" opacity="0.3"/>
      <circle cx="30" cy="8" r="2" fill="#1A1C1D" opacity="0.3"/>
      <circle cx="46" cy="20" r="2" fill="#1A1C1D" opacity="0.3"/>
      <path d="M14 14L30 8L46 20" stroke="#1A1C1D" opacity="0.2"/>
      <rect x="6" y="6" width="52" height="52" rx="8" stroke={palette.slate} opacity="0.3"/>
    </svg>
  )
}

export default function Features() {
  return (
    <section id="how" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <SeedIcon className="w-12 h-12" />
            <h3 className="mt-5 font-serif-display text-2xl text-[#0A2A43]">Start with what’s real</h3>
            <p className="mt-3 text-[#1A1C1D]/80 leading-relaxed">We begin with your child — their sparks, sensitivities and rhythms — and build outward. No rigid curriculum. Just intentional structure that fits your life.</p>
          </div>
          <div>
            <PathIcon className="w-12 h-12" />
            <h3 className="mt-5 font-serif-display text-2xl text-[#0A2A43]">Make a gentle path</h3>
            <p className="mt-3 text-[#1A1C1D]/80 leading-relaxed">Craft a weekly cadence with room to breathe. Choose nourishing resources, set kind goals, and keep track of small wins without pressure.</p>
          </div>
          <div>
            <StarMapIcon className="w-12 h-12" />
            <h3 className="mt-5 font-serif-display text-2xl text-[#0A2A43]">See the bigger picture</h3>
            <p className="mt-3 text-[#1A1C1D]/80 leading-relaxed">Understand progression without comparison. Celebrate growth over checklists and let curiosity lead the way.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
