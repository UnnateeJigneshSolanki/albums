import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { slipInContent } from '@/content/products/slip-in';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Slip-in Albums — Pocket Albums for Loose Prints Mumbai',
  description: 'High-capacity slip-in albums with photo-safe, moisture-resistant dimpled polypropylene pockets for organizing loose prints.',
});

export default function SlipInAlbumsPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={slipInContent.title}
        subtitle={slipInContent.subtitle}
        category={slipInContent.category}
        description={slipInContent.description}
        heroImage={siteImages.products.slipIn.cover}
      />
      <ProductFeatures
        specifications={slipInContent.specifications}
        features={slipInContent.features}
        featureImage={siteImages.products.slipIn.pocketsDetail}
      />
      <CoverOptions options={slipInContent.coverOptions} />
      <ProductGallery items={slipInContent.galleryPlaceholders} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Slip-in Album Order &amp; Lab Inquiry"
          description="Inquire about bulk studio lab orders, custom embossed logos, or archival photo capacities."
          fields={[
            { name: 'name', label: 'Name / Studio', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone Number', required: true },
            { name: 'message', label: 'Order Quantity & Print Size', type: 'textarea', placeholder: 'Tell us about print size (4x6, 5x7) and order volume', required: true },
          ]}
          submitButtonText="Submit Slip-in Inquiry"
        />
      </div>
    </PageContainer>
  );
}
