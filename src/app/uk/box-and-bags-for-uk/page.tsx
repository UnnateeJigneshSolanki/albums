import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { ukBoxAndBagsContent } from '@/content/uk/box-and-bags';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Box and Bags for UK — Protective Packaging & Display Boxes',
  description: 'Handcrafted rigid timber presentation boxes, leatherette carry cases, and presentation bags delivered directly across the UK.',
});

export default function BoxAndBagsForUKPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={ukBoxAndBagsContent.title}
        subtitle={ukBoxAndBagsContent.subtitle}
        category="UK Packaging"
        description={ukBoxAndBagsContent.description}
        heroImage={siteImages.products.boxAndBags.cover}
      />
      <ProductFeatures
        specifications={ukBoxAndBagsContent.specifications}
        features={ukBoxAndBagsContent.features}
        featureImage={siteImages.products.boxAndBags.carryCase}
      />
      <CoverOptions
        title="Lid Customization &amp; Cover Options"
        description="Match your box lid with your album cover using continuous photographic wraps, cameo cutouts, or foil monograms."
        options={ukBoxAndBagsContent.coverOptions}
      />
      <ProductGallery items={ukBoxAndBagsContent.galleryPlaceholders} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="UK Packaging Inquiry"
          description="Inquire about custom sizing, briefcase handle fixtures, and UK studio sample kits."
          fields={[
            { name: 'name', label: 'Name / Studio', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'UK Phone / WhatsApp', required: true },
            { name: 'message', label: 'Packaging Requirements', type: 'textarea', placeholder: 'Tell us about the album dimensions and desired packaging style', required: true },
          ]}
          submitButtonText="Send UK Packaging Inquiry"
        />
      </div>
    </PageContainer>
  );
}
