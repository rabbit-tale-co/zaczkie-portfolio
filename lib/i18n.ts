export type Language = 'pl' | 'en'

export interface TranslationData {
  about: {
    title: string
    subtitle: string
    description: string
    skills: string[]
    education: {
      school: string
      field: string
      period: string
    }[]
    skillsTitle: string
    educationTitle: string
    imageCaption: string
  }
  stats: {
    completedSessions: string
    yearsExperience: string
    happyClients: string
    description: string
  }
  services: {
    title: string
    subtitle: string
    items: {
      title: string
      description: string
    }[]
    cta: {
      title: string
      button: string
    }
  }
  pricing: {
    title: string
    subtitle: string
    labels?: {
      package: string
      price: string
      style?: string
    }
    types: {
      id: string
      title: string
      image: string
      samples?: string[]
      matrix?: {
        columns: string[]
        rows: { label: string; values: string[] }[]
      }
      notes?: string[]
      packages?: {
        name: string
        price: string
        features: string[]
      }[]
    }[]
    note?: string
  }
  faq: {
    title: string
    subtitle: string
    items: {
      question: string
      answer: string
    }[]
  }
  footer: {
    company: {
      label: string
      copyright: string
    }
    navItems: { label: string; href: string }[]
    socialItems: { label: string; href: string }[]
    legalItems: { label: string; href: string }[]
    callToAction: {
      subtitle: string
      title: string
    }
    contact: {
      email: {
        label: string
        value: string
      }
      phone: {
        label: string
        value: string
      }
    }
  }
  header: {
    navItems: { label: string; href: string }[]
    cta: string
  }
}

export const languages: Language[] = ['pl', 'en']

export const defaultLanguage: Language = 'pl'
