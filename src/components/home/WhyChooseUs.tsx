import { homeContent } from '@/content/pages/home';
import { ShieldCheck, HeartHandshake, Award, Truck } from 'lucide-react';

const icons = [ShieldCheck, HeartHandshake, Award, Truck];

export default function WhyChooseUs() {
  const { trustPillars } = homeContent;

  return (
    <section className="py-20 bg-[#FFFDF9] border-t border-[#2D3A47]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-2">
            OUR COMMITMENT
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D3A47] tracking-tight">
            Why Choose <span className="font-script-accent font-normal italic text-[#B46A72]">Ultra Albums</span>
          </h2>
          <p className="text-sm text-[#2D3A47]/70 mt-3 font-sans">
            Our founding principles and quality promises to photographers, studios, and families worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((vp, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-[#FFF7E6] rounded-2xl p-6 border border-[#2D3A47]/10 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F7C8D3]/30 flex items-center justify-center text-[#B46A72] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#2D3A47] mb-2 leading-tight">
                    {vp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D3A47]/75 leading-relaxed font-sans">
                    {vp.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
