import { siteImages } from '@/lib/images';

export const layflatContent = {
  id: 'layflat',
  slug: 'layflat',
  title: 'Layflat Albums',
  titleAccent: 'Panoramic Elegance',
  subtitle: 'Continuous double-page spreads opening flat without a center gutter, engineered with lighter substrates for higher page capacities.',
  category: 'PANORAMIC FINE ART ALBUM',
  heroImage: siteImages.products.layflat.openSpread,

  description: [
    'Layflat albums combine the breathtaking visual impact of panoramic double-page spreads with the agility of a lighter, sleeker book. Designed for couples and photographers who want generous page counts without excessive bulk, layflat books allow your images to glide effortlessly across the center fold.',
    'In our digital age, milestone photographs are all too easily trapped inside phones and hard drives. A premium layflat album brings these memories into the physical world—letting you relive the shared laughter, celebratory rituals, and grand scenery across unbroken spreads.',
    'Whether documenting a destination wedding, a baby’s first year, or a once-in-a-lifetime family adventure, our layflat albums deliver rich photo-lab color saturation and enduring binding elegance.',
  ],

  specifications: [
    { label: 'Binding Architecture', value: 'Specialized hinge-free layflat binding with true 180° flat opening' },
    { label: 'Center Gutter', value: 'Zero image distortion or loss across the double-page center seam' },
    { label: 'Substrate Weight', value: 'Lightweight archival flex-core enabling up to 80–100 pages per volume' },
    { label: 'Print Technology', value: 'High-density professional photo-lab continuous color printing' },
    { label: 'Popular Dimensions', value: '8 × 10, 10 × 10, 12 × 12, 9 × 12, 11 × 14 inches' },
    { label: 'Cover Compatibility', value: 'Acrylic Crystal, Leatherette, Linen, Full-Bleed Photo Wrap, Timber' },
  ],

  keyFeatures: [
    {
      title: 'True 180° Flat Opening',
      description: 'Lies completely flat on a table or lap without holding down pages. Grand panoramic group shots and scenic landscapes remain crisp and visible.',
      icon: 'maximize',
    },
    {
      title: 'High Page Capacity',
      description: 'The slim, flexible core allows albums with up to 100 pages, providing a comprehensive narrative without excessive weight.',
      icon: 'layers',
    },
    {
      title: 'Rich Photo-Lab Color Saturation',
      description: 'Printed with high-density pigments that capture subtle bridal lace textures, deep evening skies, and authentic skin tones.',
      icon: 'palette',
    },
    {
      title: 'Rounded Spine & Italic Binding',
      description: 'Artisan hand-turned spine with italic binding profile that rests smoothly when closed and opens gracefully without stress.',
      icon: 'book',
    },
  ],

  coverOptions: [
    {
      title: 'Acrylic-Crystal Face',
      description: 'Crystal acrylic front with diamond-polished edges, backed with sleek leatherette on the spine and back cover.',
      image: siteImages.products.flushMount.acrylicCover,
    },
    {
      title: 'Custom Photo Hardcover',
      description: 'Seamless wrap-around cover featuring your hero portrait with protective matte or velvety anti-scratch lamination.',
      image: siteImages.products.layflat.cover,
    },
    {
      title: 'European Archival Linen',
      description: 'Tactile natural woven linen available in oat, sage, rosewater, charcoal, and dusty sky hues.',
      image: siteImages.products.photoBook.lifestyle,
    },
    {
      title: 'Artisan Leatherette',
      description: 'Smooth or lightly pebbled vegan leatherette with tailored perimeter stitching and custom foil typography.',
      image: siteImages.products.flushMount.leatherCover,
    },
  ],

  gallery: [
    { url: siteImages.products.layflat.openSpread, caption: 'Layflat album lying flat across double-page landscape spread' },
    { url: siteImages.products.layflat.cover, caption: 'Custom hardcover binding with soft matte protective lamination' },
    { url: siteImages.products.layflat.panoramicView, caption: 'Double-page panoramic portrait with unbroken center fold' },
  ],
};
