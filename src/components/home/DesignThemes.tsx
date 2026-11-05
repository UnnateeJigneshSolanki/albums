'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { siteImages } from '@/lib/images';

export default function DesignThemes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? siteImages.themes.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === siteImages.themes.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section className="py-20 bg-[#F1F4ED] relative overflow-hidden border-y border-[#A8B58A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-2">
              EXPLORE
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2D3A47] tracking-tight">
              Design <span className="font-script-accent font-normal italic text-[#B46A72]">Themes</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous theme"
              className="w-10 h-10 rounded-full border border-[#2D3A47]/20 bg-white/80 hover:bg-white flex items-center justify-center text-[#2D3A47] shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next theme"
              className="w-10 h-10 rounded-full border border-[#2D3A47]/20 bg-white/80 hover:bg-white flex items-center justify-center text-[#2D3A47] shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Polaroid Theme Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteImages.themes.map((theme, idx) => (
            <Link
              key={theme.id}
              href="/album-designs"
              className="group bg-white p-3 pb-6 rounded-xl shadow-xs hover:shadow-xl border border-[#2D3A47]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-[#FFF7E6] mb-3">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="text-center px-1">
                <h3 className="font-editorial text-base font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors">
                  {theme.name}
                </h3>
                <p className="text-[11px] text-[#2D3A47]/65 mt-1 leading-snug line-clamp-2">
                  {theme.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            href="/album-designs"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6D7F49] hover:text-[#2D3A47] transition-colors group"
          >
            <span>View All Wedding Design Layouts</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
