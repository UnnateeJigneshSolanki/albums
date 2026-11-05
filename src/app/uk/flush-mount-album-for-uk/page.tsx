import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { ukFlushMountContent } from '@/content/uk/flush-mount';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Flush Mount Album for UK — Handcrafted Wedding Albums',
  description: 'Hand-bound flush mount wedding albums crafted with traditional bookbinding techniques and direct tracked express delivery across the United Kingdom.',
});

export default function FlushMountAlbumForUKPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={ukFlushMountContent.title}
        subtitle={ukFlushMountContent.subtitle}
        category="UK Direct Collection"
        description={ukFlushMountContent.description}
        qualityGuarantee="100% Heirloom Quality Guarantee"
        heroImage={siteImages.products.flushMount.cover}
      />
      <ProductFeatures
        specifications={ukFlushMountContent.specifications}
        features={ukFlushMountContent.features}
        featureImage={siteImages.products.flushMount.openSpread}
      />
      <CoverOptions
        title="Cover Styles for UK Orders"
        description="Choose from optical acrylic, magazine-style full-grain leather wraps, and heritage British linen options."
        options={ukFlushMountContent.coverOptions}
      />
      <ProductGallery items={ukFlushMountContent.galleryPlaceholders} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="UK Flush Mount Album Consultation"
          description="Contact us for UK delivery schedules, studio sample swatches, and bespoke quote requests."
          fields={[
            { name: 'name', label: 'Name / Studio', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: 'UK Mobile / Phone Number', required: true },
            { name: 'message', label: 'Album & Delivery Details', type: 'textarea', placeholder: 'Tell us about your wedding album specifications and UK city/postal code', required: true },
          ]}
          submitButtonText="Request UK Consultation"
        />
      </div>
    </PageContainer>
  );
}
