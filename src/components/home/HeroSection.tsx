import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FloralSprig, EstSeal } from '@/components/common/BotanicalDecor';
import { siteImages } from '@/lib/images';

export default function HeroSection() {
  return (
    <section className="relative pt-6 pb-16 lg:py-20 overflow-hidden bg-[#FFF7E6] w-full max-w-full">
      {/* Background organic wash */}
      <div className="hidden sm:block absolute top-0 right-0 w-[550px] h-[550px] bg-[#F7C8D3]/20 rounded-full blur-3xl pointer-events-none -mr-32 -mt-24" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#A8B58A]/15 rounded-full blur-3xl pointer-events-none -ml-28 -mb-28" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A8B58A]/20 text-[#6D7F49] text-[11px] font-semibold tracking-[0.2em] uppercase">
              <span>PREMIUM PHOTO ALBUMS</span>
            </div>

            <h1 className="font-editorial text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2D3A47] leading-[1.15] break-words">
              Preserve Your Special <span className="inline-block">Moments</span>{' '}
              <span className="font-script-accent font-normal italic text-[#B46A72] block sm:inline">
                for a Lifetime
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#2D3A47]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Custom albums, photo books and professional album designing for life’s most precious stories. Hand-bound in Mumbai with archival craftsmanship.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href="/our-products"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#2D3A47] hover:bg-[#1E2730] text-white text-xs sm:text-sm font-medium tracking-wide rounded-full shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/album-designing"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#FFFDF9] hover:bg-[#FFF7E6] text-[#2D3A47] border border-[#2D3A47]/20 text-xs sm:text-sm font-medium rounded-full shadow-xs hover:border-[#2D3A47]/40 transition-colors"
              >
                <span>Our Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Arched Window Showcase matching Mockup */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            {/* EST. 2010 Seal badge */}
            <div className="absolute -top-6 -right-2 sm:right-4 z-20 hidden sm:block">
              <EstSeal className="w-20 h-20" />
            </div>

            {/* Botanical Floral Sprig */}
            <div className="absolute -bottom-8 -right-8 z-20 pointer-events-none hidden sm:block">
              <FloralSprig className="w-36 h-52 text-[#A8B58A]" />
            </div>

            {/* Arched Container with Double Border matching Mockup */}
            <div className="relative w-full max-w-[290px] xs:max-w-[320px] sm:max-w-[420px] p-2 rounded-t-[150px] sm:rounded-t-[190px] rounded-b-2xl border border-[#2D3A47]/15 bg-white/60 shadow-xl mx-auto">
              <div
                className="relative w-full h-[380px] xs:h-[420px] sm:h-[500px] rounded-t-[140px] sm:rounded-t-[180px] rounded-b-xl overflow-hidden bg-[#FFFDF9] p-4 sm:p-6 flex flex-col justify-end"
              >
                {/* Background artistic arch image */}
                <Image
                  src={siteImages.hero.albumStack}
                  alt="Ultra Albums Handcrafted Album Stack"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                />

                {/* Soft gradient overlay for editorial elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A47]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption card */}
                <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-xl p-4 border border-white/60 shadow-lg text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B46A72] block">
                    Handmade Heirloom Editions
                  </span>
                  <p className="font-editorial text-base font-bold text-[#2D3A47] leading-tight mt-0.5">
                    Flush Mount, Layflat &amp; Bespoke Caskets
                  </p>
                  <p className="text-[11px] text-[#2D3A47]/70 mt-1">
                    Fujifilm Crystal Archive silver halide prints mounted on rigid archival boards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
