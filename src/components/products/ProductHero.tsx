'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { EstSeal } from '@/components/common/BotanicalDecor';

interface ProductHeroProps {
  title: string;
  subtitle?: string;
  category?: string;
  description: string[];
  qualityGuarantee?: string;
  verificationNotes?: string[];
  heroImage?: string;
}

export default function ProductHero({
  title,
  subtitle,
  category = 'Our Products',
  description,
  qualityGuarantee,
  heroImage = '/images/products/flush-mount.jpg',
}: ProductHeroProps) {
  return (
    <div className="relative pt-6 pb-12 overflow-hidden">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#2D3A47]/60 mb-6 font-medium">
        <Link href="/" className="hover:text-[#B46A72] transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2D3A47]/40" />
        <Link href="/our-products" className="hover:text-[#B46A72] transition-colors">Our Products</Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2D3A47]/40" />
        <span className="text-[#2D3A47] font-semibold">{title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Title, Subtitle, Actions, Description */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8B58A]/20 text-[#6D7F49] text-[11px] font-semibold tracking-wider uppercase">
            <span>{category}</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#2D3A47] leading-tight break-words">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-[#2D3A47]/80 font-medium font-sans leading-relaxed">
              {subtitle}
            </p>
          )}

          {qualityGuarantee && (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F7C8D3]/30 border border-[#B46A72]/20 text-[#B46A72] text-xs font-semibold">
              <Check className="w-3.5 h-3.5" />
              <span>{qualityGuarantee}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B46A72] hover:bg-[#984E56] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFDF9] hover:bg-[#FFF7E6] text-[#2D3A47] border border-[#2D3A47]/20 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors"
            >
              <span>View Gallery</span>
            </a>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#2D3A47]/10">
            {description.map((p, idx) => (
              <p key={idx} className="text-sm sm:text-base text-[#2D3A47]/80 leading-relaxed font-sans">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: Arched Product Showcase Card */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute -top-4 -right-2 z-10 hidden sm:block">
            <EstSeal className="w-16 h-16" />
          </div>

          <div className="relative w-full max-w-[360px] aspect-4/5 rounded-t-[140px] rounded-b-2xl overflow-hidden border border-[#2D3A47]/15 bg-[#F6EFE6] shadow-xl">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A47]/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-white/60 text-left">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B46A72] block">
                Archival Craftsmanship
              </span>
              <p className="text-xs text-[#2D3A47] font-medium mt-0.5">
                Every volume individually inspected &amp; certified in our Mumbai workshop.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Navigation Tabs Anchor Bar */}
      <div className="mt-12 border-b border-[#2D3A47]/15 flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-[#2D3A47]/70 overflow-x-auto pb-3">
        <a href="#overview" className="text-[#B46A72] font-semibold border-b-2 border-[#B46A72] pb-3 -mb-3 whitespace-nowrap">
          Overview
        </a>
        <a href="#features" className="hover:text-[#B46A72] transition-colors whitespace-nowrap">
          Key Features
        </a>
        <a href="#specifications" className="hover:text-[#B46A72] transition-colors whitespace-nowrap">
          Specifications
        </a>
        <a href="#cover-options" className="hover:text-[#B46A72] transition-colors whitespace-nowrap">
          Cover Options
        </a>
        <a href="#gallery" className="hover:text-[#B46A72] transition-colors whitespace-nowrap">
          Gallery
        </a>
      </div>
    </div>
  );
}
