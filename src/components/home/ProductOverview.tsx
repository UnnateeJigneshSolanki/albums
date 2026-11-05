import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { siteImages } from '@/lib/images';

const products = [
  {
    title: 'Flush Mount Albums',
    href: '/flush-mount-album',
    subtitle: 'Thick panoramic archival pages',
    image: siteImages.products.flushMount.cover,
    accent: 'bg-[#A8B58A]/20',
  },
  {
    title: 'Layflat Albums',
    href: '/layflat',
    subtitle: '180° uninterrupted landscape spreads',
    image: siteImages.products.layflat.cover,
    accent: 'bg-[#F7C8D3]/25',
  },
  {
    title: 'Photo Books',
    href: '/photo-book',
    subtitle: 'Contemporary lightweight flat-opening books',
    image: siteImages.products.photoBook.cover,
    accent: 'bg-[#A9B7C6]/20',
  },
  {
    title: 'Boxes & Bags',
    href: '/box-and-bags',
    subtitle: 'Handcrafted timber boxes & presentation bags',
    image: siteImages.products.boxAndBags.cover,
    accent: 'bg-[#D8C29A]/25',
  },
];

export default function ProductOverview() {
  return (
    <section className="py-20 bg-[#FFF7E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6D7F49] block mb-2">
              OUR PRODUCTS
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2D3A47] tracking-tight">
              A Curated Range <span className="font-script-accent font-normal italic text-[#B46A72]">of Photo Albums</span>
            </h2>
          </div>
          <Link
            href="/our-products"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B46A72] hover:text-[#984E56] transition-colors group"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Arched Cards matching the Master Mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, idx) => (
            <Link
              key={idx}
              href={product.href}
              className="group flex flex-col bg-[#FFFDF9] rounded-2xl p-4 border border-[#2D3A47]/10 hover:border-[#B46A72]/40 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Arched Top Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-4/5 rounded-t-[80px] sm:rounded-t-[120px] rounded-b-xl overflow-hidden mb-4 bg-[#F6EFE6]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A47]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Footer with Title and Circular Arrow Button */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <h3 className="font-editorial text-lg font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#2D3A47]/65 mt-0.5 font-sans">
                    {product.subtitle}
                  </p>
                </div>

                <div className="w-9 h-9 rounded-full border border-[#2D3A47]/20 flex items-center justify-center shrink-0 group-hover:bg-[#B46A72] group-hover:border-[#B46A72] group-hover:text-white text-[#2D3A47] transition-all duration-200">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
