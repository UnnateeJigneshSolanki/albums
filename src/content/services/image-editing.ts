import { ServiceDetail } from '@/types/service';

export const imageEditingContent: ServiceDetail = {
  id: 'image-editing',
  slug: 'image-editing',
  title: 'Image Editing Services',
  subtitle: 'Digital restoration, retouching, and enhancement with over a decade of international studio experience.',
  description: [
    'Ultra Albums brings over 10 years of experience providing image editing, retouching, and digital restoration to studios and clients worldwide.',
    'Our digital correction and enhancement services restore and improve images while preserving the natural character and integrity of the original photograph.',
    'Our artists work on each photograph individually, handling brightness and contrast adjustments, color correction, blemish retouching, and scratch restoration.',
    'Whether you need e-commerce cutouts, wedding collection color grading, or archival restoration for family photographs, our team provides consistent, high-detail editing.',
  ],
  serviceList: [
    'Advanced image cutouts and clipping paths',
    'Brightness and contrast balancing',
    'Repair of scratches, creases, minor dust, and spots',
    'Light and colour correction',
    'Beauty and glamour retouching',
    'Object removal',
    'E-commerce image editing',
    'Video editing',
  ],
  offer: {
    title: 'Free Sample Edit',
    description: 'Send us one or two raw or high-resolution image files with your instructions. Our team will complete a complimentary sample edit so you can evaluate our quality before placing an order.',
  },
  detailedServices: [
    {
      title: 'Image Cutouts & Clipping Paths',
      description: 'Precision vector clipping paths and channel masking for products, accessories, and portrait edges.',
    },
    {
      title: 'Photo Restoration',
      description: 'Digital restoration of damaged, creased, scratched, or faded heirloom prints.',
    },
    {
      title: 'Beauty & Glamour Retouching',
      description: 'Skin tone balancing, blemish removal, and portrait retouching while preserving natural texture.',
    },
    {
      title: 'Object Removal',
      description: 'Removal of unwanted background objects, distracting elements, and reflections from compositions.',
    },
  ],
  galleryPlaceholders: [
    'Bridal portrait before and after: skin retouching and bridal jewellery glow',
    'Archival family portrait before and after: deep scratch and crease repair',
    'Outdoor ceremony before and after: exposure balancing and sky enhancement',
    'Commercial product before and after: crisp clipping path and drop shadow',
  ],
};
