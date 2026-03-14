import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission UI only - no actual sending
    alert('Message sent! (UI demo)')
  }

  return (
    <section id="contact" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-white"></div>
            <span className="text-white/50 text-sm uppercase tracking-widest font-medium">{t.contact.title}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{t.contact.title}</h2>
          <p className="text-white/50 text-lg">{t.contact.subtitle}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">{t.contact.name}</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact.namePlaceholder}
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 focus:outline-none focus:border-white/50 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">{t.contact.email}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact.emailPlaceholder}
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 focus:outline-none focus:border-white/50 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">{t.contact.phone}</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder={t.contact.phonePlaceholder}
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">{t.contact.message}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t.contact.messagePlaceholder}
              rows={5}
              className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 focus:outline-none focus:border-white/50 transition-colors resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-bold text-base py-4 hover:bg-white/90 transition-colors"
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  )
}
