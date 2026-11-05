'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import { siteConfig } from '@/config/site';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF7E6]/95 backdrop-blur-md shadow-xs border-b border-[#2D3A47]/10 py-3'
          : 'bg-[#FFF7E6] border-b border-[#2D3A47]/8 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col shrink-0">
          <span className="font-editorial text-lg sm:text-2xl font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#2D3A47] group-hover:text-[#B46A72] transition-colors">
            ULTRA ALBUMS
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#7E8D5F] font-medium hidden sm:block">
            Heirloom Bookbinders &bull; Est. 2010
          </span>
        </Link>

        {/* Desktop Navigation */}
        <Navigation />

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact-us"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#B46A72] hover:bg-[#984E56] text-white text-xs font-medium tracking-wider rounded-full shadow-xs hover:shadow-md transition-all duration-200"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
