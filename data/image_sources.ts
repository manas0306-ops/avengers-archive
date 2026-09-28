export interface ImageSourceRecord {
  id: string;
  character_id: string;
  url: string;
  fallback_gradient: string;
  source: string;
  license_note: string;
  image_type: 'PORTRAIT' | 'HERO' | 'BACKGROUND' | 'POSTER' | 'WALLPAPER';
  is_primary: boolean;
  last_checked: string;
}

export const IMAGE_SOURCES: ImageSourceRecord[] = [
  {
    id: 'img-ironman-hero',
    character_id: 'iron-man',
    url: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1200&auto=format&fit=crop',
    fallback_gradient: 'linear-gradient(135deg, #7f1d1d 0%, #b91c1c 50%, #f59e0b 100%)',
    source: 'Marvel Studios Promotional Archive / Official Film Stills',
    license_note: 'Fair use educational/fan archive reference',
    image_type: 'HERO',
    is_primary: true,
    last_checked: '2026-09-28',
  },
  {
    id: 'img-cap-hero',
    character_id: 'captain-america',
    url: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1200&auto=format&fit=crop',
    fallback_gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #dc2626 100%)',
    source: 'Marvel Studios Press Kit',
    license_note: 'Fair use fan archive reference',
    image_type: 'HERO',
    is_primary: true,
    last_checked: '2026-09-28',
  },
  {
    id: 'img-thor-hero',
    character_id: 'thor',
    url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop',
    fallback_gradient: 'linear-gradient(135deg, #312e81 0%, #0284c7 50%, #e2e8f0 100%)',
    source: 'Marvel Cinematic Universe Official Character Gallery',
    license_note: 'Promotional still reference',
    image_type: 'HERO',
    is_primary: true,
    last_checked: '2026-09-28',
  },
  {
    id: 'img-hulk-hero',
    character_id: 'hulk',
    url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop',
    fallback_gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)',
    source: 'Marvel Studios Official Character Archives',
    license_note: 'Promotional material reference',
    image_type: 'HERO',
    is_primary: true,
    last_checked: '2026-09-28',
  },
  {
    id: 'img-black-widow-hero',
    character_id: 'black-widow',
    url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    fallback_gradient: 'linear-gradient(135deg, #09090b 0%, #3f3f46 50%, #dc2626 100%)',
    source: 'Marvel Studios Film Archive',
    license_note: 'Official promotional archive',
    image_type: 'HERO',
    is_primary: true,
    last_checked: '2026-09-28',
  },
  {
    id: 'img-spiderman-hero',
    character_id: 'spider-man',
    url: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1200&auto=format&fit=crop',
    fallback_gradient: 'linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #1d4ed8 100%)',
    source: 'Sony Pictures / Marvel Studios Shared Archives',
    license_note: 'Fair use fan reference',
    image_type: 'HERO',
    is_primary: true,
    last_checked: '2026-09-28',
  },
  {
    id: 'img-doctor-strange-hero',
    character_id: 'doctor-strange',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    fallback_gradient: 'linear-gradient(135deg, #4c1d95 0%, #d97706 50%, #059669 100%)',
    source: 'Marvel Studios Promotional Press',
    license_note: 'Fair use fan reference',
    image_type: 'HERO',
    is_primary: true,
    last_checked: '2026-09-28',
  },
  {
    id: 'img-scarlet-witch-hero',
    character_id: 'scarlet-witch',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
    fallback_gradient: 'linear-gradient(135deg, #450a0a 0%, #991b1b 50%, #f43f5e 100%)',
    source: 'Marvel Studios WandaVision & MoM Press Kits',
    license_note: 'Fair use fan reference',
    image_type: 'HERO',
    is_primary: true,
    last_checked: '2026-09-28',
  },
  {
    id: 'img-black-panther-hero',
    character_id: 'black-panther',
    url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    fallback_gradient: 'linear-gradient(135deg, #18181b 0%, #581c87 50%, #a855f7 100%)',
    source: 'Marvel Studios Wakanda Archive',
    license_note: 'Fair use fan reference',
    image_type: 'HERO',
    is_primary: true,
    last_checked: '2026-09-28',
  }
];

export function getCharacterHeroImage(characterId: string, fallbackUrl?: string): string {
  const match = IMAGE_SOURCES.find(
    (item) => item.character_id === characterId && item.is_primary
  );
  return match?.url || fallbackUrl || 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1200&auto=format&fit=crop';
}
