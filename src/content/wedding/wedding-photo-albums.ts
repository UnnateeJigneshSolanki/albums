import { FormFieldConfig } from '@/types/content';

export const weddingPhotoAlbumsContent = {
  title: 'Timeless Wedding Memories: Wedding Photo Albums and Books',
  introParagraphs: [
    'A wedding is a singular milestone where two lives, families, and histories unite. Long after the wedding music fades and flowers have blossomed, your wedding album remains the enduring vessel of your joy, laughter, and sacred vows.',
    'At Ultra Albums, we craft handcrafted wedding photo albums and bespoke coffee-table books engineered to withstand generations of loving touch. By uniting museum-grade photographic prints with master bookbinding techniques, every book becomes a treasured family heirloom.',
    'Explore our comprehensive collection of Flush Mount Albums, Layflat Books, Luxury Casket Collections, and contemporary Photo Books—each individually personalized to reflect your unique wedding celebration.',
  ],
  flushMountSection: {
    title: 'Flush Mount Albums for Wedding Photo Albums',
    description: [
      'Our signature wedding albums are hand-bound utilizing true silver halide photographic prints mounted between dense, archival white or black substrate cores to create an expansive panoramic visual journey.',
      'Constructed on rigid archival boards ranging from 1.0 mm to 2.0 mm total page thickness, each spread delivers substantial, warp-resistant weight and absolute structural permanence.',
      'We print exclusively on genuine Fujifilm Crystal Archive paper, renowned worldwide for impeccable tonal transitions, luminous highlights, deep velvety blacks, and superior archival image stability.',
    ],
    ctaText: 'Explore Flush Mount',
    ctaLink: '/flush-mount-album',
    galleryPlaceholders: [
      'Wedding flush mount open panoramic portrait spread',
      'Archival board thickness and gilded edge cross-section',
      'Fujifilm Crystal Archive silver halide colour richness showcase',
    ],
  },
  layflatSection: {
    title: 'Layflat Albums for Weddings',
    description: 'Continuous panoramic spreads without center fold interruption, ideal for wide bridal party portraits, outdoor venues, and dramatic sunset landscape compositions.',
    ctaText: 'Explore Layflat',
    ctaLink: '/layflat',
    galleryPlaceholders: ['Wedding layflat double-spread landscape photograph'],
  },
  luxurySection: {
    title: 'Luxury Albums & Handcrafted Wooden Caskets',
    description: 'Bespoke leather and velvet albums housed inside custom-built matching wooden caskets, creating an exquisite generational unboxing ritual.',
    ctaText: 'Explore Luxury Albums',
    ctaLink: '/luxury-albums',
    galleryPlaceholders: ['Wedding luxury leather album nestled in custom timber casket with velvet lining'],
  },
  photoBooksSection: {
    title: 'Contemporary Wedding Photo Books',
    description: 'Lightweight, modern coffee-table photo books printed on non-tearable paper with feather-touch, matt, or glossy finishes for parent and bridal party gifting.',
    ctaText: 'Explore Photo Books',
    ctaLink: '/photo-book',
    galleryPlaceholders: ['Coffee-table style wedding photo book open on aesthetic desk'],
  },
  discoverSection: {
    title: 'Discover Your Perfect Wedding Album',
    description: 'Whether you desire thick archival flush mount boards, seamless panoramic layflat spreads, or artisan wooden caskets, our dedicated team will guide you through material samples and bespoke cover options.',
    ctaText: 'Schedule Consultation',
    ctaLink: '/contact-us',
  },
  locationSection: {
    title: 'Visit Our Mumbai Workshop & Studio',
    description: 'Shree Krishna Ind. Estate, Near Toll Naka, 211, Western Express Highway, Dahisar East, Mumbai 400068, India.',
    mapPlaceholder: 'Location Map — Ultra Albums Workshop & Design Studio, Mumbai',
  },
  contactForm: {
    title: 'Wedding Album Consultation',
    fields: [
      { name: 'name', label: 'Name', type: 'text', placeholder: 'Your Full Name', required: true },
      { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Phone / WhatsApp Number', required: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Email Address', required: true },
      { name: 'message', label: 'Wedding Details', type: 'textarea', placeholder: 'Tell us about your wedding date, photography style, and album preferences', required: true },
    ] as FormFieldConfig[],
    submitButtonText: 'Request Consultation',
  },
};
