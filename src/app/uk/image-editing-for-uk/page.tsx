import PageContainer from '@/components/layout/PageContainer';
import ServiceHero from '@/components/services/ServiceHero';
import BeforeAfter from '@/components/common/BeforeAfter';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { ukImageEditingContent } from '@/content/uk/image-editing';
import { constructMetadata } from '@/lib/metadata';
import { Sparkles, CheckCircle } from 'lucide-react';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Image Editing for UK — Digital Retouching & Restoration for UK Studios',
  description: 'Digital post-production, fine-art portrait retouching, and vintage restoration services tailored for UK wedding photographers and creative agencies.',
});

export default function ImageEditingForUKPage() {
  const { title, subtitle, description, serviceList, offer } = ukImageEditingContent;

  return (
    <PageContainer className="py-12">
      <ServiceHero
        title={title}
        subtitle={subtitle}
        description={description}
        heroImage={siteImages.services.imageEditing.hero}
      />

      {/* Interactive Before & After Slider */}
      <BeforeAfter />

      {/* UK Studio Editing Capabilities */}
      {serviceList && serviceList.length > 0 && (
        <section className="my-16 bg-[#FFFDF9] rounded-3xl p-8 border border-[#2D3A47]/10 shadow-xs">
          <h3 className="font-editorial text-2xl font-bold text-[#2D3A47] mb-6">
            Specialized Services for UK Photographers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceList.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFF7E6]">
                <CheckCircle className="w-4 h-4 text-[#6D7F49] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#2D3A47]/85 font-sans leading-relaxed">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Complimentary Trial Card */}
      {offer && (
        <section className="my-16 bg-[#F1F4ED] rounded-3xl p-8 sm:p-10 border border-[#A8B58A]/30 shadow-xs">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-2">
              COMPLIMENTARY UK TRIAL
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
          title="Submit Sample Files for UK Editing Trial"
          description="Send 1–2 test RAW files with instructions for a complimentary test retouch."
          fields={[
            { name: 'name', label: 'Photographer / Studio Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'UK Phone / WhatsApp', required: true },
            { name: 'message', label: 'File Links & Editing Instructions', type: 'textarea', placeholder: 'Paste Dropbox, WeTransfer, or Google Drive download link', required: true },
          ]}
          submitButtonText="Submit for Complimentary UK Edit"
        />
      </div>
    </PageContainer>
  );
}
