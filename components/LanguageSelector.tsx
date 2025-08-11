'use client'
import { useLanguage } from "@/hooks/useLanguage"
import { Button } from "./ui/button"

interface LanguageSelectorProps {
  className?: string
  variant?: 'default' | 'floating'
}

export default function LanguageSelector({ className = "", variant = 'default' }: LanguageSelectorProps) {
  const { language, changeLanguage } = useLanguage()

  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <div className="flex gap-1 bg-black/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/10">
          <Button
            variant={language === 'pl' ? 'light' : 'ghost'}
            size={'icon'}
            onClick={() => changeLanguage('pl')}
            className={language !== 'pl' ? 'text-white' : ''}
          >
            PL
          </Button>
          <Button
            variant={language === 'en' ? 'light' : 'ghost'}
            size={'icon'}
            onClick={() => changeLanguage('en')}
            className={language !== 'en' ? 'text-white' : ''}
          >
            EN
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex gap-1 bg-gray-800 rounded-lg p-1 ${className}`}>
      <Button
        onClick={() => changeLanguage('pl')}
        variant={language === 'pl' ? 'light' : 'ghost'}
        size={'icon'}
        className={language !== 'pl' ? 'text-white' : ''}
      >
        PL
      </Button>
      <Button
        onClick={() => changeLanguage('en')}
        variant={language === 'en' ? 'light' : 'ghost'}
        size={'icon'}
        className={language !== 'en' ? 'text-white' : ''}
      >
        EN
      </Button>
    </div>
  )
}
