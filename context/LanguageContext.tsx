'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, defaultLanguage } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  changeLanguage: (newLanguage: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  useEffect(() => {
    // Sprawdz localStorage przy ladowaniu
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['pl', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
