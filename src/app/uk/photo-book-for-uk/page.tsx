import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { ukPhotoBookContent } from '@/content/uk/photo-book';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Photo Book for UK — Contemporary Flat-Opening Books',
  description: 'Contemporary, flat-opening photo books and parent books crafted on tear-resistant substrate with tracked express delivery across the UK.',
});

export default function PhotoBookForUKPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={ukPhotoBookContent.title}
        subtitle={ukPhotoBookContent.subtitle}
        category="UK Direct Collection"
        description={ukPhotoBookContent.description}
        heroImage={siteImages.products.photoBook.cover}
      />
      <ProductFeatures
        specifications={ukPhotoBookContent.specifications}
        features={ukPhotoBookContent.features}
        featureImage={siteImages.products.photoBook.lifestyle}
      />
      <CoverOptions
        title="Cover Styles for UK Photo Books"
        description="Choose from clear acrylic facepads, full-colour personalised wraps, and European woven linen."
        options={ukPhotoBookContent.coverOptions}
      />
      <ProductGallery items={ukPhotoBookContent.galleryPlaceholders} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="UK Photo Book Consultation"
          description="Inquire about parent book duplicates, personal travel collections, and express UK shipping."
          fields={[
            { name: 'name', label: 'Name / Studio', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'UK Phone / WhatsApp', required: true },
            { name: 'message', label: 'Book Dimensions & Quantities', type: 'textarea', placeholder: 'Tell us about the desired photo book format and page count', required: true },
          ]}
          submitButtonText="Request UK Photo Book Quote"
        />
      </div>
    </PageContainer>
  );
}
