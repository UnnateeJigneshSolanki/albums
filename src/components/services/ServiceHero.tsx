import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { FloralSprig } from '@/components/common/BotanicalDecor';

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  description: string[];
  verificationNotes?: string[];
  heroImage?: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  heroImage = '/images/services/image-editing-hero.jpg',
}: ServiceHeroProps) {
  return (
    <div className="relative pt-6 pb-12 overflow-hidden">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#2D3A47]/60 mb-6 font-medium">
        <Link href="/" className="hover:text-[#B46A72] transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2D3A47]/40" />
        <Link href="/services" className="hover:text-[#B46A72] transition-colors">Services</Link>
        <ChevronRight className="w-3.5 h-3.5 text-[#2D3A47]/40" />
        <span className="text-[#2D3A47] font-semibold">{title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Heading, Subtitle & Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8B58A]/20 text-[#6D7F49] text-[11px] font-semibold tracking-wider uppercase">
            <Sparkles className="w-3 h-3" />
            <span>STUDIO SERVICE</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#2D3A47] leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-[#2D3A47]/80 font-medium font-sans leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B46A72] hover:bg-[#984E56] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-xs hover:shadow-md transition-all"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://wa.me/919322254315"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFDF9] hover:bg-[#FFF7E6] text-[#2D3A47] border border-[#2D3A47]/20 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors"
            >
              <span>WhatsApp Inquiry</span>
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

        {/* Right Column: Arched Image Showcase */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-40 hidden sm:block">
            <FloralSprig className="w-28 h-40 text-[#A8B58A]" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A47]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-white/60 text-left">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B46A72] block">
                Artisan Direction
              </span>
              <p className="text-xs text-[#2D3A47] font-medium mt-0.5">
                Meticulous attention to detail on every photograph and layout spread.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
