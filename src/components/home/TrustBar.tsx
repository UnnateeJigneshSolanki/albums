import { BookOpen, Sparkles, ShieldCheck, Globe } from 'lucide-react';

const pillars = [
  {
    icon: BookOpen,
    title: 'Handcrafted Albums',
    description: 'Artisan hand-binding with traditional methods',
  },
  {
    icon: Sparkles,
    title: 'Custom Designs',
    description: 'Human artistry with personalized layout themes',
  },
  {
    icon: ShieldCheck,
    title: 'Premium Materials',
    description: 'Archival boards & Fujifilm Crystal Archive paper',
  },
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    description: 'Secure international export to UK & worldwide',
  },
];

export default function TrustBar() {
  return (
    <div className="bg-[#2D3A47] text-[#FFF7E6] py-8 border-y border-[#FFF7E6]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 group transition-transform duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFF7E6]/10 flex items-center justify-center shrink-0 border border-[#FFF7E6]/15 group-hover:bg-[#B46A72] transition-colors">
                  <Icon className="w-5 h-5 text-[#D8C29A] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-editorial text-sm sm:text-base font-semibold text-[#FFF7E6] tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-[#FFF7E6]/70 leading-snug hidden sm:block">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
