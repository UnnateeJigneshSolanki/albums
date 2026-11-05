import { ServiceDetail } from '@/types/service';

export const albumDesigningContent: ServiceDetail = {
  id: 'album-designing',
  slug: 'album-designing',
  title: 'Professional Album Designs',
  subtitle: 'Custom layouts crafted by experienced wedding album designers with theme variety and soft-copy proofs.',
  description: [
    'Many album companies provide downloadable software and expect customers to design their own albums. Learning such software takes time, and automated tools often lack ready-made themes, resulting in photos placed into rigid templates without personal creative direction.',
    'At Ultra Albums, our experienced in-house wedding album designers create personalized layouts tailored to your preferences, narrative pacing, and event style.',
    'We offer six to seven distinct album design themes, ranging from traditional ceremony layouts to modern minimal spreads.',
    'Before printing, we share a digital soft-copy preview for your review, allowing you to suggest corrections and adjustments until you are completely satisfied with the layout.',
  ],
  themesAndRevisions: {
    themesCount: '6 to 7 curated album design themes',
    previewProcess: 'Soft-copy preview provided for review, feedback, and approval prior to printing',
    pricingNote: 'Complimentary album designing included with album orders (subject to studio confirmation)',
  },
  designThemes: [
    {
      name: 'Classic Heritage',
      description: 'Generous white borders, timeless symmetrical pacing, and balanced photographic symmetry.',
      tag: 'Classic',
    },
    {
      name: 'Modern Contemporary',
      description: 'Clean whitespace, dynamic editorial grids, and panoramic double-page spreads.',
      tag: 'Modern',
    },
    {
      name: 'Royal Indian',
      description: 'Vibrant cultural palettes, ceremonial narratives, and celebratory richness.',
      tag: 'Traditional',
    },
    {
      name: 'Modern Editorial',
      description: 'High-fashion aesthetic with generous negative space and dramatic full-bleed spreads.',
      tag: 'Editorial',
    },
  ],
  features: [
    'Experienced in-house designers creating custom layouts',
    'Approximately 6 to 7 design themes suited to diverse wedding styles',
    'Thoughtful photo sequencing and narrative progression',
    'Digital soft-copy preview for corrections and final sign-off',
    'Revisions provided to ensure complete customer satisfaction',
  ],
  videoSamples: [
    {
      title: 'Grand Indian Wedding Album Walkthrough',
      duration: '2:45 min',
      theme: 'Indian Grandeur',
    },
    {
      title: 'Contemporary Beachside Destination Wedding Spread',
      duration: '1:50 min',
      theme: 'Contemporary Minimalist',
    },
    {
      title: 'Heirloom Flush Mount Book Flip-Through',
      duration: '2:15 min',
      theme: 'Classic Fine Art',
    },
  ],
  galleryPlaceholders: [
    'Traditional Indian wedding mandap ceremony double-page panoramic layout',
    'Contemporary Western minimalist bridal portrait spread with generous negative space',
    'Detail montage spread highlighting jewelry, invitations, and bridal footwear',
    'Interactive soft-copy digital proof review interface showing client notes',
  ],
};
