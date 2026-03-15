import { useLanguage } from '../context/LanguageContext'

const icons = [
  // Target/chart-bar icon
  <svg key="target" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  // User icon
  <svg key="user" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>,
  // Chart trend icon
  <svg key="chart" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>,
]

export default function ValueProps() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="py-12 flex items-center gap-3">
          <div className="w-8 h-px bg-white"></div>
          <span className="text-white/50 text-sm uppercase tracking-widest font-medium">{t.valueProps.title}</span>
        </div>

        {/* Horizontal bars */}
        <div className="border-t border-white/10">
          {t.valueProps.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 sm:gap-10 py-7 px-0 border-b border-white/10 group hover:bg-white/5 transition-colors cursor-default"
            >
              {/* Number */}
              <div className="text-white/15 text-4xl font-black w-12 shrink-0 select-none group-hover:text-white/25 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="text-white/50 shrink-0 group-hover:text-white/80 transition-colors">
                {icons[i]}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-lg sm:text-xl font-bold">{item.title}</h3>
                <p className="text-white/40 text-sm sm:text-base mt-0.5 group-hover:text-white/60 transition-colors">{item.desc}</p>
              </div>

              {/* Arrow */}
              <div className="text-white/20 text-xl shrink-0 group-hover:text-white/50 transition-colors select-none">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

