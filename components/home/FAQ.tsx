"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import { TypographyLead } from "../ui/typography/lead";
import { TypographyP } from "../ui/typography/p";

export default function FaqLr() {
  const { language } = useLanguage();
  const data = translations[language];

  return (
    <div className="max-w-7xl mx-auto grid gap-6 sm:gap-10 lg:grid-cols-[minmax(320px,520px)_1fr]">
      {/* LEFT: label + big title */}
      <SectionTitle title={data.faq.title} index={5} sectionTitle={data.faq.title} subtitle={data.faq.subtitle} />

      {/* RIGHT: accordion list */}
      <div>
        <Accordion
          type="single"
          collapsible
          className="grid gap-3 sm:gap-4"
        >
          {data.faq.items.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl bg-white border-none"
            >
              {/* Hide shadcn's default chevron, add our Plus that rotates to X */}
              <AccordionTrigger className="px-4 md:px-8 py-5 text-left text-base md:text-lg font-medium hover:no-underline cursor-pointer">
                <TypographyLead>{f.question}</TypographyLead>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-8 pb-5">
                <TypographyP>
                  {f.answer}
                </TypographyP>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>

  );
}
