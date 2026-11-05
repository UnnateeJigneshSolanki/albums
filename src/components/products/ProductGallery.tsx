import ImageGallery from '@/components/common/ImageGallery';

interface ProductGalleryProps {
  items?: string[];
  title?: string;
  caption?: string;
}

export default function ProductGallery({
  items,
  title = 'Product Gallery',
  caption = 'Original product imagery showcasing binding, spreads, and cover details.',
}: ProductGalleryProps) {
  return <ImageGallery items={items} title={title} caption={caption} />;
}
