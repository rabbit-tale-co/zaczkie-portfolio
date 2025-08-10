"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

// ▸ Replace these with your real assets
import slide1 from "@/public/vercel.svg";
import slide2 from "@/public/vercel.svg";
import slide3 from "@/public/vercel.svg";

interface Slide {
  src: StaticImageData;
  alt: string;
}

const defaultSlides: Slide[] = [
  { src: slide1, alt: "Slide 1" },
  { src: slide2, alt: "Slide 2" },
  { src: slide3, alt: "Slide 3" },
];

/**
 * A full‑width carousel that mimics the layout in your reference image:
 * • Three slides visible at once.
 * • The active (center) slide is larger and fully saturated.
 * • Side slides are slightly smaller, desaturated and partially visible.
 * • Navigation arrows float inside the carousel, centred vertically.
 */
export default function Gallery({ images = defaultSlides }: { images?: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const next = useCallback(() => setCurrent((idx) => (idx + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((idx) => (idx - 1 + total) % total), [total]);

  return (
    <section className="relative w-screen overflow-hidden -mx-[calc((100vw-100%)/2)] bg-black py-8">
      {/* Track */}
      <div
        className="flex gap-6 px-6 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(calc(-${current} * (100%/3)))` }}
      >
        {images.map((slide, i) => {
          const isActive = i === current;

          return (
            <figure
              key={i}
              className={`relative basis-1/3 flex-shrink-0 transition-all duration-700 ease-in-out ${isActive ? "scale-100" : "scale-90 grayscale opacity-60"
                }`}
            >
              <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-video">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </figure>
          );
        })}
      </div>

      {/* Navigation */}
      <Button
        size="icon"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-black"
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-black"
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </section>
  );
}
