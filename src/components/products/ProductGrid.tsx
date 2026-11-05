import Image from 'next/image';
import { ProductListingItem, productsConfig } from '@/config/products';
import ProductCard from './ProductCard';
import { siteImages } from '@/lib/images';
import { LeafMotif } from '@/components/common/BotanicalDecor';

interface ProductGridProps {
  products?: ProductListingItem[];
}

export default function ProductGrid({ products = productsConfig }: ProductGridProps) {
  return (
    <div className="space-y-16">
      {/* Editorial Header Banner matching Page 2 of Mockup */}
      <div className="relative rounded-3xl overflow-hidden bg-[#2D3A47] text-[#FFF7E6] p-8 sm:p-12 border border-[#FFF7E6]/10 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2">
              <LeafMotif className="w-5 h-5 text-[#A8B58A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8C29A]">
                OUR PRODUCTS
              </span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Explore Our <span className="font-script-accent font-normal italic text-[#F7C8D3]">Album Collection</span>
            </h1>
            <p className="text-sm sm:text-base text-[#FFF7E6]/80 max-w-xl font-sans leading-relaxed">
              A complete range of premium albums, seamless layflat books, handcrafted wooden caskets, and presentation accessories—meticulously crafted for every story.
            </p>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-4/3 rounded-t-[100px] rounded-b-xl overflow-hidden border-2 border-[#D8C29A]/30 shadow-2xl">
              <Image
                src={siteImages.hero.albumStack}
                alt="Album Collection Showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6 Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product, idx) => (
          <ProductCard key={product.slug} product={product} index={idx} />
        ))}
      </div>
    </div>
  );
}
