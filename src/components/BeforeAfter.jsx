import { useLanguage } from '../context/LanguageContext'

export default function BeforeAfter() {
  const { t } = useLanguage()

  return (
    <section className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-white"></div>
            <span className="text-white/50 text-sm uppercase tracking-widest font-medium">{t.beforeAfter.label}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white max-w-lg leading-tight">{t.beforeAfter.title}</h2>
          <p className="text-white/40 text-lg mt-4">{t.beforeAfter.subtitle}</p>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-3 gap-px bg-white/10 mb-px">
          <div className="bg-black/50 px-8 py-4"></div>
          <div className="bg-black px-8 py-4 flex items-center gap-3">
            <div className="w-2.5 h-2.5 border border-white/30"></div>
            <span className="text-white/30 text-xs uppercase tracking-widest font-bold">{t.beforeAfter.before}</span>
          </div>
          <div className="bg-white px-8 py-4 flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-black"></div>
            <span className="text-black text-xs uppercase tracking-widest font-bold">{t.beforeAfter.after}</span>
          </div>
        </div>

        {/* Metric rows */}
        <div className="flex flex-col gap-px bg-white/10">
          {t.beforeAfter.metrics.map((metric, i) => (
            <div key={i} className="grid grid-cols-3 gap-px bg-white/10">
              {/* Label cell */}
              <div className="bg-black/50 px-8 py-6 flex items-center">
                <span className="text-white/60 text-sm sm:text-base font-medium">{metric.label}</span>
              </div>
              {/* Before cell */}
              <div className="bg-black px-8 py-6 flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-white/20 shrink-0"></div>
                <span className="text-white/25 text-xl sm:text-2xl font-black line-through decoration-white/20">{metric.before}</span>
              </div>
              {/* After cell */}
              <div className="bg-white px-8 py-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-black shrink-0"></div>
                  <span className="text-black text-xl sm:text-2xl font-black">{metric.after}</span>
                </div>
                <span className="bg-black text-white text-xs font-black px-2 py-1 shrink-0">↑</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-px bg-white/5 border border-white/10 px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/40 text-sm">{t.beforeAfter.subtitle}</p>
          <a
            href="#contact"
            className="bg-white text-black text-sm font-bold px-6 py-2.5 hover:bg-white/90 transition-colors shrink-0"
          >
            {t.hero.cta} →
          </a>
        </div>
      </div>
    </section>
  )
}

