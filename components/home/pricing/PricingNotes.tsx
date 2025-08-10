'use client'
import { TypographyList } from "@/components/ui/typography/list"

export default function PricingNotes({ notes }: { notes?: string[] }) {
  if (!notes || notes.length === 0) return null
  return (
    <div className="rounded-xl border px-3 py-2 text-[12px] text-neutral-600">
      <TypographyList>
        {notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </TypographyList>
    </div>
  )
}
