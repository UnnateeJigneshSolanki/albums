export interface ProductListingItem {
  id: string;
  title: string;
  slug: string;
  href: string;
  shortDescription: string;
}

export const productsConfig: ProductListingItem[] = [
  {
    id: 'flush-mount',
    title: 'Flush Mount Albums',
    slug: 'flush-mount-album',
    href: '/flush-mount-album',
    shortDescription: 'Hand-bound albums crafted with silver halide prints and archival substrate for clean, straight panoramic spreads.',
  },
  {
    id: 'layflat',
    title: 'Layflat Albums',
    slug: 'layflat',
    href: '/layflat',
    shortDescription: 'Lighter panoramic albums opening flat without a centre gutter, ideal for continuous double-page spreads.',
  },
  {
    id: 'photo-book',
    title: 'Photo Books',
    slug: 'photo-book',
    href: '/photo-book',
    shortDescription: 'Versatile photo books with non-tearable paper and flat-opening binding for preserving personal and family moments.',
  },
  {
    id: 'luxury-albums',
    title: 'Luxury Albums',
    slug: 'luxury-albums',
    href: '/luxury-albums',
    shortDescription: 'Handcrafted leather and wooden casket albums made for heirloom preservation and bespoke customisation.',
  },
  {
    id: 'box-and-bags',
    title: 'Boxes and Bags',
    slug: 'box-and-bags',
    href: '/box-and-bags',
    shortDescription: 'Rigid wooden structures with leatherette coverings, carry handles, display boxes and soft presentation bags.',
  },
  {
    id: 'slip-in',
    title: 'Slip-in Albums',
    slug: 'slip-in-albums',
    href: '/slip-in-albums',
    shortDescription: 'Affordable albums with moisture-resistant dimpled polypropylene pockets for organizing loose prints.',
  },
];
