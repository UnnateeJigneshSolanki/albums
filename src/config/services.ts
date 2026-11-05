export interface ServiceListingItem {
  id: string;
  title: string;
  slug: string;
  href: string;
  shortDescription: string;
}

export const servicesConfig: ServiceListingItem[] = [
  {
    id: 'image-editing',
    title: 'Image Editing',
    slug: 'image-editing',
    href: '/image-editing',
    shortDescription: 'Professional image correction, retouching, cutouts, dust and scratch repair, and colour balancing.',
  },
  {
    id: 'photography',
    title: 'Wedding Photography',
    slug: 'photography',
    href: '/photography',
    shortDescription: 'Candid and traditional wedding photography and videography with a traveling team of 15+ professionals.',
  },
  {
    id: 'album-designing',
    title: 'Album Designing',
    slug: 'album-designing',
    href: '/album-designing',
    shortDescription: 'Custom wedding album layouts crafted by experienced designers with multiple themes and preview revisions.',
  },
];
