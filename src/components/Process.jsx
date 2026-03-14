import { useLanguage } from '../context/LanguageContext'

export default function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="bg-white py-24 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-black"></div>
            <span className="text-black/50 text-sm uppercase tracking-widest font-medium">{t.process.title}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black max-w-lg leading-tight">{t.process.title}</h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10">
          {t.process.steps.map((step, i) => (
            <div key={i} className="bg-white p-8 group hover:bg-black hover:text-white transition-colors">
              <div className="text-6xl font-black text-black/10 group-hover:text-white/10 mb-6 transition-colors">
                {step.number}
              </div>
              <h3 className="text-black text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {step.title}
              </h3>
              <p className="text-black/50 leading-relaxed group-hover:text-white/60 transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
