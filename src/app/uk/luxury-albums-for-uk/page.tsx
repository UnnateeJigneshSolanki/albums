import PageContainer from '@/components/layout/PageContainer';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import CoverOptions from '@/components/products/CoverOptions';
import ProductGallery from '@/components/products/ProductGallery';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { ukLuxuryAlbumsContent } from '@/content/uk/luxury-albums';
import { constructMetadata } from '@/lib/metadata';
import { siteImages } from '@/lib/images';

export const metadata = constructMetadata({
  title: 'Luxury Albums for UK — Heirloom Wedding Albums with Handcrafted Timber Caskets',
  description: 'Luxury wedding albums paired with handcrafted wooden caskets, personalized typography, and direct express courier delivery across the UK.',
});

export default function LuxuryAlbumsForUKPage() {
  return (
    <PageContainer className="py-12">
      <ProductHero
        title={ukLuxuryAlbumsContent.title}
        subtitle={ukLuxuryAlbumsContent.subtitle}
        category="UK Direct Collection"
        description={ukLuxuryAlbumsContent.description}
        heroImage={siteImages.products.luxuryAlbums.cover}
      />
      <ProductFeatures
        specifications={ukLuxuryAlbumsContent.specifications}
        features={ukLuxuryAlbumsContent.features}
        featureImage={siteImages.products.luxuryAlbums.woodenCasket}
      />
      <CoverOptions
        title="Luxury Covers &amp; Casket Finishes for UK Clients"
        description="Choose from rich Italian leathers, timber casket stains, velvet linings, and laser-carved monograms."
        options={ukLuxuryAlbumsContent.coverOptions}
      />
      <ProductGallery items={ukLuxuryAlbumsContent.galleryPlaceholders} />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="UK Luxury Album &amp; Casket Consultation"
          description="Inquire about timber casket finishes, custom monogram engraving, and direct express UK delivery."
          fields={[
            { name: 'name', label: 'Name / Studio', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: 'UK Contact Number', required: true },
            { name: 'message', label: 'Casket & Album Preferences', type: 'textarea', placeholder: 'Tell us about your wedding date, required casket finish, and album format', required: true },
          ]}
          submitButtonText="Request UK Casket Consultation"
        />
      </div>
    </PageContainer>
  );
}
