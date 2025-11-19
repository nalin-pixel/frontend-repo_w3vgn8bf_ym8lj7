const palette = {
  river: '#0A2A43',
  clay: '#D98C52',
  paper: '#F9F7F2',
  sprout: '#A7DCA5',
  sky: '#CFE7F5',
  bloom: '#E7B7C8',
  slate: '#66727C',
}

export default function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: palette.river }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-serif-display text-2xl text-white">You’re not alone in this.</h3>
            <p className="mt-3 text-white/80">Join a gentle community of parents and guides who believe in child‑centred education.</p>
          </div>
          <div className="md:text-right">
            <a href="#" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white text-[#0A2A43] shadow-sm hover:shadow-md transition-shadow">Get early access<span aria-hidden>→</span></a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/70 flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Home Ed Coach</p>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
