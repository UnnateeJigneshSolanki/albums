import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { ukSlipInContent } from '@/content/uk/slip-in';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Slip-in Albums for UK — Pocket Albums for Loose Photographic Prints',
  description: 'Convenient, moisture-resistant pocket slip-in photo albums holding up to 300 prints, delivered directly across the United Kingdom.',
});

export default function SlipInAlbumsForUKPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={ukSlipInContent.title}
        subtitle={ukSlipInContent.subtitle}
        category="UK Direct Collection"
        description={ukSlipInContent.description}
        heroImage={siteImages.products.slipIn.cover}
      />
      <ProductFeatures
        specifications={ukSlipInContent.specifications}
        features={ukSlipInContent.features}
        featureImage={siteImages.products.slipIn.pocketsDetail}
      />
      <CoverOptions
        title="Cover Varieties for UK Orders"
        description="Choose from stitched leatherette, personalized photographic wraps, and designer floral boards."
        options={ukSlipInContent.coverOptions}
      />
      <ProductGallery items={ukSlipInContent.galleryPlaceholders} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="UK Slip-in Album &amp; Lab Order Inquiry"
          description="Inquire about bulk studio order rates, custom embossed logos, or personal archival sets."
          fields={[
            { name: 'name', label: 'Name / Studio', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'UK Phone Number', required: true },
            { name: 'message', label: 'Order Quantity & Print Dimensions', type: 'textarea', placeholder: 'Tell us about print format (4x6, 5x7) and order volume', required: true },
          ]}
          submitButtonText="Submit UK Slip-in Inquiry"
        />
      </div>
    </PageContainer>
  );
}
