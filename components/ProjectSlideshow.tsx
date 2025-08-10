"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string | StaticImageData;
  link: string;
  isSpecial?: boolean;
}

interface ProjectSlideshowProps {
  projects: ProjectItem[];
  gapPx?: number; // spacing between slides (default 8)
  cardWidth?: number;  // default 820
  cardHeight?: number; // default 460
  autoSlide?: boolean; // default true
  autoSlideInterval?: number; // default 5000ms
}

export default function ProjectSlideshow({
  projects,
  gapPx = 8,
  cardWidth = 820,
  cardHeight = 820,
  autoSlide = true,
  autoSlideInterval = 5000,
}: ProjectSlideshowProps) {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef<number>(0);

  const duplicated = useMemo(() => [...projects, ...projects, ...projects], [projects]);
  const baseCount = projects.length;
  const startIndex = baseCount;

  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(startIndex);
  const [isAnimating, setAnimating] = useState(false);

  // Update ref when index changes
  useEffect(() => {
    currentIndexRef.current = index;
  }, [index]);

  // Measure container so we can center the 820px card and let it overflow.
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const measure = () => {
      setContainerWidth(containerRef.current?.clientWidth ?? 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [mounted]);

  // Responsive card size: clamp to container on mobile/tablet while keeping aspect ratio
  const effectiveCardWidth = useMemo(() => {
    if (containerWidth === 0) return cardWidth;
    // leave at designed width on large screens; on small screens leave 32px breathing space
    const maxAvailable = Math.max(containerWidth - 32, 240);
    return Math.min(cardWidth, maxAvailable);
  }, [containerWidth, cardWidth]);

  const effectiveCardHeight = useMemo(() => {
    // scale height proportionally to width
    return Math.round(cardHeight * (effectiveCardWidth / cardWidth));
  }, [cardHeight, cardWidth, effectiveCardWidth]);

  const stride = effectiveCardWidth + gapPx;
  const centerOffset = (containerWidth - effectiveCardWidth) / 2; // can be negative on small screens

  const applyTransform = useCallback((i: number, immediate = false) => {
    const track = trackRef.current;
    if (!track) return;
    const x = centerOffset - i * stride; // center selected slide; allow overflow
    track.style.transition = immediate ? "none" : "transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    track.style.transform = `translateX(${x}px)`;
  }, [centerOffset, stride]);

  useEffect(() => {
    applyTransform(index, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth, effectiveCardWidth]);

  const handleTransitionEnd = () => {
    let i = index;
    let snap = false;
    if (i >= startIndex + baseCount) {
      i -= baseCount;
      snap = true;
    } else if (i < startIndex) {
      i += baseCount;
      snap = true;
    }
    if (snap) {
      setAnimating(false);
      setIndex(i);
      applyTransform(i, true);
    } else {
      setAnimating(false);
    }
  };

  // Auto slide with reset functionality
  const startAutoSlide = useCallback(() => {
    if (!autoSlide || baseCount === 0) return;

    // Clear existing interval
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }

    // Start new interval
    autoSlideRef.current = setInterval(() => {
      if (!isAnimating) {
        const i = currentIndexRef.current + 1;
        setIndex(i);
        setAnimating(true);
        applyTransform(i);
      }
    }, autoSlideInterval);
  }, [autoSlide, autoSlideInterval, baseCount, isAnimating, applyTransform]);

  const resetAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }

    // Start new interval after a short delay to ensure state is updated
    setTimeout(() => {
      if (autoSlide && baseCount > 0) {
        autoSlideRef.current = setInterval(() => {
          if (!isAnimating) {
            const i = currentIndexRef.current + 1;
            setIndex(i);
            setAnimating(true);
            applyTransform(i);
          }
        }, autoSlideInterval);
      }
    }, 100);
  }, [autoSlide, autoSlideInterval, baseCount, isAnimating, applyTransform]);

  useEffect(() => {
    if (!mounted) return;
    startAutoSlide();
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [autoSlide, autoSlideInterval, baseCount, mounted, startAutoSlide]); // Usuniete isAnimating i index z dependencies

  const next = useCallback(() => {
    if (isAnimating || baseCount === 0) return;
    setAnimating(true);
    const i = currentIndexRef.current + 1;
    setIndex(i);
    applyTransform(i);
    resetAutoSlide();
  }, [isAnimating, baseCount, applyTransform, resetAutoSlide]);

  const prev = useCallback(() => {
    if (isAnimating || baseCount === 0) return;
    setAnimating(true);
    const i = currentIndexRef.current - 1;
    setIndex(i);
    applyTransform(i);
    resetAutoSlide();
  }, [isAnimating, baseCount, applyTransform, resetAutoSlide]);

  // initial center on middle batch
  useEffect(() => {
    setIndex(startIndex);
    applyTransform(startIndex, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCount]);

  // Only add side padding when there is room; otherwise 0 so the card overflows.
  const sidePad = Math.max(centerOffset, 0);

  // Calculate current project index (0-based)
  const currentProjectIndex = (index - startIndex + baseCount) % baseCount;

  if (!mounted) {
    return (
      <section
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{
          height: `${effectiveCardHeight}px`,
        }}
      >
        <div className="w-full h-full bg-gray-100 animate-pulse rounded-2xl" />
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        height: `${effectiveCardHeight}px`,
        paddingLeft: `${sidePad}px`,
        paddingRight: `${sidePad}px`,
      }}
    >
      <div className="absolute inset-0" style={{ perspective: "1200px" }}>
        <ul
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex h-full items-center list-none m-0 p-0"
          style={{ gap: `${gapPx}px`, willChange: "transform" }}
        >
          {duplicated.map((p, i) => {
            const isCenter = i === index;
            // const projectIndex = (i - startIndex + baseCount) % baseCount;

            return (
              <li
                key={`${p.id}-${i}`}
                className="flex-none rounded-2xl overflow-hidden relative"
                style={{ width: `${effectiveCardWidth}px`, height: `${effectiveCardHeight}px` }}
              >
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                  {/* <Link href={p.link} className="block w-full h-full relative group"> */}
                  <div className="absolute inset-0">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes={`${effectiveCardWidth}px`}
                      priority={i === index}
                    />
                  </div>

                  {isCenter ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 transition-all duration-500 ease-out" />
                      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">{p.title}</h2>
                        <p className="text-sm sm:text-lg text-gray-200">{p.subtitle}</p>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500 ease-out">
                      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
                        <h3 className="text-xl sm:text-2xl font-bold mb-1">{p.title}</h3>
                        {p.subtitle && <p className="text-gray-200 text-xs sm:text-base">{p.subtitle}</p>}
                      </div>
                    </div>
                  )}
                  {/* </Link> */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Controls */}
      <Button
        onClick={prev}
        disabled={isAnimating}
        variant="outline"
        size="icon"
        aria-label="Previous"
        className="absolute top-1/2 -translate-y-1/2 left-8 sm:left-6 z-20"
      >
        <ChevronLeftIcon className="size-6 text-white" />
      </Button>
      <Button
        onClick={next}
        disabled={isAnimating}
        variant="outline"
        size="icon"
        aria-label="Next"
        className="absolute top-1/2 -translate-y-1/2 right-8 sm:right-6 z-20"
      >
        <ChevronRightIcon className="size-6 text-white" />
      </Button>

      {/* Indicator */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-white text-xs sm:text-sm font-medium">
          {currentProjectIndex + 1} / {baseCount}
        </div>
      </div>
    </section>
  );
}
