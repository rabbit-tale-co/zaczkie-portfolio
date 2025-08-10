"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import SectionTitle from "./SectionTitle";
import { TypographyP } from "../ui/typography/p";
import { TypographyH3 } from "../ui/typography/h3";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
// const item = {
//   hidden: { y: 14, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 420, damping: 32 } },
// };

export default function ServicesStack() {
  const { language } = useLanguage();
  const data = translations[language];

  return (
    <div>
      <div className="mx-auto max-w-screen-xl pt-6 sm:pt-10 md:pt-16">
        <SectionTitle title={data.services.subtitle} index={1} sectionTitle={data.services.title} />
      </div>

      {/* Cards */}
      <motion.ul
        key={language}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-10% 0px" }}
        className="mx-auto max-w-screen-xl pb-12 sm:pb-16 pt-4 sm:pt-6 flex flex-col gap-3 sm:gap-4"
        aria-label="Services and call to action"
      >
        {data.services.items.map((s) => (
          <motion.li
            key={s.title}
            variants={{
              hidden: { y: 14, opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring" as const,
                  stiffness: 420,
                  damping: 32
                }
              }
            }}
            className="
              rounded-2xl bg-white
            "
          >
            <div
              className="
                grid grid-cols-1 md:grid-cols-2 items-center
                gap-2 sm:gap-3
                px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-9
              "
            >
              <TypographyP className="text-neutral-600 max-w-[100ch] order-2 md:order-1">
                {s.description}
              </TypographyP>
              <TypographyH3 className="order-1 md:order-2 text-left md:text-right">
                {s.title}
              </TypographyH3>
            </div>
          </motion.li>
        ))}

        {/* CTA Row */}
        <motion.li
          variants={{
            hidden: { y: 14, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: { type: "spring" as const, stiffness: 420, damping: 32 }
            }
          }}
          className="rounded-2xl bg-neutral-900 text-white"
        >
          <Link
            href="/contact"
            className="
      group/cta relative block overflow-hidden
      rounded-2xl
      bg-neutral-900 text-white
    "
            aria-label="Get in Touch"
          >
            {/* TOR: jedna animacja przesunięcia */}
            <div
              className="
        flex w-[200%]
        transition-transform duration-500 ease-out
        group-hover/cta:-translate-x-1/2
      "
            >
              {/* LEWA „strona” (start) */}
              <div className="w-1/2 px-6 md:px-10 py-8 md:py-10 flex items-center">
                <TypographyH3 className="text-[clamp(22px,3vw,32px)]">
                  {data.services.cta.title}
                </TypographyH3>
              </div>

              {/* PRAWA „strona” (cel po hover) */}
              <div className="w-1/2 px-6 md:px-10 py-8 md:py-10 flex items-center justify-center gap-4">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-white" aria-hidden />
                <TypographyH3 className="text-[clamp(20px,2.4vw,28px)]">
                  {data.services.cta.button}
                </TypographyH3>
              </div>
            </div>
          </Link>
        </motion.li>
      </motion.ul>
    </div >
  );
}
