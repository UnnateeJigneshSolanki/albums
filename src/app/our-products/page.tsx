import PageContainer from '@/components/layout/PageContainer';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProductGrid from '@/components/products/ProductGrid';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Our Products — Handcrafted Photo Albums & Presentation Caskets',
  description: 'Explore the complete range of handcrafted photo albums by Ultra Albums: Flush Mount, Layflat, Photo Books, Luxury Albums, Boxes and Bags, and Slip-in Albums.',
});

export default function OurProductsPage() {
  return (
    <PageContainer className="py-12">
      <Breadcrumb items={[{ label: 'Our Products', href: '/our-products' }]} />
      <ProductGrid />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Product Consultation &amp; Custom Sizing"
          description="Have specific dimensions or cover material requests? Send us your inquiry."
          fields={[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone Number', required: true },
            { name: 'message', label: 'Product Inquiry', type: 'textarea', placeholder: 'Tell us which album format or cover material you are interested in', required: true },
          ]}
          submitButtonText="Send Product Inquiry"
        />
      </div>
    </PageContainer>
  );
}
