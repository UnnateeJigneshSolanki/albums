import ImageGallery from '@/components/common/ImageGallery';

interface WeddingGalleryProps {
  items?: string[];
  title?: string;
  caption?: string;
}

export default function WeddingGallery({
  items,
  title = 'Wedding Album Gallery',
  caption = 'Heirloom flush mount, layflat, and luxury albums crafted for wedding couples.',
}: WeddingGalleryProps) {
  return <ImageGallery items={items} title={title} caption={caption} columns={3} />;
}
