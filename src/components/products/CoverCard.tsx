import Image from 'next/image';
import { CoverOption } from '@/types/product';

interface CoverCardProps {
  cover: CoverOption;
  index?: number;
}

const coverSampleImages = [
  '/images/products/flush-mount.jpg',
  '/images/products/luxury-albums.jpg',
  '/images/products/box-and-bags.jpg',
  '/images/products/layflat.jpg',
  '/images/home/hero-stack.jpg',
  '/images/home/crafting-hand.jpg',
];

export default function CoverCard({ cover, index = 0 }: CoverCardProps) {
  const imageUrl = coverSampleImages[index % coverSampleImages.length];

  return (
    <div className="group bg-[#FFFDF9] rounded-2xl p-4 border border-[#2D3A47]/10 hover:border-[#B46A72]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Arched image container */}
        <div className="relative w-full aspect-4/3 rounded-t-xl rounded-b-lg overflow-hidden mb-3.5 bg-[#F6EFE6]">
          <Image
            src={imageUrl}
            alt={cover.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A47]/20 to-transparent" />
        </div>

        <h3 className="font-editorial text-base font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors mb-1.5 leading-snug">
          {cover.title}
        </h3>
        <p className="text-xs text-[#2D3A47]/75 leading-relaxed font-sans mb-3">
          {cover.description}
        </p>

        {cover.features && cover.features.length > 0 && (
          <ul className="text-xs text-[#2D3A47]/70 space-y-1 mb-2">
            {cover.features.map((f, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B46A72]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
