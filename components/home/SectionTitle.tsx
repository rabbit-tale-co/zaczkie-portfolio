import { cn } from "@/lib/utils";
import SectionIndicator from "./SectionIndicator";
import { TypographyH1 } from "../ui/typography/h1";
import { TypographyMuted } from "../ui/typography/muted";
import { TypographyH3 } from "../ui/typography/h3";
import { motion } from "framer-motion";

export default function SectionTitle({ title, index, sectionTitle, subtitle, className }: { title: string, index: number, sectionTitle: string, subtitle?: string, className?: string }) {
  return (
    <motion.div
      className={cn("mb-16", className)}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ type: "spring", stiffness: 360, damping: 28 }}
    >
      <SectionIndicator index={index} sectionTitle={sectionTitle} />
      <TypographyH1 className="text-left mb-1.5">{title}</TypographyH1>
      <TypographyH3 className="text-left text-muted-foreground">{subtitle}</TypographyH3>
    </motion.div>
  )
}
