import { useLanguage } from '../context/LanguageContext'

const numbers = ['01', '02', '03']

export default function Benefits() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-black"></div>
            <span className="text-black/50 text-sm uppercase tracking-widest font-medium">{t.benefits.title}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black max-w-lg leading-tight">
            {t.benefits.title}
          </h2>
        </div>

        {/* Benefits */}
        <div className="space-y-0">
          {t.benefits.items.map((item, i) => (
            <div key={i} className="flex gap-8 py-10 border-b border-black/10 group">
              <div className="text-black/20 text-5xl font-black w-16 shrink-0 group-hover:text-black/40 transition-colors">
                {numbers[i]}
              </div>
              <div>
                <h3 className="text-black text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-black/60 text-lg leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
