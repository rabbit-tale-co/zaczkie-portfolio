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
    <div className="overflow-hidden">
      {/* Mobile stacked view */}
      <div className="block sm:hidden">
        <div className="divide-y">
          {rows.map((r, rIdx) => (
            <div key={rIdx} className="p-3">
              <div className="font-medium mb-3">{r[0]}</div>
              <div className="text-sm divide-y divide-neutral-200/60">
                {columns.slice(1).map((col, i) => (
                  <div
                    key={`row-${rIdx}-col-${i}`}
                    className="flex items-center justify-between py-1.5 first:pt-0 last:pb-0"
                  >
                    <div className="text-neutral-700 leading-6">{col}</div>
                    <div className="text-right font-medium tabular-nums leading-6">{r[i + 1]}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto w-full">
        <table className="w-full min-w-[560px] sm:min-w-0 text-[13px] table-fixed">
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
      </div>
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
