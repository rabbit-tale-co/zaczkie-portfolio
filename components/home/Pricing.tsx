'use client'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { translations } from '@/lib/translations'
import SectionTitle from './SectionTitle'
// import { TypographyH3 } from '../ui/typography/h3'
import { TypographyP } from '../ui/typography/p'
import PricingTable from './pricing/PricingTable'
import PricingNotes from './pricing/PricingNotes'
import { Button } from '../ui/button'

export default function Pricing() {
  const { language } = useLanguage()
  const data = translations[language]
  const [activeId, setActiveId] = useState<string>(data.pricing.types[0]?.id ?? '')
  const active = useMemo(() => data.pricing.types.find(t => t.id === activeId) ?? data.pricing.types[0], [activeId, data])

  return (
    <div className="mx-auto max-w-7xl">
      <SectionTitle
        title={data.pricing.subtitle}
        index={4}
        sectionTitle={data.pricing.title}
      />

      {/* Tabs / category nav */}
      <div className="flex gap-2 overflow-auto pb-2 p-1">
        {data.pricing.types.map((t) => (
          <Button
            key={t.id}
            variant={activeId === t.id ? "default" : "outline"}
            onClick={() => setActiveId(t.id)}
            className={`${activeId === t.id ? 'text-white' : 'text-neutral-600'}`}
          >
            {t.title}
          </Button>
        ))}
      </div>

      {/* Active category */}
      <div className="rounded-3xl bg-white overflow-hidden mt-4">
        <div className="grid md:grid-cols-[360px_1fr]">
          <div className="h-44 sm:h-56 md:h-full p-2 sm:p-3">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
          </div>
          <div className="p-2 md:p-3">
            {/* <TypographyH3 className="mb-4">{active.title}</TypographyH3> */}

            {/* Samples grid */}
            {active.samples && active.samples.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mb-3">
                {active.samples.map((s, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                    <Image src={s} alt={`${active.title} sample ${i + 1}`} fill className="object-cover" sizes="(max-width:768px) 33vw, 180px" />
                  </div>
                ))}
              </div>
            )}

            {/* Table or notes */}
            {active.matrix ? (
              <PricingTable
                columns={[data.pricing.labels?.style ?? 'Style', ...active.matrix.columns]}
                rows={active.matrix.rows.map(r => [r.label, ...r.values])}
                notes={active.notes}
              />
            ) : active.packages && active.packages.length > 0 ? (
              <PricingTable
                columns={[data.pricing.labels?.package ?? 'Package', data.pricing.labels?.price ?? 'Price']}
                rows={active.packages.map(p => [p.name, p.price])}
                notes={active.notes}
              />
            ) : (
              <PricingNotes notes={active.notes} />
            )}
          </div>
        </div>
      </div>

      {data.pricing.note && (
        <TypographyP className="text-center text-neutral-600 mt-6">{data.pricing.note}</TypographyP>
      )}
    </div>
  )
}
