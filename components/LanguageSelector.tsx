'use client'
import { useLanguage } from "@/hooks/useLanguage"

interface LanguageSelectorProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'floating'
}

export default function LanguageSelector({ className = "", size = 'md', variant = 'default' }: LanguageSelectorProps) {
  const { language, changeLanguage } = useLanguage()

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <div className="flex bg-black/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/10">
          <button
            onClick={() => changeLanguage('pl')}
            className={`rounded-full transition-all duration-200 ${sizeClasses[size]} ${language === 'pl'
              ? 'bg-white text-black shadow-md'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
          >
            PL
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`rounded-full transition-all duration-200 ${sizeClasses[size]} ${language === 'en'
              ? 'bg-white text-black shadow-md'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
          >
            EN
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex bg-gray-800 rounded-lg p-1 ${className}`}>
      <button
        onClick={() => changeLanguage('pl')}
        className={`rounded-md transition-colors ${sizeClasses[size]} ${language === 'pl'
          ? 'bg-white text-black'
          : 'text-gray-300 hover:text-white'
          }`}
      >
        PL
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`rounded-md transition-colors ${sizeClasses[size]} ${language === 'en'
          ? 'bg-white text-black'
          : 'text-gray-300 hover:text-white'
          }`}
      >
        EN
      </button>
    </div>
  )
}
