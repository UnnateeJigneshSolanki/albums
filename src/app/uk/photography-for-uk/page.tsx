import PageContainer from '@/components/layout/PageContainer';
import ServiceHero from '@/components/services/ServiceHero';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { ukPhotographyContent } from '@/content/uk/photography';
import { constructMetadata } from '@/lib/metadata';
import Image from 'next/image';
import { MapPin, CheckCircle, Camera } from 'lucide-react';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Photography for UK — Destination & Cultural Wedding Coverage',
  description: 'Destination wedding photography and cinematic videography for UK couples, South Asian celebrations, and NRI weddings across the UK and Europe.',
});

export default function PhotographyForUKPage() {
  const { title, subtitle, description, styles, coverageDetails, teamDetails } = ukPhotographyContent;

  return (
    <PageContainer className="py-12">
      <ServiceHero
        title={title}
        subtitle={subtitle}
        description={description}
        heroImage={siteImages.services.photography.hero}
      />

      {/* Team Scope */}
      {teamDetails && (
        <section className="my-14 bg-[#2D3A47] text-[#FFF7E6] rounded-3xl p-8 sm:p-10 border border-[#FFF7E6]/10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D8C29A] block">
                UK &amp; DESTINATION WEDDING TEAM
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
                {teamDetails.size}
              </h2>
              <p className="text-xs sm:text-sm text-[#FFF7E6]/80 font-sans max-w-2xl leading-relaxed">
                {teamDetails.description}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#FFF7E6]/10 px-4 py-2.5 rounded-full border border-[#FFF7E6]/20 text-xs shrink-0">
              <MapPin className="w-4 h-4 text-[#A8B58A]" />
              <span>UK Nationwide &amp; Destination Travel</span>
            </div>
          </div>
        </section>
      )}

      {/* Coverage Scope */}
      {coverageDetails && (
        <section className="my-16 bg-[#FFFDF9] rounded-3xl p-8 border border-[#2D3A47]/10 shadow-xs">
          <h3 className="font-editorial text-2xl font-bold text-[#2D3A47] mb-6">
            UK &amp; Destination Wedding Coverage Scope
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coverageDetails.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFF7E6]">
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
          title="Inquire for UK Wedding Dates &amp; Filming"
          description="Tell us about your wedding dates, UK venue, and celebration scope to receive availability and custom package options."
          fields={[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: 'UK Mobile / Phone', required: true },
            { name: 'message', label: 'Wedding Dates & UK Venues', type: 'textarea', placeholder: 'Share your event dates, venue location in the UK, and coverage preferences', required: true },
          ]}
          submitButtonText="Check UK Date Availability"
        />
      </div>
    </PageContainer>
  );
}
