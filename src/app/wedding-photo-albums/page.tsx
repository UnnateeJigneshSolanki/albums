import PageContainer from '@/components/layout/PageContainer';
import Breadcrumb from '@/components/common/Breadcrumb';
import WeddingAlbumCategories from '@/components/wedding/WeddingAlbumCategories';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { weddingPhotoAlbumsContent } from '@/content/wedding/wedding-photo-albums';
import { constructMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { LeafMotif } from '@/components/common/BotanicalDecor';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Wedding Photo Albums and Books — Timeless Wedding Memories Mumbai',
  description: 'Hand-bound flush mount albums, seamless layflat books, and luxury wooden casket albums crafted to preserve wedding memories for generations.',
});

export default function WeddingPhotoAlbumsPage() {
  const { title, introParagraphs, discoverSection, locationSection, contactForm } = weddingPhotoAlbumsContent;

  return (
    <PageContainer className="py-12">
      <Breadcrumb
        items={[
          { label: 'Wedding Albums', href: '/wedding-photo-albums' },
          { label: 'Wedding Photo Albums & Books', href: '/wedding-photo-albums' },
        ]}
      />

      {/* Hero Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 mb-2">
          <LeafMotif className="w-4 h-4 text-[#A8B58A]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49]">
            TIMELESS HEIRLOOMS
          </span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#2D3A47] leading-tight">
          {title}
        </h1>
        <div className="space-y-3 mt-4 text-base sm:text-lg text-[#2D3A47]/80 font-sans max-w-3xl leading-relaxed">
          {introParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      {/* Wedding Categories Component */}
      <WeddingAlbumCategories />

      {/* Discover Section Callout */}
      <section className="my-16 bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 border border-[#2D3A47]/10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block">
            PERSONALIZED CONSULTATION
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47]">
            {discoverSection.title}
          </h2>
          <p className="text-sm text-[#2D3A47]/75 font-sans leading-relaxed">
            {discoverSection.description}
          </p>
        </div>
        <Link
          href={discoverSection.ctaLink}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B46A72] hover:bg-[#984E56] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all shrink-0"
        >
          <span>{discoverSection.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Location Studio Card */}
      <section className="my-16 bg-[#F6EFE6] rounded-3xl p-8 border border-[#2D3A47]/10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-[#6D7F49]">
              <MapPin className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">MUMBAI WORKSHOP</span>
            </div>
            <h3 className="font-editorial text-2xl font-bold text-[#2D3A47]">
              {locationSection.title}
            </h3>
            <p className="text-sm text-[#2D3A47]/80 font-sans leading-relaxed">
              {locationSection.description}
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden shadow-md bg-white border border-[#2D3A47]/10">
              <Image
                src={siteImages.hero.albumStack}
                alt="Ultra Albums Mumbai Workshop Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title={contactForm.title}
          description="Schedule a wedding album consultation or request custom material samples."
          fields={contactForm.fields}
          submitButtonText={contactForm.submitButtonText}
        />
      </div>
    </PageContainer>
  );
}
