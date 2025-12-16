'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/locales/translations'

type Language = string

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string | string[] | Record<string, any>
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const DEFAULT_LANGUAGE = 'uk'
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)

  useEffect(() => {
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('language') : null
    const browserLang = typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : DEFAULT_LANGUAGE
    const initialLang =
      savedLang ||
      (translations[browserLang] ? browserLang : DEFAULT_LANGUAGE)

    setLanguageState(initialLang)
    document.documentElement.lang = initialLang
    document.documentElement.dir = translations[initialLang]?.rtl ? 'rtl' : 'ltr'
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
    document.documentElement.lang = lang
    document.documentElement.dir = translations[lang]?.rtl ? 'rtl' : 'ltr'
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = translations[language]?.rtl ? 'rtl' : 'ltr'
  }, [language])

  const t = (key: string): string | string[] | Record<string, any> => {
    const keys = key.split('.')
    let value: any = translations[language] || translations['uk'] || translations['en']
    
    for (const k of keys) {
      // Handle array index access (e.g., "items.0.title")
      if (!isNaN(Number(k)) && Array.isArray(value)) {
        value = value[Number(k)]
      } else {
        value = value?.[k]
      }
      
      if (value === undefined) {
        // Fallback to English
        value = translations['uk'] || translations['en']
        for (const k2 of keys) {
          if (!isNaN(Number(k2)) && Array.isArray(value)) {
            value = value[Number(k2)]
          } else {
            value = value?.[k2]
          }
        }
        break
      }
    }
    
    if (value === undefined || value === null) {
      return key
    }
    
    return value
  }

  const dir = translations[language]?.rtl ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
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

