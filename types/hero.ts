import { z } from 'zod';

export const HeroSchema = z.object({
  slug: z.string().min(1),
  tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  alias: z.string().min(1),
  realName: z.string().min(1),
  actor: z.string().min(1),
  status: z.enum(['ACTIVE', 'RETIRED', 'DECEASED', 'UNKNOWN']),
  born: z.object({
    date: z.string(),
    place: z.string(),
    parents: z.string(),
  }),
  story: z.tuple([z.string(), z.string(), z.string()]),
  spoilers: z.array(z.number()),
  firstAppearance: z.object({
    title: z.string(),
    year: z.number(),
  }),
  appearancesCount: z.number().int().positive(),
  theme: z.object({
    primary: z.string(),
    secondary: z.string(),
    bg: z.string(),
    glow: z.string(),
    text: z.string(),
  }),
  face: z.object({
    unmasked: z.string(),
    masked: z.string(),
    hoverMode: z.enum(['spot', 'region']),
    faceRegion: z.array(z.tuple([z.number(), z.number()])).optional(),
  }),
  poses: z.object({
    tl: z.string(),
    t: z.string(),
    tr: z.string(),
    l: z.string(),
    c: z.string(),
    r: z.string(),
    bl: z.string(),
    b: z.string(),
    br: z.string(),
  }),
  suits: z.array(
    z.object({
      name: z.string(),
      image: z.string(),
      firstAppearance: z.string(),
      description: z.string(),
    })
  ),
  suitsSources: z.array(z.string()),
  timeline: z.array(
    z.object({
      year: z.number(),
      inUniverse: z.string(),
      title: z.string(),
      event: z.string(),
      image: z.string().optional(),
    })
  ),
  comics: z.array(
    z.object({
      title: z.string(),
      issue: z.string(),
      coverDate: z.string(),
      creators: z.string(),
      why: z.string(),
      cover: z.string(),
      sourceUrl: z.string(),
      readUrl: z.string().optional(),
      embed: z.boolean().optional(),
    })
  ),
  stats: z.object({
    strength: z.number().min(0).max(100),
    speed: z.number().min(0).max(100),
    intellect: z.number().min(0).max(100),
    durability: z.number().min(0).max(100),
    energy: z.number().min(0).max(100),
    combat: z.number().min(0).max(100),
  }),
  teamUps: z.array(z.string()),
  audio: z
    .object({
      ambient: z.string().optional(),
      sfx: z.string().optional(),
    })
    .optional(),
  sources: z.array(z.string()),
  imageSources: z.record(z.string(), z.string()),
});

export type Hero = z.infer<typeof HeroSchema>;
