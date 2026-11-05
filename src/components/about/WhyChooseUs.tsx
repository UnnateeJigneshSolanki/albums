import { aboutContent } from '@/content/pages/about';
import { Award, Gift, Globe, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const { values, studioSampleOffer, worldwideShipping } = aboutContent;

  return (
    <section className="my-16 space-y-16">
      <div>
        <div className="mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
            CORE VALUES
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2D3A47]">
            Why Studios Trust Ultra Albums
          </h2>
          <p className="text-sm text-[#2D3A47]/75 mt-2 font-sans max-w-2xl">
            Our founding principles and quality promises to photographers, creative agencies, and families worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#2D3A47]/10 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-[#A8B58A]/30 flex items-center justify-center text-[#6D7F49] mb-4">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h3 className="font-editorial text-base font-bold text-[#2D3A47] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#2D3A47]/75 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2 Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#FDF3F5] rounded-2xl p-8 border border-[#B46A72]/20 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#B46A72] flex items-center justify-center text-white mb-3">
              <Gift className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#2D3A47] mb-1">
              {studioSampleOffer.title}
            </h3>
            <span className="inline-block bg-[#B46A72] text-white text-xs font-semibold px-3 py-0.5 rounded-full mb-3">
              {studioSampleOffer.discount}
            </span>
            <p className="text-sm text-[#2D3A47]/80 leading-relaxed font-sans">
              {studioSampleOffer.description}
            </p>
          </div>
        </div>

        <div className="bg-[#F0F4F8] rounded-2xl p-8 border border-[#A9B7C6]/30 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#2D3A47] flex items-center justify-center text-[#D8C29A] mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#2D3A47] mb-2">
              {worldwideShipping.title}
            </h3>
            <p className="text-sm text-[#2D3A47]/80 leading-relaxed font-sans">
              {worldwideShipping.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
