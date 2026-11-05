import { siteImages } from '@/lib/images';

export const aboutContent = {
  hero: {
    label: 'OUR STORY',
    title: 'About Ultra Albums',
    titleAccent: 'Crafting Heirlooms',
    subtitle: 'From a personal photographer’s quest for quality binding in 2010 to a premier photo album manufacturing studio serving couples and photographers worldwide.',
    image: siteImages.hero.albumStack,
  },

  narrative: [
    {
      title: 'Born from a Passion for Photography',
      paragraphs: [
        'Ultra Albums was founded by photographers who understand the sacred value of a fleeting moment. Our journey began in 2010 when our founders were actively capturing weddings across India and abroad.',
        'During those early assignments, finding albums that matched the emotion of the day proved frustratingly difficult. Commercial options either distorted photograph colors, offered fragile machine bindings that broke with use, or carried exorbitant pricing that made premium albums inaccessible to everyday couples.',
        'We accepted this challenge as our calling. In 2012, Ultra Albums was established in Mumbai with a singular mission: to handcraft wedding albums that reproduce photographic prints faithfully, endure generations of handling, and remain accessible to photographers and couples alike.',
      ],
    },
    {
      title: 'Artisan Craftsmanship & Archival Materials',
      paragraphs: [
        'Every album that leaves our Mumbai studio is an individual piece of craftsmanship. Our pages are not simply mass-glued; they are hand-bound using traditional bookbinding methods with archival core substrates and genuine silver halide photographic papers.',
        'From hand-turned leather corners and diamond-polished acrylic crystal covers to custom velvet linings and bespoke wooden presentation caskets, we treat every album as an heirloom destined to be held by children and grandchildren.',
        'To ensure our work reaches international clients in pristine condition, we engineer reinforced export packaging designed to withstand long-distance transit across the globe.',
      ],
    },
  ],

  stats: [
    { value: 'Experienced', label: 'Photographers & Artisans', description: 'Founded by professional photographers with global field experience since 2010.' },
    { value: 'In-House', label: 'Designing Department', description: 'Dedicated creative team curating customized layout narratives with digital soft proofs.' },
    { value: 'Archival', label: 'Quality Production', description: 'Authentic silver halide photographic prints mounted on rigid boards for generational longevity.' },
    { value: 'Worldwide', label: 'Export Delivery', description: 'Reinforced multi-layer packaging safely dispatched to studios across India and internationally.' },
  ],

  team: [
    {
      name: 'Rajiv Panchal',
      role: 'Founder',
      bio: 'Visionary behind Ultra Albums, bringing over a decade of photographic expertise and album craftsmanship to every collection.',
      image: siteImages.team.rajiv,
    },
    {
      name: 'Mayank Panchal',
      role: 'Co-Founder',
      bio: 'Steers production operations, material sourcing, and quality standards to ensure pristine results on every print run.',
      image: siteImages.team.mayank,
    },
    {
      name: 'Bhairavi Panchal',
      role: 'Head of Designing Department',
      bio: 'Leads our in-house layout design studio, curating emotional storytelling themes and personalized typography for clients.',
      image: siteImages.team.bhairavi,
    },
  ],

  values: [
    {
      title: 'Affordable Elegance',
      description: 'We believe generational heirlooms should be within reach. We optimize our workshop processes to provide luxurious presentation at transparent, accessible pricing.',
      icon: 'sparkles',
    },
    {
      title: 'Uncompromising Quality',
      description: 'Using authentic Fujifilm Crystal Archive papers, rigid archival boards, and hand-bound spine construction, our albums are built to last a lifetime.',
      icon: 'shield-check',
    },
    {
      title: 'Customer-Centric Care',
      description: 'We partner closely with couples and photographers, offering digital soft previews, responsive communication, and personal design guidance.',
      icon: 'heart-handshake',
    },
    {
      title: 'Complete Image Privacy',
      description: 'Your precious family memories are treated with utmost confidentiality and protected by strict internal image handling standards.',
      icon: 'lock',
    },
  ],

  studioSampleOffer: {
    badge: 'FOR PROFESSIONAL PHOTOGRAPHERS',
    title: 'Studio Sample Program',
    discount: '10% Off Demonstration Studio Samples',
    description: 'We support our photography partners. Experience our cover materials, paper finishes, and binding quality firsthand with special studio sample pricing for your client consultation area.',
    cta: 'Inquire About Studio Samples',
  },

  worldwideShipping: {
    title: 'Carefully Packaged. Delivered Worldwide.',
    description: 'From Mumbai to London, Dubai to New York, our albums travel in custom multi-layer protective boxes to guarantee that your finished heirloom arrives in flawless condition.',
  },
};
