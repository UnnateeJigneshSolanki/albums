import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { flushMountContent } from '@/content/products/flush-mount';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Flush Mount Albums — Handcrafted Heirloom Albums Mumbai',
  description: 'Hand-bound flush mount photo albums with Fujifilm Crystal Archive silver halide paper, rigid archival board substrates, and bespoke artisan covers.',
});

export default function FlushMountAlbumPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={flushMountContent.title}
        subtitle={flushMountContent.subtitle}
        category={flushMountContent.category}
        description={flushMountContent.description}
        heroImage={flushMountContent.heroImage}
      />
      <ProductFeatures
        specifications={flushMountContent.specifications}
        features={flushMountContent.keyFeatures}
        featureImage={siteImages.products.flushMount.openSpread}
      />
      <CoverOptions options={flushMountContent.coverOptions} />
      <ProductGallery items={flushMountContent.gallery.map((g) => g.caption)} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Flush Mount Album Enquiry"
          description="Inquire about custom dimensions, paper finishes, or cover options for flush mount albums."
          fields={[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone / WhatsApp', required: true },
            { name: 'message', label: 'Album Specifications', type: 'textarea', placeholder: 'Tell us your preferred size, page count, and cover preference', required: true },
          ]}
          submitButtonText="Submit Album Enquiry"
        />
      </div>
    </PageContainer>
  );
}
