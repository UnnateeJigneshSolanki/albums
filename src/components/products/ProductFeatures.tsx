import Image from 'next/image';
import { ProductFeature, ProductSpecification } from '@/types/product';
import { Layers, Image as ImageIcon, ShieldCheck, Palette, Sparkles, Check } from 'lucide-react';

interface ProductFeaturesProps {
  features?: ProductFeature[];
  specifications?: ProductSpecification[];
  featureImage?: string;
}

const featureIcons = [Layers, ImageIcon, ShieldCheck, Palette, Sparkles, Check];

export default function ProductFeatures({
  features,
  specifications,
  featureImage = '/images/home/open-spread.jpg',
}: ProductFeaturesProps) {
  return (
    <div className="my-16 space-y-16">
      {/* Key Features with Image Visual Grid matching Mockup */}
      {features && features.length > 0 && (
        <section id="features" className="scroll-mt-24">
          <div className="mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
              DISTINCTIVE QUALITIES
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47]">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Open Spread Image Preview */}
            <div className="lg:col-span-5 relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-[#2D3A47]/10 bg-[#F6EFE6]">
              <Image
                src={featureImage}
                alt="Open panoramic spread showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A47]/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-editorial italic bg-black/30 backdrop-blur-xs p-2 rounded-lg">
                180° seamless layflat opening &bull; Archival preservation
              </div>
            </div>

            {/* Right: Feature Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => {
                const Icon = featureIcons[idx % featureIcons.length];
                return (
                  <div
                    key={idx}
                    className="bg-[#FFFDF9] rounded-xl p-4 border border-[#2D3A47]/10 hover:border-[#B46A72]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F7C8D3]/30 flex items-center justify-center text-[#B46A72] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-editorial text-sm font-bold text-[#2D3A47] mb-1 leading-snug">
                          {feat.title}
                        </h3>
                        <p className="text-xs text-[#2D3A47]/75 leading-relaxed font-sans">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Specifications Table matching Mockup - Clean Editorial */}
      {specifications && specifications.length > 0 && (
        <section id="specifications" className="scroll-mt-24">
          <div className="mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
              TECHNICAL DETAILS
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47]">
              Specifications &amp; Construction
            </h2>
          </div>

          <div className="bg-[#FFFDF9] rounded-2xl border border-[#2D3A47]/10 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F6EFE6] border-b border-[#2D3A47]/10 text-[#2D3A47]">
                <tr>
                  <th className="py-3 px-5 font-semibold w-1/3 text-xs uppercase tracking-wider">
                    Element
                  </th>
                  <th className="py-3 px-5 font-semibold text-xs uppercase tracking-wider">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2D3A47]/10">
                {specifications.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-[#FFF7E6]/50 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-[#2D3A47] align-top">
                      {spec.label}
                    </td>
                    <td className="py-3.5 px-5 text-[#2D3A47]/80 leading-relaxed align-top">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
