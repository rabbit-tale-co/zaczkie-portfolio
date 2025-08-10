'use client'
import { useLanguage } from "@/hooks/useLanguage"
import { translations } from "@/lib/translations"
import SectionTitle from "./SectionTitle"
import Image from "next/image"
import { TypographyMuted } from "../ui/typography/muted"
import { TypographyP } from "../ui/typography/p"
import { TypographyLead } from "../ui/typography/lead"
import { TypographyList } from "../ui/typography/list"
import { TypographyLarge } from "../ui/typography/large"

export default function About() {
  const { language } = useLanguage()
  const data = translations[language]

  return (
    <div className="bg-black text-white rounded-3xl py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title={data.about.title}
          index={3}
          sectionTitle={language === 'pl' ? 'O mnie' : 'About'} // TODO: translate
          subtitle={data.about.subtitle}
          className="[&>h3>span]:text-white"
        />

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/Obszar kompozycji 1.webp"
                alt="Portfolio Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <TypographyMuted className="text-center mt-4">
              {data.about.imageCaption}
            </TypographyMuted>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Description */}
            <TypographyP>
              {data.about.description}
            </TypographyP>


            {/* Skills and Education Grid */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {/* Skills */}
              <div>
                <TypographyLead className="font-bold mb-4 uppercase !text-blue-400">
                  {data.about.skillsTitle}
                </TypographyLead>
                <TypographyList className="space-y-3">
                  {data.about.skills.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </TypographyList>
              </div>

              {/* Education */}
              <div>
                <TypographyLead className="font-bold mb-4 uppercase !text-blue-400">
                  {data.about.educationTitle}
                </TypographyLead>
                <div className="space-y-4">
                  {data.about.education.map((edu, index) => (
                    <div key={index}>
                      <TypographyLarge>{edu.school}</TypographyLarge>
                      <TypographyP className="text-sm text-gray-300 !mt-0">
                        {edu.field} | {edu.period}
                      </TypographyP>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
