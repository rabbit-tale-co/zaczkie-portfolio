'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const NavItem = ({ label, href, className = "text-lg", onClick }: { label: string, href: string, className?: string, onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => {
  return (
    <li>
      <Link href={href} onClick={onClick} className={`flex items-center gap-3 group ${className}`}>
        <div className="text-primary group-hover:translate-x-1.5 transition-all duration-150">
          <p>[</p>
        </div>
        {label}
        <div className="text-primary group-hover:-translate-x-1.5 transition-all duration-150">
          <p>]</p>
        </div>
      </Link>
    </li>
  );
};

export default function Header() {
  const { language } = useLanguage();
  const data = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (href: string, closeMenu?: boolean) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (closeMenu) setMenuOpen(false);
      const el = document.querySelector(href) as HTMLElement | null;
      if (el) {
        const headerOffset = 80; // approximate sticky header height
        const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="p-4 sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">LOGO</h1>
        </Link>

        {/* Desktop navigation (lg+) */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {data.header.navItems.map((item) => (
              <NavItem key={item.href} label={item.label} href={item.href} onClick={handleSmoothScroll(item.href)} />
            ))}
          </ul>
        </nav>

        {/* Right side - CTA Button (md+) */}
        <Button asChild size={"2xl"} className="hidden lg:inline-flex rounded-full">
          <Link href="https://t.me/zaczkie" target="_blank" rel="noopener noreferrer">{data.header.cta}</Link>
        </Button>

        {/* Hamburger (mobile & tablet) using Sheet */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button size={"icon"} variant={"ghost"} aria-label="Open menu" className="lg:hidden">
              <Menu className=" size-6 text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 max-w-[85vw]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-4">
              <ul className="flex flex-col gap-4 ml-5">
                {data.header.navItems.map((item) => (
                  <li key={`s-${item.href}`}>
                    <Link href={item.href} onClick={handleSmoothScroll(item.href, true)} className="text-lg">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 mx-5">
              <Button asChild size="2xl" className="rounded-full w-full" onClick={() => setMenuOpen(false)}>
                <Link href="https://t.me/zaczkie" target="_blank" rel="noopener noreferrer">{data.header.cta}</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </header >
  );
}
