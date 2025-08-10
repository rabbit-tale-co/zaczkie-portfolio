'use client'
import { TypographyList } from "@/components/ui/typography/list"

export default function PricingTable({
  columns,
  rows,
  notes,
}: {
  columns: string[]
  rows: string[][]
  notes?: string[]
}) {
  return (
    <div className="rounded-xl border overflow-hidden">
      <table className="w-full text-[13px] table-fixed">
        <thead className="bg-neutral-50 text-neutral-600">
          <tr>
            {columns.map((c, idx) => (
              <th key={idx} className={`font-medium px-3 py-2 ${idx === 0 ? 'text-left w-[35%]' : 'text-right'}`}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, rIdx) => (
            <tr key={rIdx} className={rIdx % 2 ? 'bg-white' : 'bg-neutral-50/40'}>
              {r.map((cell, cIdx) => (
                <td key={cIdx} className={`px-3 py-2 whitespace-nowrap ${cIdx === 0 ? 'font-medium text-left' : 'text-right'}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {notes && notes.length > 0 && (
        <div className="border-t px-3 py-2 text-[12px] text-neutral-600">
          <TypographyList>
            {notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </TypographyList>
        </div>
      )}
    </div>
  )
}
