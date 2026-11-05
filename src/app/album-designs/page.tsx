import PageContainer from '@/components/layout/PageContainer';
import Breadcrumb from '@/components/common/Breadcrumb';
import AlbumDesignGallery from '@/components/wedding/AlbumDesignGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { albumDesignsContent } from '@/content/wedding/album-designs';
import { constructMetadata } from '@/lib/metadata';
import { LeafMotif } from '@/components/common/BotanicalDecor';

export const metadata = constructMetadata({
  title: 'Wedding Album Designs — Indian & Western Layouts by Ultra Albums',
  description: 'Custom wedding album layouts designed from scratch by Ultra Albums for Indian celebrations, Western fine-art weddings, and family milestones.',
});

export default function AlbumDesignsPage() {
  const { title, introParagraphs, contactForm } = albumDesignsContent;

  return (
    <PageContainer className="py-12">
      <Breadcrumb
        items={[
          { label: 'Wedding Albums', href: '/wedding-photo-albums' },
          { label: 'Wedding Album Designs', href: '/album-designs' },
        ]}
      />

      <div className="mb-14">
        <div className="inline-flex items-center gap-2 mb-2">
          <LeafMotif className="w-4 h-4 text-[#A8B58A]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49]">
            BESPOKE LAYOUTS
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

      <AlbumDesignGallery />

      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title={contactForm.title}
          description="Tell us about your album design theme preferences, photo count, and preferred spread styles."
          fields={contactForm.fields}
          submitButtonText={contactForm.submitButtonText}
        />
      </div>
    </PageContainer>
  );
}
