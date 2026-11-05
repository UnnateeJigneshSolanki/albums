import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import { ArrowRight } from 'lucide-react';
import { LeafMotif } from '@/components/common/BotanicalDecor';

export default function NotFound() {
  return (
    <PageContainer className="text-center py-28 flex flex-col items-center justify-center">
      <LeafMotif className="w-10 h-10 text-[#A8B58A] mb-3" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B46A72] block mb-2">
        ERROR 404
      </span>
      <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-[#2D3A47] mb-3">
        Page Not Found
      </h1>
      <p className="text-sm sm:text-base text-[#2D3A47]/75 font-sans max-w-md mb-8 leading-relaxed">
        The destination you are looking for does not exist or may have been updated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2D3A47] hover:bg-[#1E2730] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all"
      >
        <span>Return to Homepage</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </PageContainer>
  );
}
