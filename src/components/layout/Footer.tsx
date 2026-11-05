'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationConfig } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { ExternalLink, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { LeafMotif, EstSeal } from '@/components/common/BotanicalDecor';

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <footer
      className={`text-sm border-t transition-colors duration-300 ${
        isHome
          ? 'bg-[#FDFBF7] text-[#2D3A47] border-[#2D3A47]/10'
          : 'bg-[#F6EFE6] text-[#2D3A47] border-[#2D3A47]/10'
      }`}
    >
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Heritage & Physical Workshop (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-1.5">
              <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-[0.16em] text-[#2D3A47] block">
                ULTRA ALBUMS
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B46A72] font-semibold block">
                Artisan Bookbinders &bull; Mumbai &bull; Est. 2010
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#2D3A47]/80 leading-relaxed font-sans max-w-sm">
              Handcrafting heirloom flush mount albums, seamless layflat books, and bespoke presentation caskets for life’s most precious stories. Built with archival substrates and silver halide prints.
            </p>

            <div className="pt-2 text-xs text-[#2D3A47]/80 space-y-2 font-sans border-t border-[#2D3A47]/10">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B46A72] mt-0.5 shrink-0" />
                <p className="text-xs leading-relaxed">
                  Shree Krishna Ind. Estate, Near Toll Naka, 211, Western Express Highway, Dahisar East, Mumbai 400068, India
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#6D7F49] shrink-0" />
                <span className="text-xs font-medium">
                  +91 93222 54315 &bull; +91 93200 54315
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6D7F49] shrink-0" />
                <span className="text-xs font-medium">
                  ultraaalbums@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Handcrafted Albums (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-editorial text-base font-bold text-[#2D3A47] tracking-wider uppercase text-xs">
              Handcrafted Albums
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2D3A47]/80 font-sans">
              {navigationConfig.footerNav.products.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-[#B46A72] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B46A72]/40" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Studio Services & Designs (Spans 3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-editorial text-base font-bold text-[#2D3A47] tracking-wider uppercase text-xs">
              Studio &amp; Design Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2D3A47]/80 font-sans">
              {navigationConfig.footerNav.services.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-[#B46A72] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#A8B58A]" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
              {navigationConfig.footerNav.standalone.map((item, idx) => (
                <li key={`std-${idx}`}>
                  <Link
                    href={item.href}
                    className="hover:text-[#B46A72] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#A8B58A]" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-[#B46A72] transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-[#A8B58A]" />
                  <span>Journal &amp; Studio Insights</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: International & Concierge (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-editorial text-base font-bold text-[#2D3A47] tracking-wider uppercase text-xs">
              Client Concierge
            </h4>
            <div className="space-y-3 font-sans">
              <a
                href="https://wa.me/919322254315"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#196B36] rounded-full text-xs font-semibold shadow-2xs transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Studio</span>
              </a>

              <a
                href={siteConfig.externalPaymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#2D3A47] hover:bg-[#1E2730] text-white rounded-full text-xs font-semibold shadow-xs transition-all duration-200"
              >
                <span>Pay Online</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D8C29A]" />
              </a>

              <div className="pt-2">
                <Link
                  href="/uk/flush-mount-album-for-uk"
                  className="text-[11px] font-semibold uppercase tracking-wider text-[#6D7F49] hover:text-[#B46A72] transition-colors block text-center"
                >
                  UK Studio Orders &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Signature Bar */}
      <div className="border-t border-[#2D3A47]/10 bg-[#EFE7DC] py-6 text-xs text-[#2D3A47]/70 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <LeafMotif className="w-4 h-4 text-[#6D7F49] shrink-0" />
            <p>&copy; {new Date().getFullYear()} Ultra Albums. All rights reserved. Handcrafted with precision in Mumbai.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about-us" className="hover:text-[#B46A72] transition-colors">About Us</Link>
            <Link href="/contact-us" className="hover:text-[#B46A72] transition-colors">Contact</Link>
            <Link href="/blogs" className="hover:text-[#B46A72] transition-colors">Journal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
