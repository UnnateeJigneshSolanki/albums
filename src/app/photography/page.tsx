import PageContainer from '@/components/layout/PageContainer';
import ServiceHero from '@/components/services/ServiceHero';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { photographyContent } from '@/content/services/photography';
import { constructMetadata } from '@/lib/metadata';
import Image from 'next/image';
import { Camera, Users, Video, MapPin, CheckCircle } from 'lucide-react';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Wedding Photography Services — Candid & Cinematic Storytelling Across India',
  description: 'Nationwide wedding photography and cinematic videography with a team of 15+ experienced photographers capturing candid emotions, rituals, and grand receptions.',
});

const shootStyles = [
  { title: 'Candid Storytelling', desc: 'Unscripted, natural emotional exchanges and laughter captured unobtrusively.', image: siteImages.services.photography.candidMoment },
  { title: 'Ritual Ceremonies', desc: 'Sacred pheras, mandap vows, haldi, and mehendi cultural traditions.', image: siteImages.services.photography.mandapCeremony },
  { title: 'Couple & Destination', desc: 'Fine-art editorial portraits during sunset golden hour and destination locales.', image: siteImages.services.photography.sunsetDance },
  { title: 'Celebration & Sangeet', desc: 'High-energy baraat dancing, musical performances, and grand banquets.', image: siteImages.services.photography.celebration },
];

export default function PhotographyPage() {
  const { title, subtitle, description, teamDetails, coverageDetails } = photographyContent;

  return (
    <PageContainer className="py-12">
      <ServiceHero
        title={title}
        subtitle={subtitle}
        description={description}
        heroImage={siteImages.services.photography.hero}
      />

      {/* Team Capability Band */}
      {teamDetails && (
        <section className="my-14 bg-[#2D3A47] text-[#FFF7E6] rounded-3xl p-8 sm:p-10 border border-[#FFF7E6]/10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8C29A] block">
                NATIONWIDE VISUAL COLLECTIVE
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
                {teamDetails.size}
              </h2>
              <p className="text-xs sm:text-sm text-[#FFF7E6]/80 font-sans max-w-2xl leading-relaxed">
                {teamDetails.description}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex items-center gap-2 bg-[#FFF7E6]/10 px-4 py-2.5 rounded-full border border-[#FFF7E6]/20 text-xs">
                <MapPin className="w-4 h-4 text-[#A8B58A]" />
                <span>Pan-India &amp; International</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Shoot Styles Grid */}
      <section className="my-16">
        <div className="mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
            PHOTOGRAPHY &amp; FILM STYLES
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2D3A47]">
            Capturing Every Chapter
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shootStyles.map((style, idx) => (
            <div
              key={idx}
              className="group bg-[#FFFDF9] rounded-2xl p-4 border border-[#2D3A47]/10 hover:border-[#B46A72]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4 bg-[#F6EFE6]">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors mb-1.5">
                  {style.title}
                </h3>
                <p className="text-xs text-[#2D3A47]/75 leading-relaxed font-sans">
                  {style.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Scope */}
      {coverageDetails && (
        <section className="my-16 bg-[#FFFDF9] rounded-3xl p-8 border border-[#2D3A47]/10 shadow-xs">
          <h3 className="font-editorial text-2xl font-bold text-[#2D3A47] mb-6">
            Comprehensive Wedding Coverage Scope
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coverageDetails.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF7E6]">
                <CheckCircle className="w-4 h-4 text-[#6D7F49] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2D3A47]/85 font-sans leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Inquiry Form */}
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Inquire for Wedding Dates &amp; Photography Quotes"
          description="Tell us your wedding dates, venues, and ceremony scope to receive our visual collective's availability and custom quote."
          fields={[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone / WhatsApp', required: true },
            { name: 'message', label: 'Wedding Dates & Venues', type: 'textarea', placeholder: 'Share your wedding dates, destination/city, and required coverage (photo/video)', required: true },
          ]}
          submitButtonText="Check Date Availability"
        />
      </div>
    </PageContainer>
  );
}
