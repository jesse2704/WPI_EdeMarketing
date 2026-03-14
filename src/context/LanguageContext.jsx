import { createContext, useContext, useState } from 'react'
import en from '../translations/en.json'
import nl from '../translations/nl.json'

const translations = { en, nl }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('nl')

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'nl' ? 'en' : 'nl')
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
