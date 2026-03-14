import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center overflow-hidden pt-16">
      {/* Geometric accent shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-white/20"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-white/5 border border-white/10"></div>
      <div className="absolute bottom-20 left-10 w-24 h-1 bg-white/30"></div>
      <div className="absolute bottom-32 left-10 w-16 h-1 bg-white/20"></div>
      <div className="absolute bottom-44 left-10 w-8 h-1 bg-white/10"></div>
      <div className="absolute top-1/3 left-1/2 w-px h-40 bg-white/10"></div>
      <div className="absolute bottom-10 right-20 w-48 h-px bg-white/10"></div>
      <div className="absolute top-24 left-1/4 w-2 h-2 bg-white/40"></div>
      <div className="absolute bottom-40 right-1/4 w-3 h-3 border border-white/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Small tag line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white"></div>
            <img src="/logo-wordmark.svg" alt="Ede Marketing" className="h-5 w-auto opacity-50" />
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-6">
            {t.hero.tagline.split(' ').map((word, i) => (
              <span key={i} className={i % 3 === 2 ? 'block' : 'inline '}>
                {word}{i % 3 !== 2 ? ' ' : ''}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="bg-white text-black font-bold text-base px-8 py-4 hover:bg-white/90 transition-colors inline-block"
            >
              {t.hero.cta}
            </a>
            <a
              href="#services"
              className="text-white/70 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors"
            >
              <span>Learn more</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  )
}
