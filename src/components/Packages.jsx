import { useLanguage } from '../context/LanguageContext'

export default function Packages() {
  const { t } = useLanguage()

  return (
    <section id="packages" className="bg-white py-24 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-black"></div>
            <span className="text-black/50 text-sm uppercase tracking-widest font-medium">{t.packages.title}</span>
            <div className="w-8 h-px bg-black"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">{t.packages.title}</h2>
          <p className="text-black/50 text-lg">{t.packages.subtitle}</p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
          {t.packages.items.map((pkg, i) => (
            <div
              key={i}
              className={`p-10 relative ${pkg.featured ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              {pkg.featured && (
                <div className="absolute top-4 right-4 bg-white text-black text-xs font-black px-2 py-1 uppercase tracking-wider">
                  Popular
                </div>
              )}
              <h3 className={`text-2xl font-black mb-2 ${pkg.featured ? 'text-white' : 'text-black'}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-8 ${pkg.featured ? 'text-white/60' : 'text-black/50'}`}>
                {pkg.desc}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 ${pkg.featured ? 'bg-white' : 'bg-black'}`}></div>
                    <span className={`text-sm ${pkg.featured ? 'text-white/80' : 'text-black/70'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="space-y-3">
                <div className={`text-center text-xs font-bold uppercase tracking-wider py-2 ${pkg.featured ? 'text-white/40' : 'text-black/30'}`}>
                  {t.packages.comingSoon}
                </div>
                <a
                  href="#contact"
                  className={`block text-center font-bold text-sm py-3 px-6 transition-colors ${
                    pkg.featured
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-black text-white hover:bg-black/80'
                  }`}
                >
                  {t.packages.contactUs}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
