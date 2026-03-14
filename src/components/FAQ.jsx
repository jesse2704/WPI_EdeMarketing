import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full text-left py-6 flex items-center justify-between gap-4 group"
        onClick={onToggle}
      >
        <span className="text-white text-lg font-medium group-hover:text-white/80 transition-colors">
          {question}
        </span>
        <span className={`text-white/50 text-2xl transition-transform shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 text-white/50 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-white"></div>
            <span className="text-white/50 text-sm uppercase tracking-widest font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">{t.faq.title}</h2>
        </div>

        {/* Accordion */}
        <div>
          {t.faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
