'use client'
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { TypographyP } from "./ui/typography/p";
import { TypographyMuted } from "./ui/typography/muted";
import { TypographyH3 } from "./ui/typography/h3";
import { SolidLogo } from "@/icons/Icons";

const FooterLink = ({ label, href, onClick }: { label: string, href: string, onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => {
  return (
    <Link href={href} onClick={onClick} className="flex items-center gap-2 group text-sm transition-colors">
      <div className="group-hover:translate-x-1 transition-transform duration-150">
        <TypographyP>[</TypographyP>
      </div>

      {label}
      <div className="group-hover:-translate-x-1 transition-transform duration-150">
        <TypographyP>]</TypographyP>
      </div>
    </Link>
  );
};

export default function Footer() {
  const { language } = useLanguage();
  const data = translations[language];

  const handleSmooth = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href) as HTMLElement | null;
      if (el) {
        const headerEl = document.querySelector('header') as HTMLElement | null;
        const headerOffset = headerEl?.getBoundingClientRect().height ?? 80;
        const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
      }
    }
  }

  return (
    <footer className="px-3 pb-3">
      <div className="bg-black text-white rounded-2xl">
        <div className="container mx-auto px-6 sm:px-8 py-10 sm:py-12">
          {/* Top Navigation/Social Links */}
          <div className="flex flex-col gap-7 md:grid md:grid-cols-2 md:gap-8 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-0">
            <div className="flex flex-col items-start gap-3 md:gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:justify-start lg:gap-5">
              {data.footer.navItems.map((item, index) => (
                <FooterLink key={`nav-${index}`} label={item.label} href={item.href} onClick={handleSmooth(item.href)} />
              ))}
            </div>
            <div className="flex flex-col items-start gap-3 md:gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:justify-start lg:gap-5">
              {data.footer.socialItems.map((item, index) => (
                <FooterLink key={`social-${index}`} label={item.label} href={item.href} />
              ))}
            </div>
          </div>

          {/* Central Call to Action */}
          <div className="text-center my-10 sm:my-12 px-1">
            <TypographyMuted className="mb-2">{data.footer.callToAction.subtitle}</TypographyMuted>
            <TypographyH3 className="text-white font-bold">{data.footer.callToAction.title}</TypographyH3>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Row 1: Company | Email/Phone | Legal (on md+) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 items-start lg:items-center gap-6">
              {/* Company */}
              <div className="flex gap-2 items-center">
                <Link href="https://rabbittale.co" className="hover:underline">
                  <SolidLogo className="size-16" />
                </Link>
                <div className="flex flex-col gap-1">
                  <TypographyH3><Link href="https://rabbittale.co" className="hover:underline">{data.footer.company.label}</Link></TypographyH3>
                  <TypographyMuted>{new Date().getFullYear()} @ {data.footer.company.copyright}</TypographyMuted>
                </div>
              </div>

              <div className="hidden lg:flex flex-wrap justify-center gap-5">
                {data.footer.legalItems.map((item, index) => (
                  <FooterLink key={`legal-top-${index}`} label={item.label} href={item.href} onClick={handleSmooth(item.href)} />
                ))}
              </div>

              {/* Right: contact stacked on mobile, inline on tablet+ */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 md:gap-10">
                <div className="flex flex-col">
                  <TypographyMuted>{data.footer.contact.email.label}</TypographyMuted>
                  <Link href={`mailto:${data.footer.contact.email.value}`} className="font-semibold whitespace-nowrap">
                    {data.footer.contact.email.value}
                  </Link>
                </div>

                <div className="flex flex-col md:items-end">
                  <TypographyMuted>{data.footer.contact.phone.label}</TypographyMuted>
                  <Link href={"#"} className="font-semibold whitespace-nowrap">{data.footer.contact.phone.value}</Link>
                </div>
              </div>

            </div>

            {/* Row 2: Legal links (mobile only) */}
            <div className="flex lg:hidden flex-wrap gap-5 justify-center">
              {data.footer.legalItems.map((item, index) => (
                <FooterLink key={`legal-${index}`} label={item.label} href={item.href} onClick={handleSmooth(item.href)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
