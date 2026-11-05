import { UploadCloud, PenTool, CheckCircle, Package } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Share Your Photos',
    desc: 'Upload your selected high-resolution photographs via cloud link or USB drive.',
    icon: UploadCloud,
    bg: 'bg-[#F7C8D3]',
    text: 'text-[#B46A72]',
  },
  {
    num: '02',
    title: 'We Design',
    desc: 'Our in-house artists craft an artful, narrative layout tailored to your style.',
    icon: PenTool,
    bg: 'bg-[#A9B7C6]',
    text: 'text-[#2D3A47]',
  },
  {
    num: '03',
    title: 'Review & Approve',
    desc: 'Inspect your soft-copy PDF proof, request tweaks, and give final sign-off.',
    icon: CheckCircle,
    bg: 'bg-[#A8B58A]',
    text: 'text-[#6D7F49]',
  },
  {
    num: '04',
    title: 'Receive Your Album',
    desc: 'Your heirloom volume is hand-bound, boxed, and safely delivered to your door.',
    icon: Package,
    bg: 'bg-[#D8C29A]',
    text: 'text-[#7A6237]',
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 bg-[#FFF7E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-2">
            OUR PROCESS
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2D3A47] tracking-tight">
            Simple, Seamless{' '}
            <span className="font-script-accent font-normal italic text-[#B46A72]">
              &amp; Personalized
            </span>
          </h2>
          <p className="text-sm text-[#2D3A47]/70 mt-3 font-sans">
            From initial photo submission to doorstep delivery, every step is designed for effortless collaboration.
          </p>
        </div>

        {/* 4 Connected Process Cards matching Mockup */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[1.5px] bg-[#2D3A47]/15 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.num}
                  className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#2D3A47]/10 shadow-xs hover:shadow-lg transition-all text-center flex flex-col items-center justify-between"
                >
                  {/* Number Badge */}
                  <div
                    className={`w-12 h-12 rounded-full ${st.bg} flex items-center justify-center font-editorial font-bold text-sm text-[#2D3A47] mb-4 shadow-xs`}
                  >
                    {st.num}
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#FFF7E6] flex items-center justify-center text-[#2D3A47] mb-3 border border-[#2D3A47]/10">
                    <Icon className="w-5 h-5 text-[#2D3A47]/80" />
                  </div>

                  <h3 className="font-editorial text-lg font-bold text-[#2D3A47] mb-2 leading-tight">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#2D3A47]/70 leading-relaxed font-sans">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
