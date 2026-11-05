import PageContainer from '@/components/layout/PageContainer';
import ServiceHero from '@/components/services/ServiceHero';
import BeforeAfter from '@/components/common/BeforeAfter';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { imageEditingContent } from '@/content/services/image-editing';
import { constructMetadata } from '@/lib/metadata';
import Image from 'next/image';
import { Sparkles, Scissors, History, Heart, Eye } from 'lucide-react';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Image Editing Services — Photo Retouching & Restoration Studio Mumbai',
  description: 'Digital image restoration, beauty retouching, background cutouts, and color correction with more than a decade of international studio experience.',
});

const moreServices = [
  {
    title: 'Image Cutouts',
    desc: 'Precision hand-drawn vector clipping paths and alpha masking for accessories and jewelry.',
    icon: Scissors,
    image: siteImages.services.imageEditing.cutoutSample,
  },
  {
    title: 'Photo Restoration',
    desc: 'Archival restoration of cracked, creased, water-damaged, and faded heirloom prints.',
    icon: History,
    image: siteImages.services.imageEditing.restorationSample,
  },
  {
    title: 'Beauty Retouch',
    desc: 'Micro-dodge & burn, skin texture preservation, blemish removal, and bridal radiance.',
    icon: Heart,
    image: siteImages.services.imageEditing.portraitAfter,
  },
  {
    title: 'Object Removal',
    desc: 'Seamless elimination of photobombers, exit signs, distracting wires, and reflections.',
    icon: Eye,
    image: siteImages.services.imageEditing.bridalBefore,
  },
];

export default function ImageEditingPage() {
  const { title, subtitle, description, offer } = imageEditingContent;

  return (
    <PageContainer className="py-12">
      <ServiceHero
        title={title}
        subtitle={subtitle}
        description={description}
        heroImage={siteImages.services.imageEditing.hero}
      />

      {/* Interactive Draggable Before & After Comparison Slider matching Page 5 of Mockup */}
      <BeforeAfter />

      {/* More Editing Services Grid matching Page 5 of Mockup */}
      <section className="my-16">
        <div className="mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
            EXPANDED POST-PRODUCTION
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2D3A47]">
            More Editing Services
          </h2>
          <p className="text-sm text-[#2D3A47]/75 mt-2 font-sans max-w-2xl">
            Specialized retouching and restoration capabilities crafted for professional photographers and commercial brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-[#FFFDF9] rounded-2xl p-4 border border-[#2D3A47]/10 hover:border-[#B46A72]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4 bg-[#F6EFE6]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#B46A72]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#2D3A47] group-hover:text-[#B46A72] transition-colors mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#2D3A47]/75 leading-relaxed font-sans">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Complimentary Trial Offer Card */}
      {offer && (
        <section className="my-16 bg-[#F1F4ED] rounded-3xl p-8 sm:p-10 border border-[#A8B58A]/30 shadow-xs">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-2">
              RISK-FREE EVALUATION
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47] mb-2">
              {offer.title}
            </h3>
            <p className="text-sm text-[#2D3A47]/80 leading-relaxed font-sans mb-4">
              {offer.description}
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6D7F49]">
              <Sparkles className="w-4 h-4" />
              <span>Complimentary sample returned within 24–48 hours</span>
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Form */}
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Submit Files for Free Sample / Editing Quote"
          description="Send us your instructions or provide cloud links for your sample images."
          fields={[
            { name: 'name', label: 'Studio / Client Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Phone / WhatsApp', required: true },
            { name: 'message', label: 'Editing Instructions & Image Link', type: 'textarea', placeholder: 'Paste Google Drive, Dropbox, or WeTransfer links and specific instructions', required: true },
          ]}
          submitButtonText="Submit for Sample Retouch"
        />
      </div>
    </PageContainer>
  );
}
