import { cn } from "@/lib/utils";
import { TypographyMuted } from "../ui/typography/muted";
import { TypographyP } from "../ui/typography/p";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function Stats({ className, descriptionClass }: { className?: string, descriptionClass?: string }) {
  const { language } = useLanguage();
  const data = translations[language];

  return (
    <div className={cn("max-w-7xl mx-auto", className)}>
      <div className="grid gap-8 items-center md:grid-cols-2 md:gap-12">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          <div>
            <h4 className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">500+</h4>
            <TypographyMuted>{data.stats.completedSessions}</TypographyMuted>
          </div>
          <div>
            <h4 className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">8+</h4>
            <TypographyMuted>{data.stats.yearsExperience}</TypographyMuted>
          </div>
          <div>
            <h4 className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">100%</h4>
            <TypographyMuted>{data.stats.happyClients}</TypographyMuted>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4 sm:space-y-6 px-1">
          <TypographyP
            className={cn("text-base sm:text-lg leading-relaxed text-muted-foreground", descriptionClass)}
            dangerouslySetInnerHTML={{ __html: data.stats.description }}
          />
        </div>
      </div>
    </div>
  )
}
