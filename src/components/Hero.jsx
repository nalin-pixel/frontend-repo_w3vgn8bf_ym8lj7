import { motion } from 'framer-motion'

const palette = {
  river: '#0A2A43',
  clay: '#D98C52',
  paper: '#F9F7F2',
  sprout: '#A7DCA5',
  sky: '#CFE7F5',
  bloom: '#E7B7C8',
  slate: '#66727C',
}

function OrganicLeaf({ className = '', color = palette.sprout }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M54 10C36 12 10 26 10 46c0 6 4 8 8 8 18 0 30-18 36-44z" fill={color} opacity="0.35"/>
      <path d="M20 54c12-6 26-22 32-38" stroke={palette.river} strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function Constellation({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g stroke="#1A1C1D" strokeOpacity="0.2">
        <circle cx="10" cy="30" r="2" fill="#1A1C1D"/>
        <circle cx="40" cy="12" r="2" fill="#1A1C1D"/>
        <circle cx="70" cy="28" r="2" fill="#1A1C1D"/>
        <circle cx="100" cy="18" r="2" fill="#1A1C1D"/>
        <path d="M10 30 L40 12 L70 28 L100 18"/>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${palette.paper}, #FFFFFF)` }}>
      {/* watercolor backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-60" style={{ background: `radial-gradient(ellipse at center, ${palette.sky}, transparent 60%)` }} />
        <div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-60" style={{ background: `radial-gradient(ellipse at center, ${palette.bloom}, transparent 60%)` }} />
        <div className="absolute top-40 -right-10 w-40 h-40">
          <Constellation className="w-full h-full" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif-display text-4xl sm:text-5xl md:text-6xl leading-tight text-[#0A2A43]"
            >
              Gentle guidance for your child’s unique learning journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-6 text-lg leading-relaxed text-[#1A1C1D]/80"
            >
              Home Ed Coach helps you design a personalised, child‑centred plan — with calm expertise, human warmth and practical structure that never overwhelms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <a href="#journey" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: palette.river }}>
                Start your journey
                <span aria-hidden>→</span>
              </a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[#0A2A43] bg-[#CFE7F5]/50 hover:bg-[#CFE7F5]/70 transition-colors">
                See how it feels
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-sm text-[#66727C]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: palette.sprout }} />
                Child‑centred
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: palette.clay }} />
                Calm and practical
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: palette.bloom }} />
                SEN‑aware
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative bg-white rounded-3xl shadow-xl p-6 pt-8 border border-[#0A2A43]/5"
            >
              {/* handcrafted vignette */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rotate-[-6deg]">
                <OrganicLeaf className="w-full h-full" />
              </div>
              <div className="absolute -bottom-8 -right-6 w-24 h-24 rotate-[12deg]" aria-hidden>
                <OrganicLeaf className="w-full h-full" color={palette.bloom} />
              </div>

              <div className="bg-[#F9F7F2] rounded-2xl p-5 border border-[#0A2A43]/5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: palette.sky }}>
                    <span className="text-[#0A2A43] text-xl" aria-hidden>★</span>
                  </div>
                  <div>
                    <h3 className="font-serif-display text-2xl text-[#0A2A43]">A week that feels like you</h3>
                    <p className="mt-2 text-[#1A1C1D]/80 leading-relaxed">Sketch gentle rhythms, choose nourishing resources, and track small wins — without turning home into school.</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl px-3 py-2 bg-white border border-[#0A2A43]/10">Nature journaling</div>
                  <div className="rounded-xl px-3 py-2 bg-white border border-[#0A2A43]/10">Read‑aloud moments</div>
                  <div className="rounded-xl px-3 py-2 bg-white border border-[#0A2A43]/10">Maths through play</div>
                  <div className="rounded-xl px-3 py-2 bg-white border border-[#0A2A43]/10">Calm project time</div>
                </div>
              </div>

              <p className="mt-6 text-sm text-[#66727C]">“You’re doing the right thing — let’s make it easier.”</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* gentle divider */}
      <div className="relative h-24" aria-hidden>
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 120">
          <path d="M0 40 C 240 120, 480 0, 720 60 S 1200 120, 1440 40 L1440 120 L0 120 Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </section>
  )
}
