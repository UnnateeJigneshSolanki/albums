import { siteImages } from '@/lib/images';

export const homeContent = {
  hero: {
    badge: 'PREMIUM PHOTO ALBUMS',
    title: 'Preserve Your Special Moments',
    titleAccent: 'for a Lifetime',
    subtitle: 'Custom handcrafted albums, fine art photo books, and bespoke album designing for life’s most precious stories.',
    primaryCta: { text: 'Explore Products', link: '/our-products' },
    secondaryCta: { text: 'Our Services', link: '/album-designing' },
    image: siteImages.hero.albumStack,
    estYear: 'EST. 2010',
  },

  trustPillars: [
    { title: 'Handcrafted Albums', subtitle: 'Artisan bookbinding' },
    { title: 'Bespoke Layouts', subtitle: 'Tailored human design' },
    { title: 'Archival Papers', subtitle: 'Fujifilm Crystal lustre' },
    { title: 'Worldwide Delivery', subtitle: 'Safely boxed for transit' },
  ],

  curatedRange: {
    label: 'OUR PRODUCTS',
    title: 'A Curated Range of Photo Albums',
    description: 'Every story deserves its own heirloom. Choose from rigid panoramic flush mount albums, lightweight layflat books, and bespoke presentation boxes.',
    categories: [
      {
        title: 'Flush Mount Albums',
        slug: 'flush-mount-album',
        href: '/flush-mount-album',
        tag: 'Heirloom Favorite',
        description: 'Substantial archival board pages mounted with seamless panoramic spreads for generations of viewing.',
        image: siteImages.products.flushMount.cover,
      },
      {
        title: 'Layflat Albums',
        slug: 'layflat',
        href: '/layflat',
        tag: 'Panoramic Spreads',
        description: 'Opens completely flat without center gutter loss, allowing wide landscape and wedding portraits to shine.',
        image: siteImages.products.layflat.cover,
      },
      {
        title: 'Photo Books',
        slug: 'photo-book',
        href: '/photo-book',
        tag: 'Everyday & Milestones',
        description: 'Printed on durable non-tearable paper with feather-touch, matt, or glossy finishes in flexible sizes.',
        image: siteImages.products.photoBook.cover,
      },
      {
        title: 'Luxury Albums',
        slug: 'luxury-albums',
        href: '/luxury-albums',
        tag: 'Bespoke Casket',
        description: 'Handcrafted genuine leather and acrylic faces paired with an engraved artisan wooden presentation casket.',
        image: siteImages.products.luxuryAlbums.cover,
      },
      {
        title: 'Boxes & Bags',
        slug: 'box-and-bags',
        href: '/box-and-bags',
        tag: 'Signature Packaging',
        description: 'Rigid wooden boxes with leatherette wrap, display cases, and protective carry handles.',
        image: siteImages.products.boxAndBags.cover,
      },
      {
        title: 'Slip-in Albums',
        slug: 'slip-in-albums',
        href: '/slip-in-albums',
        tag: 'Archival Storage',
        description: 'Ultrasonic-welded dimpled polypropylene pockets providing moisture-resistant storage for up to 300 loose prints.',
        image: siteImages.products.slipIn.cover,
      },
    ],
  },

  servicesOverview: {
    label: 'OUR SERVICES',
    title: 'End-to-End Album',
    titleAccent: 'Solutions',
    description: 'From bespoke album designing and nuanced retouching to nationwide photography and cinematic video, we bring your memories to life with precision and care.',
    image: siteImages.services.albumDesigning.hero,
    secondaryImage: siteImages.hero.weddingCoupleSunset,
    services: [
      {
        id: 'album-designing',
        title: 'Album Designing',
        href: '/album-designing',
        description: 'Custom layouts crafted by seasoned designers with theme choices, soft-copy proofs, and unlimited revision rounds.',
        icon: 'book-open',
      },
      {
        id: 'image-editing',
        title: 'Image Editing',
        href: '/image-editing',
        description: 'Advanced retouching, beauty correction, scratch removal, and precise clipping paths by digital artists with 10+ years of expertise.',
        icon: 'sliders',
      },
      {
        id: 'photography',
        title: 'Photography & Videography',
        href: '/photography',
        description: 'A dedicated team of 15+ photographers and cinematographers traveling nationwide for candid and traditional celebrations.',
        icon: 'camera',
      },
    ],
  },

  designThemes: {
    label: 'EXPLORE',
    title: 'Design Themes',
    description: 'Explore signature visual styles curated for traditional ceremonies, romantic wedding editorials, and modern minimalist layouts.',
    themes: siteImages.themes,
  },

  process: {
    label: 'OUR PROCESS',
    title: 'Simple, Seamless & Personalized',
    subtitle: 'From initial photo submission to doorstep delivery, every step is handled with dedication and open collaboration.',
    steps: [
      {
        step: '01',
        title: 'Share Your Photos',
        description: 'Submit your selected wedding or milestone photographs along with your aesthetic preferences.',
        badgeColor: 'bg-[#F7C8D3] text-[#984E56]',
      },
      {
        step: '02',
        title: 'We Design',
        description: 'Our in-house artists curate and arrange your images into an editorial storytelling layout.',
        badgeColor: 'bg-[#A9B7C6] text-[#2D3A47]',
      },
      {
        step: '03',
        title: 'Review & Approve',
        description: 'Review a digital soft proof, request adjustments, and approve your layout before printing.',
        badgeColor: 'bg-[#A8B58A] text-[#556436]',
      },
      {
        step: '04',
        title: 'Receive Your Album',
        description: 'Your album is hand-bound with silver halide prints and delivered in secure export packaging.',
        badgeColor: 'bg-[#D8C29A] text-[#6D1B28]',
      },
    ],
  },

  aboutPreview: {
    label: 'OUR HERITAGE',
    title: 'A Passion for Preserving Memories Since 2010',
    description: [
      'Founded by seasoned photographers Rajiv Panchal, Mayank Panchal, and Bhairavi Panchal, Ultraa Albums was born from a desire to solve a genuine challenge: creating heirloom photo albums that faithfully reproduce true colors and withstand decades of love without compromise.',
      'From our dedicated workshop in Mumbai, we blend traditional bookbinding methods with modern photographic papers, crafting timeless albums for clients across India and internationally.',
    ],
    cta: { text: 'Learn More About Us', link: '/about-us' },
    image: siteImages.hero.craftingHand,
  },

  finalCta: {
    label: 'LET’S CREATE',
    title: 'Something Beautiful',
    description: 'Ready to turn your wedding or family celebration into an exquisite heirloom? Our design team is ready to guide you.',
    ctaText: 'Get in Touch',
    ctaLink: '/contact-us',
  },
};
