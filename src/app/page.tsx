import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import ProductOverview from '@/components/home/ProductOverview';
import ServicesOverview from '@/components/home/ServicesOverview';
import DesignThemes from '@/components/home/DesignThemes';
import WorkProcess from '@/components/home/WorkProcess';
import HomeContact from '@/components/home/HomeContact';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Ultra Albums — Handcrafted Photo Albums & Design Studio Mumbai',
  description: 'Ultra Albums manufactures premium flush mount albums, seamless layflat books, luxury wooden caskets, and professional wedding album design services.',
});

export default function HomePage() {
  return (
    <main className="w-full">
      <HeroSection />
      <TrustBar />
      <ProductOverview />
      <ServicesOverview />
      <DesignThemes />
      <WorkProcess />
      <HomeContact />
    </main>
  );
}
