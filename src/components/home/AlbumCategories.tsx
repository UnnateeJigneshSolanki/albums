import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { homeContent } from '@/content/pages/home';

export default function AlbumCategories() {
  const { curatedRange } = homeContent;
  const categories = curatedRange.categories.slice(0, 3);

  return (
    <section className="py-16 bg-[#FFFDF9] border-t border-[#2D3A47]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-2">
            COLLECTIONS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2D3A47] tracking-tight">
            Featured Album <span className="font-script-accent font-normal italic text-[#B46A72]">Editions</span>
          </h2>
          <p className="text-sm text-[#2D3A47]/70 mt-2 font-sans">
            Dedicated album formats tailored for weddings, family milestones, baby memories, and travel archives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-[#FFF7E6] rounded-2xl overflow-hidden border border-[#2D3A47]/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-16/10 overflow-hidden bg-[#F6EFE6]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-[#B46A72] px-2.5 py-0.5 rounded-full">
                    {cat.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-editorial text-xl font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D3A47]/75 leading-relaxed font-sans">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B46A72] group-hover:text-[#984E56] transition-colors"
                >
                  <span>Explore Album</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
