// import Image from "next/image";
// import Hero from "@/components/home/hero";
// import Gallery from "@/components/gallery";

// export default function Home() {
//   return (
//     <div className="font-sans flex w-full flex-col min-h-screen pt-10 pb-20 gap-16 container mx-auto ">
//       <Hero />
//       <Gallery />
//     </div>
//   );
// }

"use client"

// removed unused imports
import ProjectSlideshow from "@/components/ProjectSlideshow"
import ServicesSection from "@/components/home/ServicesSection"
import Stats from "@/components/home/Stats"
import About from "@/components/home/About"
import FAQ from "@/components/home/FAQ"
import Pricing from "@/components/home/Pricing"
import image_1 from "@/public/images/Obszar kompozycji 1.webp"
import image_2 from "@/public/images/Obszar kompozycji 2.webp"
import image_3 from "@/public/images/Obszar kompozycji 3.webp"
import image_4 from "@/public/images/Obszar kompozycji 4.webp"
import image_5 from "@/public/images/Obszar kompozycji 5.webp"


export default function PhotographerPortfolio() {

  const projects = [
    {
      id: "krolowa_ludzkich_ulic",
      title: "KRÓLOWA ŁÓDZKICH ULIC",
      subtitle: "Click to see more",
      image: image_1,
      link: "/projects/krolowa_ludzkich_ulic",
      isSpecial: true,
    },
    {
      id: "od_lodzi_sie_zaczelo",
      title: "OD ŁODZI SIĘ ZACZĘŁO",
      image: image_2,
      link: "/projects/od_lodzi_sie_zaczelo",
    },
    {
      id: "carskie_wybory",
      title: "CARSKIE WYBORY",
      image: image_3,
      link: "/projects/carskie_wybory",
    },
    {
      id: "diably_i_plonaca_skrzynia",
      title: "DIABŁY I PŁONĄCA SKRZYNIA",
      image: image_4,
      link: "/projects/diably_i_plonaca_skrzynia",
    },
    {
      id: "fabryka_zlota",
      title: "FABRYKA ZŁOTA",
      image: image_5,
      link: "/projects/fabryka_zlota",
    },
  ]

  return (
    <main className="min-h-screen text-black bg-neutral-100/70">

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold mb-8 leading-none">BARTOSZ ŻAK</h1>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="px-3 sm:px-6 py-10 md:py-16">
        <Stats />
      </section>

      {/* Portfolio Slideshow Section */}
      <ProjectSlideshow projects={projects} />

      {/* Services Section */}
      <section id="services" className="px-3 py-10 md:py-16">
        <ServicesSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-10 md:py-16 px-3">
        <About />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-10 md:py-16 px-3">
        <Pricing />
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 md:py-16 px-3">
        <FAQ />
      </section>
    </main>
  )
}
