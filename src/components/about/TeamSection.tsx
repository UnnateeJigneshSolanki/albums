import Image from 'next/image';
import { aboutContent } from '@/content/pages/about';
import { siteImages } from '@/lib/images';

const teamPhotos: Record<string, string> = {
  'Rajiv Panchal': siteImages.team.rajiv,
  'Mayank Panchal': siteImages.team.mayank,
  'Bhairavi Panchal': siteImages.team.bhairavi,
};

const cardAccents = [
  'bg-[#FFF7E6] border-[#D8C29A]/40',
  'bg-[#F0F4F8] border-[#A9B7C6]/40',
  'bg-[#FDF3F5] border-[#F7C8D3]/50',
];

export default function TeamSection() {
  const { team } = aboutContent;

  return (
    <section className="my-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
          LEADERSHIP &amp; ARTISTRY
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#2D3A47]">
          Meet Our Team
        </h2>
        <p className="text-sm text-[#2D3A47]/70 mt-2 font-sans">
          The artisans, production directors, and creative visionaries behind every Ultra Albums heirloom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, idx) => {
          const photo = teamPhotos[member.name] || siteImages.team.rajiv;
          const accent = cardAccents[idx % cardAccents.length];

          return (
            <div
              key={idx}
              className={`rounded-3xl p-6 border ${accent} text-center shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between`}
            >
              {/* Arched Portrait Frame matching Mockup */}
              <div className="relative w-44 h-52 rounded-t-full rounded-b-2xl overflow-hidden shadow-md mb-5 bg-[#F6EFE6] border-2 border-white">
                <Image
                  src={photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="176px"
                />
              </div>

              <div>
                <h3 className="font-editorial text-xl font-bold text-[#2D3A47]">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#B46A72] mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
