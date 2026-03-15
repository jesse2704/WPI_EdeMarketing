import { useLanguage } from '../context/LanguageContext'

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { t } = useLanguage()

  return (
    <section id="reviews" className="bg-white py-24 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-black"></div>
            <span className="text-black/50 text-sm uppercase tracking-widest font-medium">
              {t.reviews.label}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-black max-w-lg leading-tight">
            {t.reviews.title}
          </h2>
        </div>

        {/* Aggregate rating banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16 p-8 border border-black/10 bg-black text-white">
          <div className="shrink-0">
            <div className="text-6xl font-black leading-none">{t.reviews.aggregate.score}</div>
            <div className="mt-2">
              <StarRating />
            </div>
          </div>
          <div className="w-px h-16 bg-white/20 hidden sm:block shrink-0"></div>
          <div>
            <p className="text-white/80 text-lg font-medium">{t.reviews.aggregate.based}</p>
            <div className="flex items-center gap-2 mt-2">
              {/* Google G logo inline SVG */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="white" fillOpacity="0.8"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="white" fillOpacity="0.6"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="white" fillOpacity="0.4"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="white" fillOpacity="0.6"/>
              </svg>
              <span className="text-white/60 text-sm font-medium">Google Reviews</span>
            </div>
          </div>
          <div className="sm:ml-auto">
            <a
              href={t.reviews.aggregate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/30 hover:border-white text-white/70 hover:text-white text-sm font-bold px-5 py-2.5 transition-colors"
            >
              {t.reviews.aggregate.cta} →
            </a>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
          {t.reviews.items.map((review, i) => (
            <div key={i} className="bg-white p-8 group hover:bg-black hover:text-white transition-colors">
              <div className="text-black group-hover:text-white transition-colors mb-4">
                <StarRating />
              </div>
              <blockquote className="text-black/80 group-hover:text-white/80 leading-relaxed mb-6 transition-colors">
                "{review.quote}"
              </blockquote>
              <div className="border-t border-black/10 group-hover:border-white/10 pt-4 transition-colors">
                <div className="font-bold text-black group-hover:text-white text-sm transition-colors">
                  {review.name}
                </div>
                <div className="text-black/40 group-hover:text-white/40 text-xs mt-0.5 transition-colors">
                  {review.business}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
