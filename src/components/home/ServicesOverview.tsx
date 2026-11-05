import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Sliders, Camera, ArrowRight } from 'lucide-react';
import { FloralSprig } from '@/components/common/BotanicalDecor';
import { siteImages } from '@/lib/images';

const services = [
  {
    title: 'Album Designing',
    href: '/album-designing',
    icon: BookOpen,
    desc: 'Bespoke layouts by human artists with narrative sequencing.',
  },
  {
    title: 'Image Editing',
    href: '/image-editing',
    icon: Sliders,
    desc: 'Skin retouching, light balance & archival restoration.',
  },
  {
    title: 'Photography & Videography',
    href: '/photography',
    icon: Camera,
    desc: 'Nationwide collective of 15+ photographers & cinematographers.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-[#FDF3F5] relative overflow-hidden">
      {/* Decorative floral accent */}
      <div className="absolute top-4 left-6 pointer-events-none opacity-40 hidden md:block">
        <FloralSprig className="w-32 h-44 text-[#B46A72]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Polaroid Wedding Showcase matching Mockup */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[440px] aspect-16/10 rounded-2xl overflow-hidden shadow-xl border border-[#2D3A47]/10 bg-[#FFFDF9] group">
              <Image
                src={siteImages.hero.weddingCoupleSunset}
                alt="Artisan Album Designing & Photography"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 440px"
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy and 3 Service Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6D7F49] block mb-2">
                OUR SERVICES
              </span>
              <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2D3A47] tracking-tight leading-tight">
                End-to-End Album{' '}
                <span className="font-script-accent font-normal italic text-[#B46A72]">
                  Solutions
                </span>
              </h2>
            </div>

            <p className="text-base text-[#2D3A47]/80 leading-relaxed font-sans">
              From album designing and image editing to photography &amp; videography, we bring your memories to life with precision and care. Whether you are an engaged couple or a professional studio, our collective provides comprehensive support at every stage.
            </p>

            {/* 3 Horizontal Service Pillars matching Mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={idx}
                    href={service.href}
                    className="group bg-white/80 hover:bg-white rounded-xl p-4 border border-[#2D3A47]/10 hover:border-[#B46A72]/40 shadow-xs hover:shadow-md transition-all duration-200 text-center flex flex-col items-center justify-between"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F7C8D3]/30 flex items-center justify-center text-[#B46A72] group-hover:bg-[#B46A72] group-hover:text-white transition-colors mb-2">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-editorial text-sm font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-[#2D3A47]/65 mt-1 leading-snug line-clamp-2">
                        {service.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/album-designing"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B46A72] hover:text-[#984E56] transition-colors group"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
