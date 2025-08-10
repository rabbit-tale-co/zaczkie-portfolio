import { TranslationData } from '../i18n'

export const en: TranslationData = {
  about: {
    title: "About me",
    subtitle: "My experience",
    description: "I am a graduate of Design from Lodz University of Technology. I specialize in graphics, illustration, posters, and photography, combining creativity with functional design.",
    skills: [
      "Artistic abilities",
      "Work in various graphic programs e.g. Adobe, CorelDraw",
      "Proficient operation of photographic equipment",
      "Communication",
      "Work in a team as well as independently"
    ],
    education: [
      {
        school: "Lodz University of Technology",
        field: "Design",
        period: "2021-2025"
      },
      {
        school: "Art High School in Lodz",
        field: "Graphic design",
        period: "2017-2021"
      }
    ],
    skillsTitle: "SKILLS",
    educationTitle: "EDUCATION",
    imageCaption: "Portfolio Image, 2024"
  },
  stats: {
    completedSessions: "Completed Sessions",
    yearsExperience: "Years of Experience",
    happyClients: "Happy Clients",
    description: "I capture memorable <b>moments</b>, create stunning <b>portraits</b>, and tell your story through <b>authentic photography</b> that connects with your audience."
  },
  services: {
    title: "Services",
    subtitle: "Not just services – we deliver growth, clarity, and real impact.",
    items: [
      {
        title: "Brand Strategy & Identity",
        description: "Strategic identities that communicate your story clearly, setting your brand apart and building authentic connections with your audience."
      },
      {
        title: "Website Development",
        description: "User-centric, responsive websites designed for smooth navigation, compelling visuals, and optimized conversion."
      },
      {
        title: "SEO Marketing",
        description: "Targeted, data-driven SEO strategies that boost visibility, attract quality traffic, and position your business ahead of competitors."
      },
      {
        title: "Packaging Design",
        description: "Distinctive, memorable packaging designs crafted to catch attention, communicate product value, and drive consumer action."
      }
    ],
    cta: {
      title: "Ready to Start?",
      button: "Get in Touch"
    }
  },
  pricing: {
    title: "Pricing",
    subtitle: "Flexible packages tailored to content type.",
    labels: { package: "Package", price: "Price", style: "Style" },
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
            { label: "Comic", values: ["$15", "$20", "+$5"] }
          ]
        },
        packages: [
          {
            name: "Flat Color",
            price: "$15",
            features: [
              "1 photo",
              "1 hour session",
              "Online gallery"
            ]
          },
          {
            name: "Simple Shading",
            price: "$20",
            features: [
              "Up to 2 hours session",
              "12 edited photos",
              "Online gallery"
            ]
          },
          {
            name: "Background",
            price: "+$5",
            features: [
              "1 photo",
              "1 hour session",
              "Online gallery"
            ]
          },
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
            { label: "Comic", values: ["$20", "$25", "+$5-15"] }
          ]
        },
        notes: [
          "NSFW +10$",
          "Additional character +50%",
          "Additional elements (wings etc.) +5$"
        ],
        packages: [
          {
            name: "Basic",
            price: "450 PLN",
            features: [
              "Sketch + Color",
              "Simple background"
            ]
          },
          {
            name: "Pro",
            price: "800 PLN",
            features: [
              "Rendered shading",
              "Detailed background"
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
            { label: "Comic", values: ["$30", "$35", "+$10-20"] }
          ]
        },
        notes: [
          "NSFW +10$",
          "Additional character +50%",
          "Additional elements (wings etc.) +5$"
        ],
        packages: [
          {
            name: "Basic",
            price: "700 PLN",
            features: [
              "Sketch + Color",
              "Simple background"
            ]
          },
          {
            name: "Pro",
            price: "1200 PLN",
            features: [
              "Rendered shading",
              "Detailed background"
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
            { label: "Comic", values: ["$20", "$25", "+$5-10", "+$5-10"] }
          ]
        },
        notes: ["+ Printing and shipping costs"],
        packages: [
          {
            name: "Sticker",
            price: "200 PLN",
            features: ["Print-ready PNG", "Outline & shading"]
          },
          {
            name: "Laminate",
            price: "280 PLN",
            features: ["Cut path", "CMYK PDF"]
          }
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
            { label: "Comic", values: ["$20", "$25"] }
          ]
        },
        packages: [
          {
            name: "Single",
            price: "260 PLN",
            features: ["Custom design", "Print-ready"]
          }
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
            { label: "Comic", values: ["$15", "$25"] }
          ]
        },
        packages: [
          {
            name: "Avatar",
            price: "180 PLN",
            features: ["500x500 PNG", "2 colorways"]
          },
          {
            name: "Header",
            price: "350 PLN",
            features: ["3000px wide", "SVG + PNG"]
          }
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
            { label: "Comic", values: ["$12", "$22"] }
          ]
        },
        packages: [
          { name: "Head", price: "120 PLN", features: ["64x64 minimum", "PNG"] },
          { name: "Halfbody", price: "200 PLN", features: ["128x128 minimum", "PNG"] },
          { name: "Fullbody", price: "300 PLN", features: ["256x256 minimum", "PNG"] }
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
          "References are priced individually for the client.",
          "Initial package (2x FullBody, Head) $45"
        ],
        packages: [
          {
            name: "Initial package (2x FullBody, Head)",
            price: "$45",
            features: []
          }
        ]
      }
    ],
    note: "Need something custom? Contact us for a tailored quote."
  },
  faq: {
    title: "FAQ",
    subtitle: "Smarter decisions start with clear answers.",
    items: [
      {
        question: "How long does a typical project take?",
        answer: "It depends on the scope. A landing page might take 2–3 weeks, while a full branding and website package could take 6–10. We'll give you a clear timeline before we begin."
      },
      {
        question: "What if I don't know exactly what I need?",
        answer: "No problem. We'll help you figure it out. Whether it's a quick call or a deeper discovery session, we'll guide you through it."
      },
      {
        question: "Can I request just one service?",
        answer: "Absolutely. You can book a single service or bundle multiple—whatever fits your goals and timeline."
      },
      {
        question: "How do payments work?",
        answer: "For projects, we usually split payments into 2 or 3 milestones. For monthly plans, billing is done upfront each month. Everything is clear and agreed upon before we start."
      },
      {
        question: "What if I need changes after a project ends?",
        answer: "We offer ongoing support, either through our monthly plan or as-needed add-ons. You won't be left hanging."
      }
    ]
  },
  footer: {
    company: {
      label: "Rabbit Tale Studio .co",
      copyright: "All rights reserved."
    },
    navItems: [
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" }
    ],
    socialItems: [
      { label: "Telegram", href: "https://t.me/zaczkiearts" },
      { label: "Instagram", href: "https://www.instagram.com/zaczkie_art" },
      { label: "Fur Affinity", href: "https://www.furaffinity.net/user/zaczkie" },
      { label: "Bsky", href: "https://bsky.app/profile/zaczkie.bsky.social" },
      { label: "Ko-fi", href: "https://ko-fi.com/zaczkie" }
    ],
    legalItems: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" }
    ],
    callToAction: {
      subtitle: "Your brand deserves better.",
      title: "Let's build it right."
    },
    contact: {
      email: {
        label: "Email",
        value: "commision@zaczkie.art"
      },
      phone: {
        label: "Phone",
        value: "(+48) 602 662 099"
      }
    }
  },
  header: {
    navItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Projects", href: "/projects" }
    ],
    cta: "Get in touch"
  }
}
