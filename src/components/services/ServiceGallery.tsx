import ImageGallery from '@/components/common/ImageGallery';

interface ServiceGalleryProps {
  items?: string[];
  title?: string;
  caption?: string;
}

export default function ServiceGallery({
  items,
  title = 'Service Gallery & Portfolio Samples',
  caption = 'Samples showcasing our retouching, design layouts, and photography captures.',
}: ServiceGalleryProps) {
  return <ImageGallery items={items} title={title} caption={caption} />;
}
