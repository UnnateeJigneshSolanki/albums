import PageContainer from '@/components/layout/PageContainer';
import ServiceHero from '@/components/services/ServiceHero';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { albumDesigningContent } from '@/content/services/album-designing';
import { constructMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Sparkles, Check, ArrowRight } from 'lucide-react';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Professional Album Designs — Wedding Album Layouts by Human Artists',
  description: 'Custom album layouts created from scratch by experienced designers with multiple themes, soft-copy proofs, and client revision rounds.',
});

export default function AlbumDesigningPage() {
  const { title, subtitle, description, designThemes, features, videoSamples } = albumDesigningContent;

  return (
    <PageContainer className="py-12">
      <ServiceHero
        title={title}
        subtitle={subtitle}
        description={description}
        heroImage={siteImages.services.albumDesigning.hero}
      />

      {/* Design Themes Section matching Page 4 of Mockup */}
      <section className="my-16">
        <div className="mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
            CURATED AESTHETICS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2D3A47]">
            Design Themes
          </h2>
          <p className="text-sm text-[#2D3A47]/75 mt-2 font-sans max-w-2xl">
            Choose from our refined layout themes or collaborate with our design directors to develop a bespoke aesthetic for your celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(designThemes || []).map((theme: { name: string; description: string; tag: string }, idx: number) => {
            const themeImg = siteImages.themes[idx % siteImages.themes.length]?.image || siteImages.hero.openSpread;
            return (
              <div
                key={idx}
                className="group bg-[#FFFDF9] rounded-2xl p-4 border border-[#2D3A47]/10 hover:border-[#B46A72]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4 bg-[#F6EFE6]">
                    <Image
                      src={themeImg}
                      alt={theme.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-[#B46A72] px-2 py-0.5 rounded-full">
                      {theme.tag}
                    </div>
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors mb-1.5">
                    {theme.name}
                  </h3>
                  <p className="text-xs text-[#2D3A47]/75 leading-relaxed font-sans">
                    {theme.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Design Video Samples Section matching Page 4 of Mockup */}
      <section className="my-16 bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 border border-[#2D3A47]/10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block">
              VIDEO PREVIEWS
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2D3A47]">
              Design Video Samples
            </h2>
            <p className="text-sm text-[#2D3A47]/75 font-sans leading-relaxed">
              Watch our album design videos to see the quality, artistic sequencing, and tactile craftsmanship in action.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/919322254315"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B46A72] hover:text-[#984E56] transition-colors group"
              >
                <span>Request Video Portfolio on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden shadow-xl border border-[#2D3A47]/15 bg-[#1E2730] group cursor-pointer">
              <Image
                src={siteImages.services.albumDesigning.videoThumbnail}
                alt="Album Design Video Walkthrough"
                fill
                className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 text-[#B46A72] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-black/40 backdrop-blur-xs p-2.5 rounded-xl flex items-center justify-between">
                <span>Grand Indian Wedding Album Walkthrough</span>
                <span className="text-[10px] text-white/70">2:45 min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Design Matters Features */}
      {features && (
        <section className="my-16">
          <div className="mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
              THE HUMAN TOUCH
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47]">
              Why Professional Human Design Matters
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#2D3A47]/10 flex items-start gap-3 shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-[#A8B58A]/30 flex items-center justify-center text-[#6D7F49] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm text-[#2D3A47]/80 font-sans leading-relaxed">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Consultation Inquiry Form */}
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Album Design Consultation"
          description="Send us your photo count and desired theme to receive sample spreads and pricing."
          fields={[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone / WhatsApp', required: true },
            { name: 'message', label: 'Theme & Photo Details', type: 'textarea', placeholder: 'Tell us about your wedding style, photo count, and preferred design theme', required: true },
          ]}
          submitButtonText="Request Design Consultation"
        />
      </div>
    </PageContainer>
  );
}
