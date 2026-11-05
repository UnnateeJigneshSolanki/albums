import Image from 'next/image';
import { aboutContent } from '@/content/pages/about';
import { Users, Palette, CheckCircle, Globe } from 'lucide-react';
import { LeafMotif } from '@/components/common/BotanicalDecor';

const statIcons = [Users, Palette, CheckCircle, Globe];

export default function CompanyIntroduction() {
  const { hero, narrative, stats } = aboutContent;

  return (
    <div className="pt-6 pb-12 overflow-hidden">
      {/* Editorial Narrative & Leather Album Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2">
            <LeafMotif className="w-4 h-4 text-[#A8B58A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49]">
              {hero.label}
            </span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#2D3A47] leading-tight break-words">
            {hero.title}{' '}
            <span className="font-script-accent font-normal italic text-[#B46A72]">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#2D3A47]/85 font-sans leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="space-y-4 text-sm sm:text-base text-[#2D3A47]/80 font-sans leading-relaxed">
            {narrative.map((section, sIdx) => (
              <div key={sIdx} className="space-y-2">
                <h3 className="font-editorial text-lg font-bold text-[#2D3A47]">
                  {section.title}
                </h3>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Debossed Leather Album Image matching Page 6 of Mockup */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[360px] aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-[#2D3A47]/10 bg-[#2D3A47]">
            <Image
              src={hero.image}
              alt="Ultra Albums Handcrafted Leather Album"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="font-editorial text-xl tracking-[0.2em] font-bold text-[#D8C29A] uppercase block">
                ULTRA ALBUMS
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#FFF7E6]/70 mt-1 block">
                Mumbai Master Workshop
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Value Pillars / Stats matching Page 6 of Mockup */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#2D3A47]/10 shadow-xs">
        {stats.map((stat, idx) => {
          const Icon = statIcons[idx % statIcons.length];
          return (
            <div key={idx} className="flex flex-col items-center text-center p-3">
              <div className="w-12 h-12 rounded-full bg-[#F7C8D3]/30 flex items-center justify-center text-[#B46A72] mb-3">
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-editorial text-2xl font-bold text-[#2D3A47]">
                {stat.value}
              </span>
              <h3 className="font-editorial text-sm font-bold text-[#2D3A47] leading-snug mt-0.5">
                {stat.label}
              </h3>
              <p className="text-[11px] text-[#2D3A47]/70 mt-1 font-sans">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
