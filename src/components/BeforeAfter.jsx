import { useLanguage } from '../context/LanguageContext'

export default function BeforeAfter() {
  const { t } = useLanguage()

  return (
    <section className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-white"></div>
            <span className="text-white/50 text-sm uppercase tracking-widest font-medium">{t.beforeAfter.title}</span>
            <div className="w-8 h-px bg-white"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{t.beforeAfter.title}</h2>
          <p className="text-white/50 text-lg">{t.beforeAfter.subtitle}</p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
          {/* Before */}
          <div className="bg-black/80 p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-white/20 border border-white/30"></div>
              <h3 className="text-white/40 text-2xl font-black uppercase tracking-wider">{t.beforeAfter.before}</h3>
            </div>
            <div className="space-y-4">
              {t.beforeAfter.metrics.map((metric, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-white/5">
                  <div className="w-2 h-2 bg-white/20 shrink-0"></div>
                  <span className="text-white/30 text-lg line-through">{metric.before}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-white p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative squares */}
            <div className="absolute top-4 right-4 w-8 h-8 border border-black/10"></div>
            <div className="absolute bottom-4 right-8 w-4 h-4 bg-black/5"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-black"></div>
              <h3 className="text-black text-2xl font-black uppercase tracking-wider">{t.beforeAfter.after}</h3>
            </div>
            <div className="space-y-4">
              {t.beforeAfter.metrics.map((metric, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-black/10">
                  <div className="w-2 h-2 bg-black shrink-0"></div>
                  <span className="text-black text-lg font-semibold">{metric.after}</span>
                  <span className="ml-auto bg-black text-white text-xs font-bold px-2 py-1">↑</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
