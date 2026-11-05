import { CoverOption } from '@/types/product';
import CoverCard from './CoverCard';

interface CoverOptionsProps {
  title?: string;
  description?: string;
  options?: CoverOption[];
}

export default function CoverOptions({
  title = 'Cover Options — The Story Starts Here',
  description = 'Ultra Albums offers a comprehensive collection of cover materials, custom embellishments, and handcrafted finishing techniques.',
  options,
}: CoverOptionsProps) {
  if (!options || options.length === 0) return null;

  return (
    <section id="cover-options" className="my-16 scroll-mt-24">
      <div className="mb-8">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
          BESPOKE ARTISANRY
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47]">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-[#2D3A47]/75 mt-2 font-sans max-w-2xl">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((opt, idx) => (
          <CoverCard key={idx} cover={opt} index={idx} />
        ))}
      </div>
    </section>
  );
}
