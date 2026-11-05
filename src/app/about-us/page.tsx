import PageContainer from '@/components/layout/PageContainer';
import Breadcrumb from '@/components/common/Breadcrumb';
import CompanyIntroduction from '@/components/about/CompanyIntroduction';
import TeamSection from '@/components/about/TeamSection';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'About Us — Handcrafted Album Manufacturing & Design Studio Mumbai',
  description: 'Learn about Ultra Albums, founded in 2010 by photographers Rajiv Panchal, Mayank Panchal, and Bhairavi Panchal. Master bookbinding and bespoke album design.',
});

export default function AboutUsPage() {
  return (
    <PageContainer className="py-12">
      <Breadcrumb items={[{ label: 'About Us', href: '/about-us' }]} />
      <CompanyIntroduction />
      <TeamSection />
      <WhyChooseUs />
      <div className="my-16 max-w-2xl mx-auto">
        <EnquiryForm
          title="Connect with Our Founders &amp; Designers"
          description="Inquire about custom album manufacturing, partnership opportunities, or studio sample kits."
          fields={[
            { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Your Name', required: true },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Your Email', required: true },
            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Phone / WhatsApp', required: true },
            { name: 'message', label: 'Your Inquiry', type: 'textarea', placeholder: 'Tell us how we can help you or your photography studio', required: true },
          ]}
          submitButtonText="Send Message"
        />
      </div>
    </PageContainer>
  );
}
