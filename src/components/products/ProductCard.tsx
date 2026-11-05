import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ProductListingItem } from '@/config/products';
import { siteImages } from '@/lib/images';

interface ProductCardProps {
  product: ProductListingItem;
  index: number;
}

const productImages: Record<string, string> = {
  '/flush-mount-album': siteImages.products.flushMount.cover,
  '/layflat': siteImages.products.layflat.cover,
  '/photo-book': siteImages.products.photoBook.cover,
  '/luxury-albums': siteImages.products.luxuryAlbums.cover,
  '/box-and-bags': siteImages.products.boxAndBags.cover,
  '/slip-in-albums': siteImages.products.slipIn.cover,
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const image = productImages[product.href] || siteImages.hero.albumStack;

  return (
    <Link
      href={product.href}
      className="group bg-[#FFFDF9] rounded-2xl p-5 border border-[#2D3A47]/10 hover:border-[#B46A72]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Arched Top Image Container */}
        <div className="relative w-full aspect-4/3 rounded-t-[100px] rounded-b-xl overflow-hidden mb-4 bg-[#F6EFE6]">
          <Image
            src={image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A47]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6D7F49] block mb-1">
          Collection 0{index + 1}
        </span>
        <h3 className="font-editorial text-xl font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors mb-2 leading-snug">
          {product.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#2D3A47]/75 leading-relaxed font-sans mb-4">
          {product.shortDescription}
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#2D3A47]/5">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B46A72] group-hover:text-[#984E56] transition-colors">
          View Album Specs
        </span>
        <div className="w-8 h-8 rounded-full border border-[#2D3A47]/20 flex items-center justify-center shrink-0 group-hover:bg-[#B46A72] group-hover:border-[#B46A72] group-hover:text-white text-[#2D3A47] transition-all duration-200">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
