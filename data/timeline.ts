import { TimelineEvent } from '@/types/timeline';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'event-1943-rebirth',
    year: '1943',
    era: 'World War II Era',
    phase: 1,
    title: 'Project Rebirth & The First Super Soldier',
    tagline: 'A frail kid from Brooklyn becomes freedom\'s greatest beacon.',
    what_happened: 'Dr. Abraham Erskine successfully administered the Super Soldier Serum to Steve Rogers in an underground Brooklyn facility using Vita-Ray radiation before Erskine was assassinated by a Hydra infiltrator.',
    who_was_involved: ['Steve Rogers', 'Dr. Abraham Erskine', 'Peggy Carter', 'Howard Stark'],
    why_it_mattered: 'Created Captain America, established the archetype for all subsequent super-soldier research, and provided the moral foundation for the Avengers decades later.',
    consequences: [
      'Erskine\'s formula was destroyed, triggering 80 years of unstable replication attempts (Hulk, Winter Soldier, Flag Smashers).',
      'Hydra\'s advanced Tesseract weapons were thwarted.'
    ],
    location: 'Brooklyn, New York, USA',
    related_movie_id: 'captain-america-first-avenger',
    image_url: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1200&auto=format&fit=crop',
    category: 'FOUNDATION'
  },
  {
    id: 'event-2008-iron-man',
    year: '2008',
    era: 'Dawn of Modern Heroes',
    phase: 1,
    title: 'Tony Stark\'s Declaration: "I Am Iron Man"',
    tagline: 'A single press conference statement ends the era of secret identities.',
    what_happened: 'Following his escape from the Ten Rings and defeat of Obadiah Stane, Tony Stark discarded his scripted cover story and publicly confessed his superhero persona to global media.',
    who_was_involved: ['Tony Stark', 'Nick Fury', 'James Rhodes', 'Pepper Potts'],
    why_it_mattered: 'Brought powered armor and high-tech defense into public global politics and prompted S.H.I.E.L.D. Director Nick Fury to initiate the Avengers Initiative.',
    consequences: [
      'Arms race for arc reactor technology began.',
      'Nick Fury appeared in Tony\'s living room with the Avengers proposal.'
    ],
    location: 'Stark Industries HQ, Los Angeles, California',
    related_movie_id: 'iron-man-2008',
    image_url: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1200&auto=format&fit=crop',
    category: 'FOUNDATION'
  },
  {
    id: 'event-2012-battle-of-ny',
    year: '2012',
    era: 'The Avengers Assemble',
    phase: 1,
    title: 'The Battle of New York',
    tagline: 'Six heroes stand between humanity and planetary subjugation.',
    what_happened: 'Loki opened a wormhole above Stark Tower using the Tesseract, letting loose the Chitauri armada. The six original Avengers assembled on the streets of Manhattan, holding the line until Tony Stark steered a nuclear warhead into the mothership.',
    who_was_involved: ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye', 'Loki', 'Chitauri Army'],
    why_it_mattered: 'Confirmed to humanity that alien civilizations exist, proved the necessity of the Avengers, and signaled Earth\'s defense capability to Thanos.',
    consequences: [
      'The World Security Council recognized the Avengers as Earth\'s primary defense.',
      'Chitauri technology salvage gave birth to Adrian Toomes (Vulture) and Damage Control.'
    ],
    location: 'Manhattan, New York City',
    related_movie_id: 'the-avengers-2012',
    image_url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
    category: 'BATTLE'
  },
  {
    id: 'event-2014-fall-of-shield',
    year: '2014',
    era: 'The Age of Conspiracy',
    phase: 2,
    title: 'The Fall of S.H.I.E.L.D. & Exposure of Hydra',
    tagline: 'The shield was a parasite; freedom required tearing it down.',
    what_happened: 'Captain America, Black Widow, and Falcon uncovered Arnim Zola\'s algorithm inside Project Insight, revealing that Hydra had grown like a parasite inside S.H.I.E.L.D. since 1945. Natasha dumped all classified files to the public internet.',
    who_was_involved: ['Steve Rogers', 'Natasha Romanoff', 'Sam Wilson', 'Bucky Barnes', 'Nick Fury', 'Alexander Pierce'],
    why_it_mattered: 'Destroyed the global intelligence apparatus, liberated Bucky Barnes from conditioning, and made the Avengers an independent non-governmental organization.',
    consequences: [
      'Hydra remnants fractured worldwide.',
      'Tony Stark assumed full private funding and technological hosting for the Avengers.'
    ],
    location: 'The Triskelion, Washington D.C.',
    related_movie_id: 'captain-america-winter-soldier',
    image_url: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1200&auto=format&fit=crop',
    category: 'CRISIS'
  },
  {
    id: 'event-2015-sokovia',
    year: '2015',
    era: 'The Ultron Crisis',
    phase: 2,
    title: 'The Battle of Sokovia',
    tagline: 'A city raised into the atmosphere to cause human extinction.',
    what_happened: 'The rogue AI Ultron utilized vibranium magnetic thrusters to lift the capital city of Novi Grad into the stratosphere, intending to drop it as an extinction-level kinetic meteorite. The Avengers evacuated civilians via Helicarrier and detonated the core.',
    who_was_involved: ['Avengers', 'Ultron Sentries', 'Wanda & Pietro Maximoff', 'Vision', 'Nick Fury'],
    why_it_mattered: 'Pietro sacrificed himself, Wanda officially joined the Avengers, and the catastrophic collateral damage sparked the international outcry that produced the Sokovia Accords.',
    consequences: [
      '117 nations drafted the Sokovia Accords to regulate superhuman activity.',
      'Helmut Zemo lost his entire family in the rubble, setting his vengeance into motion.'
    ],
    location: 'Novi Grad, Sokovia',
    related_movie_id: 'avengers-age-of-ultron',
    image_url: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1200&auto=format&fit=crop',
    category: 'BATTLE'
  },
  {
    id: 'event-2016-civil-war',
    year: '2016',
    era: 'The Fractured Team',
    phase: 3,
    title: 'The Avengers Civil War',
    tagline: 'Divided we fall: ideals clash at Leipzig-Halle and Siberia.',
    what_happened: 'Disagreement over United Nations oversight divided the team between Tony Stark and Steve Rogers. Helmut Zemo exploited this divide, revealing 1991 mission footage of Bucky Barnes killing Tony Stark\'s parents.',
    who_was_involved: ['Team Iron Man', 'Team Captain America', 'Helmut Zemo', 'T\'Challa'],
    why_it_mattered: 'Broke the Avengers into scattered fugitives and legal operatives, leaving Earth critically unprepared for Thanos\' arrival.',
    consequences: [
      'Steve, Natasha, and Sam went underground as Secret Avengers.',
      'Rhodey suffered spinal injuries; Peter Parker debuted his high-tech suit.'
    ],
    location: 'Leipzig Airport, Germany & Hydra Siberian Facility',
    related_movie_id: 'captain-america-civil-war',
    image_url: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1200&auto=format&fit=crop',
    category: 'CRISIS'
  },
  {
    id: 'event-2018-infinity-war',
    year: '2018',
    era: 'The Decimation',
    phase: 3,
    title: 'The Battle of Wakanda & The Snap',
    tagline: 'Thanos collects the final stone: half the cosmos disappears.',
    what_happened: 'Thanos defeated the Avengers on Titan and arrived in Wakanda. Despite Wanda destroying the Mind Stone, Thanos used the Time Stone to undo it, ripped the Stone from Vision\'s skull, survived Thor\'s Stormbreaker blow, and snapped his fingers.',
    who_was_involved: ['Thanos', 'Thor', 'Captain America', 'Wanda Maximoff', 'Vision', 'Black Panther', 'The Black Order'],
    why_it_mattered: 'The most catastrophic event in universal recorded history. 50% of all living beings vanished instantaneously.',
    consequences: [
      'Planetary civilizations plunged into famine, grief, and collapse.',
      'The period known as "The Blip" (2018–2023) began.'
    ],
    location: 'Wakanda, Africa & Planet Titan',
    related_movie_id: 'avengers-infinity-war',
    image_url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
    category: 'CRISIS',
    spoiler: true
  },
  {
    id: 'event-2023-endgame',
    year: '2023',
    era: 'The Resurrection & Sacrifice',
    phase: 3,
    title: 'The Battle of Earth & Victory over Thanos',
    tagline: 'Portals open; every hero assembles to save all of existence.',
    what_happened: 'The remaining Avengers conducted the Quantum Time Heist to collect past Infinity Stones. Smart Hulk snapped everyone back. Past Thanos bombarded the facility, but sorcerer portals summoned all resurrected heroes. Tony Stark channeled the stones to eliminate Thanos.',
    who_was_involved: ['Iron Man', 'Captain America', 'Thor', 'Smart Hulk', 'All MCU Heroes', 'Thanos & Armada'],
    why_it_mattered: 'Restored the vanished trillions, ended the Thanos threat, closed the Infinity Saga, and cemented Tony Stark and Natasha Romanoff as eternal legends.',
    consequences: [
      'The universe experienced the shock of sudden repopulation.',
      'Sam Wilson took up Captain America\'s shield; Thor appointed Valkyrie King of New Asgard.'
    ],
    location: 'Avengers Compound Ruins, Upstate New York',
    related_movie_id: 'avengers-endgame',
    image_url: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1200&auto=format&fit=crop',
    category: 'BATTLE',
    spoiler: true
  },
  {
    id: 'event-2024-multiverse-fracture',
    year: '2024',
    era: 'The Multiverse Saga',
    phase: 4,
    title: 'The Statues of Liberty Multiverse Breach',
    tagline: 'Alternate dimensions collide on the scaffoldings of New York.',
    what_happened: 'Peter Parker\'s botched memory spell ruptured the dimensional membrane, pulling in villains and two alternate Peter Parkers. After curing the villains, Peter sacrificed his personal identity to allow Doctor Strange to seal the tear.',
    who_was_involved: ['Three Spider-Men', 'Doctor Strange', 'Green Goblin', 'Doc Ock', 'Electro'],
    why_it_mattered: 'Showcased the catastrophic instability of the Multiverse and confirmed that infinite alternate universe variants exist within reach.',
    consequences: [
      'Peter Parker became an unrecognized ghost.',
      'Multiverse incursions began accelerating toward reality collisions.'
    ],
    location: 'Statue of Liberty, New York Harbor',
    related_movie_id: 'spider-man-no-way-home',
    image_url: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1200&auto=format&fit=crop',
    category: 'MULTIVERSE'
  }
];
