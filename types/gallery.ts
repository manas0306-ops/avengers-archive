export type GalleryCategory =
  | 'ALL'
  | 'HEROES'
  | 'TEAM'
  | 'BATTLES'
  | 'POSTERS'
  | 'WALLPAPERS'
  | 'BTS';

export type WallpaperDevice = 'ALL' | 'DESKTOP' | 'MOBILE' | '4K' | 'ULTRAWIDE';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  character_id?: string;
  character_name?: string;
  movie?: string;
  year?: number;
  url: string;
  thumbnail_url: string;
  source: string;
  license_note: string;
  aspect_ratio: '16:9' | '9:16' | '2:3' | '1:1' | '21:9';
  resolution?: string;
  tags: string[];
}
