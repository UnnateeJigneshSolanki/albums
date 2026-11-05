import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { photoBookContent } from '@/content/products/photo-book';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Photo Books — Lightweight Flat-Opening Books Mumbai',
  description: 'Versatile coffee-table photo books printed on non-tearable substrate with feather-touch, matt, and gloss finishes.',
});

export default function PhotoBookPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={photoBookContent.title}
        subtitle={photoBookContent.subtitle}
        category={photoBookContent.category}
        description={photoBookContent.description}
        heroImage={siteImages.products.photoBook.cover}
      />
      <ProductFeatures
        specifications={photoBookContent.specifications}
        features={photoBookContent.features}
        featureImage={siteImages.products.photoBook.lifestyle}
      />
      <CoverOptions options={photoBookContent.coverOptions} />
      <ProductGallery items={photoBookContent.galleryPlaceholders} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Photo Book Order &amp; Bulk Studio Inquiry"
          description="Inquire about parent book sets, personal archives, or bulk studio discount tiers."
          fields={[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone / WhatsApp', required: true },
            { name: 'message', label: 'Book Details', type: 'textarea', placeholder: 'Tell us about the desired book size (6x8, 9x12, 12x18) and quantity', required: true },
          ]}
          submitButtonText="Submit Photo Book Inquiry"
        />
      </div>
    </PageContainer>
  );
}
