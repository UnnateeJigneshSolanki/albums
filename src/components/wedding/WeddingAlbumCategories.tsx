import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { weddingPhotoAlbumsContent } from '@/content/wedding/wedding-photo-albums';
import { siteImages } from '@/lib/images';

const categoryImages = [
  siteImages.products.flushMount.openSpread,
  siteImages.products.layflat.openSpread,
  siteImages.products.luxuryAlbums.woodenCasket,
  siteImages.products.photoBook.cover,
];

export default function WeddingAlbumCategories() {
  const { flushMountSection, layflatSection, luxurySection, photoBooksSection } = weddingPhotoAlbumsContent;

  const categories = [
    {
      title: flushMountSection.title,
      description: flushMountSection.description.join(' '),
      ctaText: flushMountSection.ctaText,
      ctaLink: flushMountSection.ctaLink,
      badge: 'ARCHIVAL PANORAMIC',
      image: siteImages.products.flushMount.openSpread,
    },
    {
      title: layflatSection.title,
      description: layflatSection.description,
      ctaText: layflatSection.ctaText,
      ctaLink: layflatSection.ctaLink,
      badge: 'SEAMLESS SPREAD',
      image: siteImages.products.layflat.openSpread,
    },
    {
      title: luxurySection.title,
      description: luxurySection.description,
      ctaText: luxurySection.ctaText,
      ctaLink: luxurySection.ctaLink,
      badge: 'HANDCRAFTED CASKET',
      image: siteImages.products.luxuryAlbums.woodenCasket,
    },
    {
      title: photoBooksSection.title,
      description: photoBooksSection.description,
      ctaText: photoBooksSection.ctaText,
      ctaLink: photoBooksSection.ctaLink,
      badge: 'CONTEMPORARY COFFEE-TABLE',
      image: siteImages.products.photoBook.cover,
    },
  ];

  return (
    <div className="space-y-12 my-12">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="group bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#2D3A47]/10 hover:border-[#B46A72]/30 shadow-xs hover:shadow-xl transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-5 relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-md bg-[#F6EFE6]">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-[#B46A72] px-2.5 py-1 rounded-full">
                {cat.badge}
              </div>
            </div>

            {/* Description & Action */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors leading-snug">
                {cat.title}
              </h2>
              <p className="text-sm text-[#2D3A47]/80 leading-relaxed font-sans">
                {cat.description}
              </p>
              <div className="pt-2">
                <Link
                  href={cat.ctaLink}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2D3A47] hover:bg-[#1E2730] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-xs hover:shadow-md transition-all group/btn"
                >
                  <span>{cat.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
