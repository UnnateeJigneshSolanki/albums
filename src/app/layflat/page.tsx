import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { layflatContent } from '@/content/products/layflat';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Layflat Albums — 180° Panoramic Photo Books Mumbai',
  description: 'Layflat photo albums engineered to open completely flat across double-page spreads with uninterrupted landscape visibility.',
});

export default function LayflatAlbumPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={layflatContent.title}
        subtitle={layflatContent.subtitle}
        category={layflatContent.category}
        description={layflatContent.description}
        heroImage={layflatContent.heroImage}
      />
      <ProductFeatures
        specifications={layflatContent.specifications}
        features={layflatContent.keyFeatures}
        featureImage={siteImages.products.layflat.openSpread}
      />
      <CoverOptions options={layflatContent.coverOptions} />
      <ProductGallery items={layflatContent.gallery.map((g) => g.caption)} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Layflat Album Enquiry"
          description="Request pricing, layout templates, or cover samples for seamless panoramic layflat albums."
          fields={[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone Number', required: true },
            { name: 'message', label: 'Inquiry Details', type: 'textarea', placeholder: 'Tell us about your album project requirements', required: true },
          ]}
          submitButtonText="Request Layflat Pricing"
        />
      </div>
    </PageContainer>
  );
}
