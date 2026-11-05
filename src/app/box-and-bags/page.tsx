import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { boxAndBagsContent } from '@/content/products/box-and-bags';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Boxes & Bags — Presentation Boxes & Carry Cases Mumbai',
  description: 'Rigid wooden presentation boxes with leatherette wraps, carry handles, Buckram display boxes, and padded travel cases.',
});

export default function BoxAndBagsPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={boxAndBagsContent.title}
        subtitle={boxAndBagsContent.subtitle}
        category={boxAndBagsContent.category}
        description={boxAndBagsContent.description}
        heroImage={siteImages.products.boxAndBags.cover}
      />
      <ProductFeatures
        specifications={boxAndBagsContent.specifications}
        features={boxAndBagsContent.features}
        featureImage={siteImages.products.boxAndBags.carryCase}
      />
      <CoverOptions options={boxAndBagsContent.coverOptions} />
      <ProductGallery items={boxAndBagsContent.galleryPlaceholders} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Box &amp; Bag Packaging Inquiry"
          description="Inquire about custom presentation boxes, handle styles, or studio display box options."
          fields={[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone Number', required: true },
            { name: 'message', label: 'Packaging Requirements', type: 'textarea', placeholder: 'Tell us about the album format you need packaging for and handle style', required: true },
          ]}
          submitButtonText="Send Packaging Inquiry"
        />
      </div>
    </PageContainer>
  );
}
