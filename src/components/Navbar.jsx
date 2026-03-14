import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.packages, href: '#packages' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <span className="text-black font-black text-sm">EM</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Ede Marketing</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-white/70 hover:text-white text-sm font-medium border border-white/30 hover:border-white px-3 py-1 transition-colors"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>
            <a
              href="#contact"
              className="bg-white text-black text-sm font-bold px-5 py-2 hover:bg-white/90 transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-white/10">
            <button
              onClick={toggleLanguage}
              className="text-white/70 hover:text-white text-sm font-medium border border-white/30 px-3 py-1"
            >
              {language === 'nl' ? 'EN' : 'NL'}
            </button>
            <a
              href="#contact"
              className="bg-white text-black text-sm font-bold px-5 py-2"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
