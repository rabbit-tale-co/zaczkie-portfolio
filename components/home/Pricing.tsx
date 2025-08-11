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
import { motion } from 'framer-motion'

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
      <motion.div className="flex gap-2 overflow-auto pb-2 p-1" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}>
        {data.pricing.types.map((t) => (
          <motion.div key={t.id} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <Button
              variant={activeId === t.id ? "default" : "outline"}
              onClick={() => setActiveId(t.id)}
              className={`${activeId === t.id ? 'text-white' : 'text-neutral-600'}`}
            >
              {t.title}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Active category */}
      <motion.div className="rounded-3xl bg-white overflow-hidden mt-4" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 320, damping: 28 }}>
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
              <motion.div className="grid grid-cols-3 gap-2 mb-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}>
                {active.samples.map((s, i) => (
                  <motion.div key={i} className="relative aspect-square rounded-xl overflow-hidden" variants={{ hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1 } }}>
                    <Image src={s} alt={`${active.title} sample ${i + 1}`} fill className="object-cover" sizes="(max-width:768px) 33vw, 180px" />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Table or notes */}
            {active.matrix ? (
              <div className="rounded-2xl border">

                <PricingTable
                  columns={[data.pricing.labels?.style ?? 'Style', ...active.matrix.columns]}
                  rows={active.matrix.rows.map(r => [r.label, ...r.values])}
                  notes={active.notes}
                />

              </div>
            ) : active.packages && active.packages.length > 0 ? (
              <div className="rounded-2xl border">
                <div className="p-2 sm:p-3">
                  <PricingTable
                    columns={[data.pricing.labels?.package ?? 'Package', data.pricing.labels?.price ?? 'Price']}
                    rows={active.packages.map(p => [p.name, p.price])}
                    notes={active.notes}
                  />
                </div>
              </div>
            ) : (
              <PricingNotes notes={active.notes} />
            )}
          </div>
        </div>
      </motion.div>

      {data.pricing.note && (
        <TypographyP className="text-center text-neutral-600 mt-6">{data.pricing.note}</TypographyP>
      )}
    </div>
  )
}
