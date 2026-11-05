import Link from 'next/link';
import Image from 'next/image';
import { siteImages } from '@/lib/images';

export default function HomeContact() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFF7E6] pt-8 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[4.8/1] min-h-[160px] sm:min-h-[200px] md:min-h-[220px] rounded-3xl overflow-hidden shadow-xl border border-[#2D3A47]/10 group bg-[#F7EFE4]">
          <Image
            src={siteImages.hero.meadowFlowers}
            alt="Let's Create Something Beautiful — Contact Ultra Albums"
            fill
            className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          {/* Entire banner is interactive link to contact page */}
          <Link
            href="/contact-us"
            aria-label="Get in Touch with Ultra Albums"
            className="absolute inset-0 z-10 flex items-center justify-center focus:outline-hidden cursor-pointer"
          >
            <span className="sr-only">Get in Touch with Ultra Albums</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
