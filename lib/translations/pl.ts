import { TranslationData } from '../i18n'

export const pl: TranslationData = {
  about: {
    title: "O mnie",
    subtitle: "Moje doświadczenie",
    description: "Jestem absolwentem Wzornictwa na Politechnice Łódzkiej. Specjalizuję się w grafice, ilustracji, plakacie oraz fotografii, łącząc kreatywność z funkcjonalnym designem.",
    skills: [
      "Zdolności artystyczne",
      "Praca w różnych programach graficznych np. Adobe, CorelDraw",
      "Biegła obsługa aparatów fotograficznych",
      "Komunikacja",
      "Praca w zespole jak i samodzielnie"
    ],
    education: [
      {
        school: "Politechnika Łódzka",
        field: "Wzornictwo",
        period: "2021-2025"
      },
      {
        school: "Liceum Plastyczne w Łodzi",
        field: "Projektowanie graficzne",
        period: "2017-2021"
      }
    ],
    skillsTitle: "UMIEJĘTNOŚCI",
    educationTitle: "WYKSZTAŁCENIE",
    imageCaption: "Zdjęcie Portfolio, 2024"
  },
  stats: {
    completedSessions: "Ukończone Sesje",
    yearsExperience: "Lat Doświadczenia",
    happyClients: "Zadowoleni Klienci",
    description: "Uchwytuję niezapomniane <b>chwile</b>, tworzę oszałamiające <b>portrety</b> i opowiadam Twoją historię przez <b>autentyczną fotografię</b>, która łączy się z Twoją publicznością."
  },
  services: {
    title: "Usługi",
    subtitle: "Nie tylko usługi – dostarczamy wzrost, jasność i realny wpływ.",
    items: [
      {
        title: "Strategia Marki & Tożsamość",
        description: "Strategiczne tożsamości, które jasno komunikują Twoją historię, wyróżniają Twoją markę i budują autentyczne połączenia z publicznością."
      },
      {
        title: "Tworzenie Stron Internetowych",
        description: "Strony internetowe zorientowane na użytkownika, responsywne, zaprojektowane dla płynnej nawigacji, przekonujących wizualizacji i zoptymalizowanej konwersji."
      },
      {
        title: "Marketing SEO",
        description: "Ukierunkowane, oparte na danych strategie SEO, które zwiększają widoczność, przyciągają jakościowy ruch i pozycjonują Twoją firmę przed konkurencją."
      },
      {
        title: "Projektowanie Opakowań",
        description: "Charakterystyczne, zapadające w pamięć projekty opakowań stworzone, aby przyciągać uwagę, komunikować wartość produktu i napędzać działania konsumentów."
      }
    ],
    cta: {
      title: "Gotowy na Współpracę?",
      button: "Napisz do mnie!"
    }
  },
  pricing: {
    title: "Cennik",
    subtitle: "Elastyczne pakiety dopasowane do typu realizacji.",
    labels: { package: "Pakiet", price: "Cena", style: "Styl" },
    types: [
      {
        id: "head",
        title: "Head",
        image: "/images/Obszar kompozycji 1.webp",
        samples: [
          "/images/Obszar kompozycji 2.webp",
          "/images/Obszar kompozycji 3.webp",
          "/images/Obszar kompozycji 4.webp"
        ],
        matrix: {
          columns: ["Flat Color", "Simple Shading", "Background"],
          rows: [
            { label: "Comic", values: ["15$", "20$", "+5$"] }
          ]
        },
        packages: [
          {
            name: "Basic",
            price: "300 PLN",
            features: [
              "Szkic + kolor",
              "Proste tlo"
            ]
          },
          {
            name: "Pro",
            price: "600 PLN",
            features: [
              "Cieniowanie renderowane",
              "Detalicze tlo"
            ]
          }
        ]
      },
      {
        id: "halfbody",
        title: "Halfbody",
        image: "/images/pricing/halfbody/cover.jpg",
        samples: [
          "/images/pricing/halfbody/sample-1.jpg",
          "/images/pricing/halfbody/sample-2.jpg"
        ],
        matrix: {
          columns: ["Flat Color", "Simple Shading", "Background"],
          rows: [
            { label: "Comic", values: ["20$", "25$", "+5-15$"] }
          ]
        },
        notes: [
          "NSFW +10$",
          "+50% za dodatkowa postac",
          "Dodatkowe elementy (skrzydla itd.) +5$"
        ],
        packages: [
          {
            name: "Basic",
            price: "450 PLN",
            features: [
              "Szkic + kolor",
              "Proste tlo"
            ]
          },
          {
            name: "Pro",
            price: "800 PLN",
            features: [
              "Cieniowanie renderowane",
              "Detalicze tlo"
            ]
          }
        ]
      },
      {
        id: "fullbody",
        title: "Fullbody",
        image: "/images/pricing/fullbody/cover.jpg",
        samples: [
          "/images/pricing/fullbody/sample-1.jpg",
          "/images/pricing/fullbody/sample-2.jpg"
        ],
        matrix: {
          columns: ["Flat Color", "Simple Shading", "Background"],
          rows: [
            { label: "Comic", values: ["30$", "35$", "+10-20$"] }
          ]
        },
        notes: [
          "NSFW +10$",
          "+50% za dodatkowa postac",
          "Dodatkowe elementy (skrzydla itd.) +5$"
        ],
        packages: [
          {
            name: "Basic",
            price: "700 PLN",
            features: [
              "Szkic + kolor",
              "Proste tlo"
            ]
          },
          {
            name: "Pro",
            price: "1200 PLN",
            features: [
              "Cieniowanie renderowane",
              "Detalicze tlo"
            ]
          }
        ]
      },
      {
        id: "badge",
        title: "Badge",
        image: "/images/pricing/badge/cover.jpg",
        samples: [
          "/images/pricing/badge/sample-1.jpg",
          "/images/pricing/badge/sample-2.jpg"
        ],
        matrix: {
          columns: ["Head", "Halfbody", "Simple Shading", "Background"],
          rows: [
            { label: "Comic", values: ["20$", "25$", "+5-10$", "+5-10$"] }
          ]
        },
        notes: ["+ koszty druku i wysylki"],
        packages: [
          { name: "Naklejka", price: "200 PLN", features: ["PNG do druku", "Obrys + cieniowanie"] },
          { name: "Laminat", price: "280 PLN", features: ["Sciezka ciecia", "CMYK PDF"] }
        ]
      },
      {
        id: "credit-card",
        title: "Credit Card",
        image: "/images/pricing/card/cover.jpg",
        samples: [
          "/images/pricing/card/sample-1.jpg"
        ],
        matrix: {
          columns: ["Head", "Halfbody"],
          rows: [
            { label: "Comic", values: ["20$", "25$"] }
          ]
        },
        packages: [
          { name: "Pojedyncza", price: "260 PLN", features: ["Dedykowany projekt", "Gotowe do druku"] }
        ]
      },
      {
        id: "neon-logo",
        title: "Neon Logo",
        image: "/images/pricing/neon/cover.jpg",
        samples: [
          "/images/pricing/neon/sample-1.jpg",
          "/images/pricing/neon/sample-2.jpg"
        ],
        matrix: {
          columns: ["Head", "Halfbody"],
          rows: [
            { label: "Comic", values: ["15$", "25$"] }
          ]
        },
        packages: [
          { name: "Avatar", price: "180 PLN", features: ["500x500 PNG", "2 warianty kolor."] },
          { name: "Header", price: "350 PLN", features: ["3000px szer.", "SVG + PNG"] }
        ]
      },
      {
        id: "pixel-art",
        title: "Pixel Art",
        image: "/images/pricing/pixel/cover.jpg",
        samples: [
          "/images/pricing/pixel/sample-1.jpg",
          "/images/pricing/pixel/sample-2.jpg",
          "/images/pricing/pixel/sample-3.jpg"
        ],
        matrix: {
          columns: ["Head", "Halfbody"],
          rows: [
            { label: "Comic", values: ["12$", "22$"] }
          ]
        },
        packages: [
          { name: "Head", price: "120 PLN", features: ["min. 64x64", "PNG"] },
          { name: "Halfbody", price: "200 PLN", features: ["min. 128x128", "PNG"] },
          { name: "Fullbody", price: "300 PLN", features: ["min. 256x256", "PNG"] }
        ]
      },
      {
        id: "refsheet",
        title: "Reference Sheet",
        image: "/images/pricing/refsheet/cover.jpg",
        samples: [
          "/images/pricing/refsheet/sample-1.jpg",
          "/images/pricing/refsheet/sample-2.jpg"
        ],
        notes: [
          "Referencje wyceniane indywidualnie.",
        ],
        packages: [
          {
            name: "Pakiet startowy (2x FullBody, Head)",
            price: "45$",
            features: []
          }
        ]
      }
    ],
    note: "Masz inne potrzeby? Napisz po wycene indywidualna."
  },
  faq: {
    title: "FAQ",
    subtitle: "Lepsze decyzje zaczynają się od jasnych odpowiedzi.",
    items: [
      {
        question: "Ile trwa typowy projekt?",
        answer: "To zależy od zakresu. Strona landing page może zająć 2-3 tygodnie, podczas gdy pełny pakiet brandingowy i strona internetowa może zająć 6-10. Przed rozpoczęciem damy Ci jasny harmonogram."
      },
      {
        question: "Co jeśli nie wiem dokładnie czego potrzebuję?",
        answer: "Bez problemu. Pomogę Ci to ustalić. Czy to szybka rozmowa czy głębsza sesja odkrywcza, poprowadzę Cię przez cały proces."
      },
      {
        question: "Czy mogę zamówić tylko jedną usługę?",
        answer: "Absolutnie. Możesz zamówić pojedynczą usługę lub połączyć kilka - cokolwiek pasuje do Twoich celów i harmonogramu."
      },
      {
        question: "Jak działają płatności?",
        answer: "Dla projektów zwykle dzielimy płatności na 2 lub 3 etapy. Dla planów miesięcznych, rozliczenie jest z góry każdego miesiąca. Wszystko jest jasne i uzgodnione przed rozpoczęciem."
      },
      {
        question: "Co jeśli potrzebuję zmian po zakończeniu projektu?",
        answer: "Oferujemy ciągłe wsparcie, czy to przez nasz plan miesięczny czy dodatki na żądanie. Nie zostawię Cię bez pomocy."
      }
    ]
  },
  footer: {
    company: {
      label: "Rabbit Tale Studio .co",
      copyright: "Wszystkie prawa zastrzeżone."
    },
    navItems: [
      { label: "Strona główna", href: "/" },
      { label: "Usługi", href: "#services" },
      { label: "O mnie", href: "#about" },
      { label: "Cennik", href: "#pricing" },
      { label: "FAQ", href: "#faq" }
    ],
    socialItems: [
      { label: "Telegram", href: "https://t.me/zaczkiearts" },
      { label: "Instagram", href: "https://www.instagram.com/zaczkie_art" },
      { label: "Fur Affinity", href: "https://www.furaffinity.net/user/zaczkie" },
      { label: "Bsky", href: "https://bsky.app/profile/zaczkie.bsky.social" },
      { label: "Ko-fi", href: "https://ko-fi.com/zaczkie" }
    ],
    legalItems: [
      { label: "Prywatność", href: "/privacy" },
      { label: "Regulamin", href: "/terms" }
    ],
    callToAction: {
      subtitle: "Twoja marka zasługuje na lepsze.",
      title: "Zbudujmy to dobrze."
    },
    contact: {
      email: {
        label: "Email",
        value: "commision@zaczkie.art"
      },
      phone: {
        label: "Telefon",
        value: "(+48) 602 662 099"
      }
    }
  },
  header: {
    navItems: [
      { label: "Strona główna", href: "/" },
      { label: "Usługi", href: "#services" },
      { label: "O mnie", href: "#about" },
      { label: "Cennik", href: "#pricing" },
      { label: "FAQ", href: "#faq" }
    ],
    cta: "Napisz do mnie"
  }
}
