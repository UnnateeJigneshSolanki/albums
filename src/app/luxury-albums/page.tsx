import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { luxuryAlbumsContent } from '@/content/products/luxury-albums';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Luxury Albums & Handcrafted Wooden Caskets — Ultra Albums Mumbai',
  description: 'Heirloom luxury wedding albums paired with handcrafted wooden caskets, personalized with laser engraving and 24k metallic foil stamping.',
});

export default function LuxuryAlbumsPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={luxuryAlbumsContent.title}
        subtitle={luxuryAlbumsContent.subtitle}
        category={luxuryAlbumsContent.category}
        description={luxuryAlbumsContent.description}
        heroImage={siteImages.products.luxuryAlbums.cover}
      />
      <ProductFeatures
        specifications={luxuryAlbumsContent.specifications}
        features={luxuryAlbumsContent.features}
        featureImage={siteImages.products.luxuryAlbums.woodenCasket}
      />
      <CoverOptions options={luxuryAlbumsContent.coverOptions} />
      <ProductGallery items={luxuryAlbumsContent.galleryPlaceholders} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Luxury Heirloom Album Consultation"
          description="Inquire about timber casket wood stains, Italian leathers, velvet linings, and personalized calligraphy."
          fields={[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone Number', required: true },
            { name: 'message', label: 'Custom Luxury Preferences', type: 'textarea', placeholder: 'Tell us about the casket finish, album dimensions, and personalisation', required: true },
          ]}
          submitButtonText="Request Luxury Casket Consultation"
        />
      </div>
    </PageContainer>
  );
}
