import { GalleryView } from '@/components/gallery/GalleryView';
import { GALLERY_ITEMS } from '@/data/gallery';

export const metadata = {
  title: 'Photo Vault | Avengers Archive',
  description: 'High-resolution film stills, battle moments, and posters from Earth-616.',
};

export default function GalleryPage() {
  return <GalleryView items={GALLERY_ITEMS} />;
}
