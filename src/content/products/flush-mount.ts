import { siteImages } from '@/lib/images';

export const flushMountContent = {
  id: 'flush-mount-album',
  slug: 'flush-mount-album',
  title: 'Flush Mount Albums',
  titleAccent: 'Heirloom Perfection',
  subtitle: 'Hand-bound silver halide photographic prints mounted on rigid archival boards for seamless, uninterrupted panoramic spreads.',
  category: 'SIGNATURE HEIRLOOM ALBUM',
  heroImage: siteImages.products.flushMount.openSpread,

  description: [
    'Our flagship flush mount album represents the highest standard of photographic presentation. Each page is individually hand-bound by skilled artisans using time-honored bookbinding methods rather than automated machine glue, ensuring exceptional longevity, precise page alignment, and structural elegance.',
    'Photographic prints are exposed onto genuine Fujifilm Crystal Archive silver halide paper with a velvety lustre finish. Each print is mounted back-to-back with a dense archival board substrate in crisp white or dramatic black core, creating sturdy pages that lay completely flat without a center gutter cut.',
    'With nine bespoke cover finishes—ranging from diamond-polished crystal acrylic and supple full-wrap leather to archival European linen and engraved timber—each album is custom-tailored to celebrate your wedding or milestone story.',
  ],

  specifications: [
    { label: 'Binding Construction', value: 'Traditional artisan hand-binding with panoramic flat-opening spreads' },
    { label: 'Paper Stock', value: 'Fujifilm Crystal Archive silver halide photo paper with lustre finish' },
    { label: 'Core Substrate', value: 'Archival board core (available in pristine white or elegant black)' },
    { label: 'Standard Page Thickness', value: '1.0 mm rigid flush mount board (approx. 0.5 mm board + dual 0.5 mm prints)' },
    { label: 'Extra-Thick Option', value: '1.5 mm reinforced board for substantial heirloom weight and durability' },
    { label: 'Center Gutter', value: 'Zero image loss — uninterrupted continuous panoramic spreads' },
    { label: 'Popular Dimensions', value: '8 × 10, 10 × 10, 12 × 12, 10 × 14, 12 × 18 inches (custom sizing available)' },
  ],

  keyFeatures: [
    {
      title: 'Panoramic Flat-Opening Spreads',
      description: 'Pages open completely flat from corner to corner. Wide-angle landscapes and grand couple portraits flow across the double-page spread with no crease interruption.',
      icon: 'maximize',
    },
    {
      title: 'Archival Board Durability',
      description: 'Unlike flexible book paper, our thick archival boards withstand decades of frequent browsing without bending, dog-earing, or moisture warping.',
      icon: 'shield',
    },
    {
      title: 'Fujifilm Silver Halide Paper',
      description: 'Lustre-finished photographic paper delivers deep blacks, radiant skin tones, clean whites, and superior color stability that resists fading.',
      icon: 'sparkles',
    },
    {
      title: 'Artisan Hand Craftsmanship',
      description: 'Every spine is rounded, pressed, and finished by hand in our Mumbai workshop, ensuring strict quality control from cover to final page.',
      icon: 'award',
    },
  ],

  coverOptions: [
    {
      title: 'Acrylic-Crystal Cover Pad',
      description: 'A striking fine-art centerpiece. Your cover photograph is mounted beneath crystal-clear acrylic with diamond-polished edges and tapered bevels, paired with a leatherette spine.',
      image: siteImages.products.flushMount.acrylicCover,
    },
    {
      title: 'Handcrafted Leather Cover',
      description: 'Supple full-wrap genuine leather or premium vegan leatherette available in classic black, cognac, ivory, blush, and emerald with optional cameo window.',
      image: siteImages.products.flushMount.leatherCover,
    },
    {
      title: 'Archival Linen Cover Pad',
      description: 'Textured European linen cloth providing understated tactile elegance, personalized with directly printed or debossed couple names.',
      image: siteImages.products.photoBook.lifestyle,
    },
    {
      title: 'Art-Grade Canvas Cover',
      description: 'High-resolution canvas print treated with an invisible protective UV varnish coating that repels moisture, abrasion, and sunlight.',
      image: siteImages.hero.weddingCoupleSunset,
    },
    {
      title: 'Personalized Photo Cover',
      description: 'Full-bleed front and back photographic wrap protected with velvety anti-scratch matte lamination, customized with your wedding date and names.',
      image: siteImages.products.flushMount.cover,
    },
    {
      title: 'Brushed Metal Plate',
      description: 'Anodized aluminum or brushed silver plate featuring precision laser-etched names and dates for a sleek contemporary finish.',
      image: siteImages.products.flushMount.edgeDetail,
    },
    {
      title: 'Natural Wooden Face',
      description: 'Warm natural timber face with laser-engraved monogram or typography, designed to pair seamlessly with our handcrafted wooden caskets.',
      image: siteImages.products.luxuryAlbums.woodenCasket,
    },
    {
      title: 'Blind Debossing',
      description: 'Timeless deep-pressed lettering without foil, creating subtle architectural relief on leather and linen covers.',
      image: siteImages.hero.albumStack,
    },
    {
      title: 'Gold & Silver Metallic Foil',
      description: 'Radiant metallic foil stamping in mirror gold, champagne gold, or sterling silver, pressed with precision hot-stamp dies.',
      image: siteImages.products.luxuryAlbums.goldFoil,
    },
  ],

  gallery: [
    { url: siteImages.products.flushMount.openSpread, caption: 'Panoramic open spread showcasing continuous double-page imagery' },
    { url: siteImages.products.flushMount.cover, caption: 'Handcrafted flush mount album cover with refined edge stitching' },
    { url: siteImages.products.flushMount.acrylicCover, caption: 'Diamond-polished acrylic crystal face with bevelled borders' },
    { url: siteImages.products.flushMount.leatherCover, caption: 'Supple leather binding with gold foil typography and cameo window' },
  ],
};
