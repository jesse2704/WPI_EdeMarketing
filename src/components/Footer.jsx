import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { label: t.footer.links.home, href: '#home' },
    { label: t.footer.links.services, href: '#services' },
    { label: t.footer.links.process, href: '#process' },
    { label: t.footer.links.contact, href: '#contact' },
  ]

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-black font-black text-sm">EM</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Ede Marketing</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">{t.footer.slogan}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/50 text-xs uppercase tracking-widest font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white/50 text-xs uppercase tracking-widest font-bold mb-4">Social</h4>
            <div className="flex gap-3">
              {['in', 'f', 'ig', 'x'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white text-xs font-bold transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">{t.footer.copyright}</p>
          <p className="text-white/20 text-xs uppercase tracking-widest font-bold">{t.footer.slogan}</p>
        </div>
      </div>
    </footer>
  )
}
