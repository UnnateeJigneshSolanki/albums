import Image from 'next/image';

interface ImageGalleryProps {
  title?: string;
  caption?: string;
  items?: string[];
  columns?: 2 | 3 | 4;
}

const curatedGalleryImages = [
  '/images/home/hero-stack.jpg',
  '/images/home/open-spread.jpg',
  '/images/products/luxury-albums.jpg',
  '/images/products/flush-mount.jpg',
  '/images/home/wedding-sunset.jpg',
  '/images/products/box-and-bags.jpg',
];

export default function ImageGallery({
  title = 'Visual Gallery',
  caption = 'Explore binding details, panoramic spreads, and custom artisan covers.',
  items = [],
  columns = 3,
}: ImageGalleryProps) {
  if (!items || items.length === 0) return null;

  const colClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <section id="gallery" className="my-16 scroll-mt-24">
      <div className="mb-8">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6D7F49] block mb-1">
          STUDIO SHOWCASE
        </span>
        {title && (
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2D3A47]">
            {title}
          </h2>
        )}
        {caption && (
          <p className="text-sm text-[#2D3A47]/75 mt-2 font-sans max-w-2xl">
            {caption}
          </p>
        )}
      </div>

      <div className={`grid gap-6 ${colClasses}`}>
        {items.map((item, idx) => {
          const imgUrl = curatedGalleryImages[idx % curatedGalleryImages.length];
          return (
            <div
              key={idx}
              className="group bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#2D3A47]/10 hover:border-[#B46A72]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full aspect-4/3 overflow-hidden bg-[#F6EFE6]">
                <Image
                  src={imgUrl}
                  alt={item}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A47]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 bg-[#FFFDF9]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B46A72] block mb-0.5">
                  Collection {idx + 1}
                </span>
                <p className="text-xs text-[#2D3A47]/85 font-medium leading-snug">
                  {item}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
