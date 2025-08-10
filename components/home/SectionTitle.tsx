import { cn } from "@/lib/utils";
import SectionIndicator from "./SectionIndicator";
import { TypographyH1 } from "../ui/typography/h1";
import { TypographyMuted } from "../ui/typography/muted";
import { TypographyH3 } from "../ui/typography/h3";

export default function SectionTitle({ title, index, sectionTitle, subtitle, className }: { title: string, index: number, sectionTitle: string, subtitle?: string, className?: string }) {
  return (
    <div className={cn("mb-16", className)}>
      <SectionIndicator index={index} sectionTitle={sectionTitle} />
      <TypographyH1 className="text-left mb-1.5">{title}</TypographyH1>
      <TypographyH3 className="text-left text-muted-foreground">{subtitle}</TypographyH3>
    </div>
  )
}
