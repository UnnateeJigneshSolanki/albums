import { albumDesignsContent } from '@/content/wedding/album-designs';
import ImageGallery from '@/components/common/ImageGallery';

export default function AlbumDesignGallery() {
  const { designCategories, designGallery } = albumDesignsContent;

  return (
    <div className="space-y-16 my-12">
      {designCategories.map((cat) => (
        <div key={cat.id} className="bg-[#FFFDF9] rounded-3xl p-8 border border-[#2D3A47]/10 shadow-xs">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
            WEDDING AESTHETIC
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47] mb-2">{cat.title}</h2>
          <p className="text-sm text-[#2D3A47]/80 leading-relaxed font-sans max-w-2xl mb-6">{cat.description}</p>
          <ImageGallery
            items={cat.galleryPlaceholders}
            caption={cat.caption}
            columns={3}
          />
        </div>
      ))}

      <div className="bg-[#FFFDF9] rounded-3xl p-8 border border-[#2D3A47]/10 shadow-xs">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
          STUDIO CURATION
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47] mb-2">{designGallery.title}</h2>
        <p className="text-sm text-[#2D3A47]/80 leading-relaxed font-sans max-w-2xl mb-6">{designGallery.caption}</p>
        <ImageGallery
          items={designGallery.placeholders}
          columns={3}
        />
      </div>
    </div>
  );
}
