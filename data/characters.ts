import { Character } from '@/types/character';

export const CHARACTERS: Character[] = [
  {
    id: 'iron-man',
    name: 'Iron Man',
    real_name: 'Anthony Edward "Tony" Stark',
    hero_title: 'The Armored Avenger & Founding Visionary',
    category: 'CORE AVENGERS',
    status: 'FALLEN',
    team_status: 'Founding Member & Chief Technologist',
    first_appearance: 'Iron Man (2008)',
    last_appearance: 'Avengers: Endgame (2019)',
    origin: 'Captured in Afghanistan by the Ten Rings, billionaire industrialist Tony Stark built an arc reactor and makeshift armor to escape, forever transforming himself from war merchant to Earth\'s greatest defender.',
    powers: [
      'Genius-Level Intellect & Tactical Engineering',
      'Powered Armor Flight & Supersonic Speeds',
      'Repulsor Beams & Unibeam',
      'Nanotechnology Armor Shaping & Energy Absorption',
      'Micro-Missiles & Advanced Sensor Array'
    ],
    weapons: [
      'Mark LXXXV Nanotech Suit',
      'Miniature Arc Reactor',
      'Repulsor Cannons',
      'Energy Blade & Shield Generator',
      'Nano Gauntlet'
    ],
    affiliations: [
      'Avengers (Founding Member)',
      'Stark Industries',
      'S.H.I.E.L.D. (Consultant)',
      'Damage Control'
    ],
    storyline: {
      origin: 'Tony Stark was kidnapped after demonstrating the Jericho missile in Kunar Province. Facing death with shrapnel near his heart, he forged the Mark I armor alongside Ho Yinsen, realizing his weapons created monsters rather than peace.',
      the_call: 'Nick Fury introduced the Avengers Initiative in 2008, warning Stark that he had stepped into a much larger universe. Tony initially served as an unpredictable consultant.',
      rise: 'In 2012, during the Chitauri invasion of New York, Tony guided a nuclear missile through the wormhole into deep space, proving his willingness to lay down his life on the wire.',
      greatest_battles: 'Battle of New York (2012), Battle of Sokovia (2015), Avengers Civil War at Leipzig-Halle (2016), Battle of Titan (2018), and the Final Battle of Earth (2019).',
      losses: 'The traumatic fallout of the Battle of New York caused PTSD; his attempt to create a planetary defense shield created Ultron; the Avengers fractured during the Sokovia Accords; and he was stabbed and marooned on Titan as Peter Parker faded into dust.',
      turning_point: 'After living quietly for five years with Pepper Potts and their daughter Morgan, Tony cracked quantum temporal GPS equations, choosing to risk his peaceful existence to restore half the universe.',
      legacy: 'Tony Stark snapped the Infinity Stones, declaring "I am Iron Man," eliminating Thanos and his armada at the cost of his own life. His legacy echoes across Peter Parker, Rhodey, and the global security infrastructure of Earth.',
      where_are_they_now: 'Fallen hero. Memorialized worldwide. His sacrifice remains the foundational anchor of Earth\'s defense history.'
    },
    timeline: [
      { year: '2008', title: 'Armor Born in Kunar', description: 'Escapes captivity in the Mark I armor and declares to the world: "I am Iron Man."' },
      { year: '2010', title: 'Monaco & New Element', description: 'Synthesizes a new element to cure palladium toxicity and stops Ivan Vanko with Rhodey.' },
      { year: '2012', title: 'The Avengers Assemble', description: 'Carries the nuclear warhead through the wormhole, saving Manhattan.' },
      { year: '2015', title: 'The Ultron Offensive', description: 'Creates Ultron in an attempt to protect Earth; destroys Sokovia meteor to save humanity.' },
      { year: '2016', title: 'Sokovia Accords & Schism', description: 'Clashes with Steve Rogers over oversight and discovers Bucky assassinated his parents.' },
      { year: '2018', title: 'Battle on Titan', description: 'Duels Thanos with the Mark L nano-suit; witnesses the devastating Snap.' },
      { year: '2023', title: 'The Ultimate Sacrifice', description: 'Solves the Time Heist navigation and snaps the Nano Gauntlet, saving all reality.', spoiler: true }
    ],
    relationships: [
      { character_id: 'captain-america', character_name: 'Steve Rogers', relation: 'Rival', notes: 'Brothers in arms whose ideological conflict nearly tore the team apart, later reconciled with profound mutual respect.' },
      { character_id: 'spider-man', character_name: 'Peter Parker', relation: 'Protege', notes: 'Mentored Peter, provided advanced suits, and considered Peter\'s loss in the Blip his greatest personal failure.' },
      { character_id: 'war-machine', character_name: 'James Rhodes', relation: 'Friend', notes: 'Stark\'s most loyal lifelong friend and fellow armored aviator.' }
    ],
    quotes: [
      { quote: 'I am Iron Man.', context: 'Both his iconic public declaration and his final sacrifice.' },
      { quote: 'Sometimes you gotta run before you can walk.', context: 'Testing the Mark II armor flight systems.' },
      { quote: 'If we can\'t protect the Earth, you can be damn well sure we\'ll avenge it.', context: 'Confronting Loki in Stark Tower.' }
    ],
    fun_facts: [
      'Tony Stark built or upgraded armor models from Mark I to Mark LXXXV across his MCU appearances.',
      'His Arc Reactor produced approximately 3 gigajoules per second at peak output.',
      'He developed the BARF (Binary Augmented Retro-Framing) therapeutic holographic simulation tech.'
    ],
    hero_image: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1200&auto=format&fit=crop',
    background_image: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1920&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=300&auto=format&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop'
    ],
    accent_theme: {
      primary: '#e23636',
      glow: 'rgba(226, 54, 54, 0.45)',
      border: 'rgba(226, 54, 54, 0.3)'
    },
    where_are_they_now: {
      current_mcu_status: 'Deceased / Canonically Memorialized across Earth-616',
      last_known_appearance: 'Avengers: Endgame (2019) / Archival in Spider-Man: Far From Home',
      post_endgame_development: 'Stark technology inherited by Pepper Potts, Rhodey, and Riri Williams (Ironheart).',
      future_status: 'CONFIRMED',
      future_project_name: 'Robert Downey Jr. officially announced as Victor von Doom in Avengers: Doomsday (2026)',
      notes: 'Tony Stark\'s Earth-616 storyline concluded in Endgame; Robert Downey Jr returns to the MCU portraying Doctor Doom in the Multiverse Saga.',
      source: 'Marvel Studios San Diego Comic-Con 2024 Hall H Official Announcement'
    },
    source_urls: [
      { label: 'Marvel Official Iron Man Profile', url: 'https://www.marvel.com/characters/iron-man-tony-stark' },
      { label: 'Marvel Studios Official Character Archive', url: 'https://www.marvel.com/movies/avengers-endgame' }
    ],
    last_verified: '2026-09-28',
    content_version: 'v2.4.0',
    views_count: 2489,
    favorites_count: 1420
  },
  {
    id: 'captain-america',
    name: 'Captain America',
    real_name: 'Steven Grant Rogers',
    hero_title: 'The First Avenger & Moral Sentinel',
    category: 'CORE AVENGERS',
    status: 'RETIRED',
    team_status: 'Founding Member & Field Commander',
    first_appearance: 'Captain America: The First Avenger (2011)',
    last_appearance: 'Avengers: Endgame (2019)',
    origin: 'A frail but fiercely resolute Brooklyn youth during WWII, Steve Rogers was injected with Dr. Abraham Erskine\'s Super Soldier Serum, unlocking peak human biological potential and embodying unwavering courage.',
    powers: [
      'Peak Human Strength, Agility, Speed & Stamina',
      'Master Martial Artist & Hand-to-Hand Combatant',
      'Genius Tactical Strategist & Field Leadership',
      'Superhuman Healing & Disease Immunity',
      'Worthy Wielder of Mjolnir (Electrokinesis)'
    ],
    weapons: [
      'Vibranium Round Shield',
      'Wakandan Dual Gauntlets',
      'Mjolnir (Endgame)',
      'Tactical Stealth Uniform'
    ],
    affiliations: [
      'Avengers (Leader)',
      'Strategic Scientific Reserve (SSR)',
      'Howling Commandos',
      'S.H.I.E.L.D. (STRIKE)'
    ],
    storyline: {
      origin: 'Rejected multiple times by military recruiters due to health ailments, Steve impressed Erskine with his moral compassion. After surviving the Vita-Ray chamber, he became the symbol of allied resistance against Johann Schmidt\'s Hydra.',
      the_call: 'Defrosting after 66 years trapped in Arctic ice, Rogers awoke in 21st-century New York. Nick Fury mobilized him to coordinate Earth\'s heroes against Loki.',
      rise: 'Captain America became the undisputed battlefield general of the Avengers, coordinating tactical rescue operations and defense formations across the globe.',
      greatest_battles: 'Liberation of POW Camps (1943), Battle of New York (2012), Fall of the Triskelion (2014), Battle of Sokovia (2015), Battle of Wakanda (2018), and the Climax of Earth (2019).',
      losses: 'Lost his era and Peggy Carter to the ice; watched Bucky plunge from a train in 1944; discovered S.H.I.E.L.D. was infested with Hydra; lost against Thanos in Wakanda.',
      turning_point: 'Wielded Mjolnir during the battle against Thanos in 2023, unleashing lightning strikes and standing alone against an entire alien armada until the Portals opened.',
      legacy: 'Returned the Infinity Stones to their original timelines and chose to return to Peggy Carter in the past. Reappeared as an elderly man to pass the Vibranium shield to Sam Wilson.',
      where_are_they_now: 'Retired from active duty. Handed the mantle and shield to Sam Wilson. Current location deliberately guarded in public MCU lore.'
    },
    timeline: [
      { year: '1942', title: 'Project Rebirth', description: 'Injected with the Super Soldier Serum at an underground Brooklyn laboratory.' },
      { year: '1945', title: 'The Valkyrie Sacrifice', description: 'Crashes the Valkyrie into the Arctic shelf to neutralize weapons aimed at American cities.' },
      { year: '2011', title: 'Defrosting in Times Square', description: 'Awakens after 66 years in cryogenic preservation.' },
      { year: '2014', title: 'The Winter Soldier & Hydra Fall', description: 'Exposes Hydra inside S.H.I.E.L.D. and refuses to kill his brainwashed friend Bucky.' },
      { year: '2016', title: 'Civil War', description: 'Opposes government control under the Sokovia Accords and protects Bucky Barnes.' },
      { year: '2018', title: 'Stand in Wakanda', description: 'Leads the ground defense in Wakanda; knocked unconscious as Thanos snaps.' },
      { year: '2023', title: 'Avengers Assemble & Shield Passed', description: 'Summons Mjolnir, commands "Avengers Assemble!", and later passes the shield to Sam Wilson.', spoiler: true }
    ],
    relationships: [
      { character_id: 'bucky-barnes', character_name: 'Bucky Barnes', relation: 'Friend', notes: 'Lifelong Brooklyn companion whose friendship defied Hydra programming and time itself.' },
      { character_id: 'falcon', character_name: 'Sam Wilson', relation: 'Protege', notes: 'His trusted wingman and hand-picked successor as the new Captain America.' },
      { character_id: 'black-widow', character_name: 'Natasha Romanoff', relation: 'Ally', notes: 'Formed an unbreakable bond of trust while on the run from S.H.I.E.L.D. and the world.' }
    ],
    quotes: [
      { quote: 'I can do this all day.', context: 'From Brooklyn alleys to the final standoff against Thanos.' },
      { quote: 'Avengers... Assemble.', context: 'The climactic command at the ruins of the Avengers Compound.' },
      { quote: 'The price of freedom is high. It always has been. And it\'s a price I\'m willing to pay.', context: 'Broadcast over S.H.I.E.L.D. headquarters before dismantling Insight.' }
    ],
    fun_facts: [
      'Steve Rogers was born on July 4, 1918.',
      'He could process visual stimuli and make tactical trajectory calculations for shield ricochets in milliseconds.',
      'He kept a small notebook of pop culture items he missed during his time frozen, including Star Wars, the Moon Landing, and Thai food.'
    ],
    hero_image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1200&auto=format&fit=crop',
    background_image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1920&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=300&auto=format&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=1200&auto=format&fit=crop'
    ],
    accent_theme: {
      primary: '#2563eb',
      glow: 'rgba(37, 99, 235, 0.45)',
      border: 'rgba(37, 99, 235, 0.3)'
    },
    where_are_they_now: {
      current_mcu_status: 'Retired from active service after returning from the alternate timeline.',
      last_known_appearance: 'Avengers: Endgame (2019) / Referenced in The Falcon and the Winter Soldier',
      post_endgame_development: 'Public rumors in the MCU playfully claim Steve is on a secret base on the Moon.',
      future_status: 'NONE',
      notes: 'Steve lived his life with Peggy Carter; the Captain America mantle was officially assumed by Sam Wilson.',
      source: 'Marvel Studios The Falcon and the Winter Soldier Canon'
    },
    source_urls: [
      { label: 'Marvel Official Captain America Profile', url: 'https://www.marvel.com/characters/captain-america-steve-rogers' }
    ],
    last_verified: '2026-09-28',
    content_version: 'v2.4.0',
    views_count: 2190,
    favorites_count: 1280
  },
  {
    id: 'thor',
    name: 'Thor Odinson',
    real_name: 'Thor Odinson',
    hero_title: 'God of Thunder & Protector of the Nine Realms',
    category: 'CORE AVENGERS',
    status: 'ACTIVE',
    team_status: 'Founding Member & Heavy Hitter',
    first_appearance: 'Thor (2011)',
    last_appearance: 'Thor: Love and Thunder (2022)',
    origin: 'The firstborn son of Odin Allfather and Frigga of Asgard. Stripped of his powers and cast down to Midgard for reckless hubris, Thor proved his selflessness, earning back Mjolnir and embracing his true divine power.',
    powers: [
      'Divine Asgardian Physiology & Extreme Durability',
      'Weather Manipulation & Divine Lightning Generation',
      'Superhuman Strength & Longevity',
      'Flight via Mjolnir & Stormbreaker',
      'Bifrost Summoning'
    ],
    weapons: [
      'Stormbreaker (Uru Axe forged in Nidavellir)',
      'Mjolnir (Uru Hammer)',
      'Thunderbolt of Zeus (temporarily)'
    ],
    affiliations: [
      'Avengers (Founding Member)',
      'Asgardian Royal Family',
      'Revengers',
      'Guardians of the Galaxy (Honorary)'
    ],
    storyline: {
      origin: 'Arrogant prince who nearly restarted war with the Frost Giants of Jotunheim, banished to New Mexico without divine might until he sacrificed himself against the Destroyer.',
      the_call: 'Followed Loki to Earth to recover the Tesseract and joined the Avengers to protect humanity.',
      rise: 'Helped defend Earth and Asgard against the Dark Elves and Malekith, choosing Earth and realm defense over the Asgardian throne.',
      greatest_battles: 'Battle of New York (2012), Battle of Sokovia (2015), Destruction of Asgard / Battle of Hela (2017), Wakandan Arrival (2018), and the Battle against Gorr (2022).',
      losses: 'Lost his mother Frigga, father Odin, brother Loki, best friend Heimdall, his eye, Asgard itself, half his people to Thanos, and later his former love Jane Foster.',
      turning_point: 'During Ragnarok, unlocked his intrinsic lightning powers without relying on a hammer, declaring "Are you Thor, the God of Hammers?"',
      legacy: 'After years of survivor guilt and depression, Thor fought with dual weapons in Endgame, ceded New Asgard rule to King Valkyrie, and adopted Love, Gorr\'s resurrected daughter.',
      where_are_they_now: 'Active protector traversing the cosmos alongside his adopted daughter Love, wielding Stormbreaker in defense of the innocent.'
    },
    timeline: [
      { year: '2011', title: 'Banished to Midgard', description: 'Learns humility in Puente Antiguo and reclaims Mjolnir.' },
      { year: '2012', title: 'Battle of New York', description: 'Captures Loki and escorts him back to Asgard with the Tesseract.' },
      { year: '2013', title: 'The Convergence', description: 'Defeats Malekith and stops the Aether from plunging the universe into darkness.' },
      { year: '2017', title: 'Ragnarok & Loss of Eye', description: 'Hela shatters Mjolnir; Thor unleashes internal thunder and orchestrates Asgard\'s destruction.' },
      { year: '2018', title: 'Stormbreaker & The Blip', description: 'Forges Stormbreaker on Nidavellir and strikes Thanos in the chest, unable to prevent the snap.' },
      { year: '2023', title: 'The Reclaiming of Self', description: 'Retrieves 2013 Mjolnir via Time Heist and participates in Thanos\' final defeat.' },
      { year: '2024', title: 'Love and Thunder', description: 'Fights Gorr the God Butcher; Jane Foster falls heroically; adopts Gorr\'s daughter Love.' }
    ],
    relationships: [
      { character_id: 'loki', character_name: 'Loki Laufeyson', relation: 'Family', notes: 'Turbulent brotherhood characterized by betrayal, redemption, and deep familial love.' },
      { character_id: 'hulk', character_name: 'Bruce Banner / Hulk', relation: 'Friend', notes: 'The "Strongest Avenger" banter evolved into a fierce, battle-tested alliance on Sakaar and Earth.' },
      { character_id: 'iron-man', character_name: 'Tony Stark', relation: 'Team', notes: 'Clashed initially in German forests before standing shoulder-to-shoulder against universe-ending threats.' }
    ],
    quotes: [
      { quote: 'Bring me Thanos!', context: 'Arriving with Stormbreaker at the Battle of Wakanda.' },
      { quote: 'I choose to run towards my problems, and not away from them.', context: 'Thor: Ragnarok revelation.' },
      { quote: 'I went for the head.', context: 'Decapitating Thanos in the Garden.' }
    ],
    fun_facts: [
      'Thor is over 1,500 years old in the MCU.',
      'Stormbreaker is capable of channeling the Bifrost to teleport across the cosmos without Heimdall.',
      'His drinking horns contain fermented Asgardian mead that mortals cannot consume without severe poisoning.'
    ],
    hero_image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop',
    background_image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1920&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=300&auto=format&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop'
    ],
    accent_theme: {
      primary: '#0ea5e9',
      glow: 'rgba(14, 165, 233, 0.45)',
      border: 'rgba(14, 165, 233, 0.3)'
    },
    where_are_they_now: {
      current_mcu_status: 'Active cosmic hero and adoptive father to Love.',
      last_known_appearance: 'Thor: Love and Thunder (2022)',
      post_endgame_development: 'Transferred governance of New Asgard to King Valkyrie.',
      future_status: 'ANNOUNCED',
      future_project_name: 'Thor Will Return (Official MCU end-card announcement)',
      notes: 'Officially confirmed to return in future Marvel Studios projects.',
      source: 'Marvel Studios Official Theatrical Release'
    },
    source_urls: [
      { label: 'Marvel Official Thor Profile', url: 'https://www.marvel.com/characters/thor-thor-odinson' }
    ],
    last_verified: '2026-09-28',
    content_version: 'v2.4.0',
    views_count: 2012,
    favorites_count: 1150
  },
  {
    id: 'hulk',
    name: 'The Hulk',
    real_name: 'Dr. Robert Bruce Banner',
    hero_title: 'The Green Goliath & Nuclear Physicist',
    category: 'CORE AVENGERS',
    status: 'ACTIVE',
    team_status: 'Founding Member & Scientific Core',
    first_appearance: 'The Incredible Hulk (2008)',
    last_appearance: 'She-Hulk: Attorney at Law (2022)',
    origin: 'Attempting to replicate the WWII Super Soldier Serum using gamma radiation, Dr. Bruce Banner suffered an overwhelming cellular dosage that manifests as an unstoppable green titan whenever his heart rate surges.',
    powers: [
      'Limitless Physical Strength (Scaling with Adrenaline)',
      'Near-Invulnerability & Extreme Regenerative Factor',
      'Superhuman Leaping & Thunderclaps',
      'Genius Nuclear & Quantum Physics Mastery',
      'Gamma Radiation Absorption & Immunity'
    ],
    weapons: [
      'Vibranium Restraints (broken)',
      'Hulkbuster Remote Protocol (pilot)',
      'Nano Gauntlet (wielder)'
    ],
    affiliations: [
      'Avengers (Founding Member)',
      'Stark Industries (Collaborator)',
      'Sakaar Gladiator Champions (Former)'
    ],
    storyline: {
      origin: 'Fleeing General Thaddeus Ross, Banner lived off the grid searching for an antidote before realizing the Hulk could not simply be suppressed or purged.',
      the_call: 'Recruited in India by Natasha Romanoff for his expertise in gamma radiation to track the Tesseract.',
      rise: 'Leveled the Leviathans in New York with his iconic "That\'s my secret, Cap: I\'m always angry."',
      greatest_battles: 'Battle of New York (2012), Hulkbuster duel in Johannesburg (2015), Contest of Champions on Sakaar (2017), Defense of Wakanda (2018), and the Blip Reversal (2023).',
      losses: 'Guilt over civilian casualties in South Africa; trapped on Sakaar as the Hulk for two years; Hulk refused to emerge after being beaten by Thanos.',
      turning_point: 'Spent 18 months in a gamma lab merging Banner\'s brain with Hulk\'s brawn, creating "Smart Hulk".',
      legacy: 'Wielded the Nano Gauntlet and endured the lethal cosmic radiation surge to snap everyone vanished by Thanos back into existence.',
      where_are_they_now: 'Active researcher in Mexico, trained his cousin Jennifer Walters (She-Hulk), and introduced his son Skaar from Sakaar.'
    },
    timeline: [
      { year: '2008', title: 'Harlem Clash', description: 'Defeats Emil Blonsky (Abomination) in Harlem.' },
      { year: '2012', title: 'Always Angry', description: 'Punches down a Chitauri Leviathan and smashes Loki into Stark Tower floor.' },
      { year: '2015', title: 'Quinjet Disappearance', description: 'Leaves Earth alone after Sokovia to avoid endangering civilian lives.' },
      { year: '2017', title: 'Champion of Sakaar', description: 'Reunites with Thor in the Grandmaster\'s arena and battles Fenris on the Rainbow Bridge.' },
      { year: '2018', title: 'Hulkbuster Pilot', description: 'Pilots the Mark XLIV Hulkbuster armor in Wakanda after the Hulk refuses to manifest.' },
      { year: '2023', title: 'The Blip Snapped Back', description: 'Channels the six Infinity Stones to resurrect trillions across the cosmos.', spoiler: true },
      { year: '2025', title: 'Family in Sakaar', description: 'Helps Jen Walters integrate her abilities and returns from Sakaar with son Skaar.' }
    ],
    relationships: [
      { character_id: 'iron-man', character_name: 'Tony Stark', relation: 'Friend', notes: 'The "Science Bros" created the Vision, designed the Hulkbuster fail-safe, and cracked time travel.' },
      { character_id: 'black-widow', character_name: 'Natasha Romanoff', relation: 'Ally', notes: 'Natasha calmed him using the "lullaby" protocol; her death in Endgame devastated him.' }
    ],
    quotes: [
      { quote: 'That\'s my secret, Captain. I\'m always angry.', context: 'The Avengers (2012) iconic transformation.' },
      { quote: 'I was made for this. The radiation\'s mostly gamma.', context: 'Volunteering to snap the Nano Gauntlet in Endgame.' }
    ],
    fun_facts: [
      'Bruce Banner holds seven PhDs in sciences including quantum mechanics and nuclear biophysics.',
      'His right arm suffered extensive cosmic cellular burn from the Infinity Stones, partially rehabilitated through Jen Walters\' blood chemistry.'
    ],
    hero_image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop',
    background_image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1920&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=300&auto=format&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop'
    ],
    accent_theme: {
      primary: '#10b981',
      glow: 'rgba(16, 185, 129, 0.45)',
      border: 'rgba(16, 185, 129, 0.3)'
    },
    where_are_they_now: {
      current_mcu_status: 'Active mentor, scientist, and father to Skaar.',
      last_known_appearance: 'She-Hulk: Attorney at Law (2022)',
      post_endgame_development: 'Built private laboratory in Mexico; successfully stabilized gamma blood transmission.',
      future_status: 'CONFIRMED',
      future_project_name: 'Captain America: Brave New World / Upcoming Avengers films',
      notes: 'Continues as one of the few active original founding Avengers on Earth.',
      source: 'Marvel Studios Official She-Hulk Canon'
    },
    source_urls: [
      { label: 'Marvel Official Hulk Profile', url: 'https://www.marvel.com/characters/hulk-bruce-banner' }
    ],
    last_verified: '2026-09-28',
    content_version: 'v2.4.0',
    views_count: 1840,
    favorites_count: 980
  },
  {
    id: 'black-widow',
    name: 'Black Widow',
    real_name: 'Natalia Alianovna "Natasha" Romanoff',
    hero_title: 'Master Infiltrator & The Heart of the Avengers',
    category: 'CORE AVENGERS',
    status: 'FALLEN',
    team_status: 'Founding Member & Tactical Commander',
    first_appearance: 'Iron Man 2 (2010)',
    last_appearance: 'Black Widow (2021)',
    origin: 'Trained from childhood in the brutal Soviet Red Room academy by General Dreykov, Natasha was conditioned as an elite assassin before defecting to S.H.I.E.L.D. thanks to Clint Barton\'s mercy.',
    powers: [
      'Master Martial Artist in Multiple Fighting Disciplines',
      'Elite Espionage, Psychological Interrogation & Disguise',
      'Tactical Acumen & Multilingual Fluency',
      'Acrobatic Mastery & Peak Human Reflexes',
      'Advanced Weapons & Firearm Precision'
    ],
    weapons: [
      'Widow\'s Bite Electroshock Gauntlets',
      'Dual Electroshock Batons',
      'Dual Glock 26 Pistols',
      'Grappling Line & Tactical Harness'
    ],
    affiliations: [
      'Avengers (Founding Member & Endgame Commander)',
      'S.H.I.E.L.D. (Level 7 Agent)',
      'Red Room (Defected)',
      'STRIKE Team'
    ],
    storyline: {
      origin: 'Orphaned and subjected to sterilization and psychiatric conditioning in the Red Room, Natasha earned a fearsome reputation until Hawkeye made a different call, offering her redemption.',
      the_call: 'Investigated Tony Stark undercover as "Natalie Rushman" and later rallied Bruce Banner and Steve Rogers.',
      rise: 'Proved instrumental in neutralizing Loki\'s portal using Selvig\'s scepter during the Battle of New York.',
      greatest_battles: 'Battle of New York (2012), Dismantling Project Insight (2014), Battle of Sokovia (2015), Battle of Corvus Glaive & Proxima Midnight (2018), and the Red Room Takedown (2016/2021).',
      losses: 'Haunted by the "red in her ledger"; forced to leak all S.H.I.E.L.D. secrets to the world; watched her chosen family shatter during the Blip.',
      turning_point: 'During the five-year Blip, Natasha became the de facto leader keeping global communication lines open between Carol Danvers, Rocket, Nebula, Rhodey, and Okoye.',
      legacy: 'Sacrificed her life on Vormir against Clint Barton\'s desperate protests, securing the Soul Stone required to resurrect half the universe.',
      where_are_they_now: 'Fallen hero. Memorialized by Clint Barton and sister Yelena Belova. Her sacrifice saved trillions.'
    },
    timeline: [
      { year: '2010', title: 'Undercover in Stark Industries', description: 'Assesses Tony Stark and recaptures War Machine armor controls from Hammer.' },
      { year: '2012', title: 'Closes the Portal', description: 'Interrogates Loki, frees Clint from mind control, and uses the scepter to shut down the wormhole.' },
      { year: '2014', title: 'Dumps S.H.I.E.L.D. Files', description: 'Leans into transparency by leaking all classified records to Congress to destroy Hydra.' },
      { year: '2016', title: 'Sokovia Accords Defiance', description: 'Allows Steve and Bucky to escape at the airport; subsequently goes on the run.' },
      { year: '2016', title: 'Destroys the Red Room', description: 'Reunites with Yelena Belova, Melina, and Alexei to free all brainwashed Widows.' },
      { year: '2023', title: 'The Vormir Sacrifice', description: 'Jumps from the cliff of Vormir so Clint can claim the Soul Stone.', spoiler: true }
    ],
    relationships: [
      { character_id: 'hawkeye', character_name: 'Clint Barton', relation: 'Partner', notes: 'Best friend with whom she shared the mystery of Budapest; saved each other repeatedly.' },
      { character_id: 'captain-america', character_name: 'Steve Rogers', relation: 'Friend', notes: 'Bound by pure loyalty and moral integrity across the fall of S.H.I.E.L.D. and the Blip.' }
    ],
    quotes: [
      { quote: 'I used to have nothing. And then I got this. This job... this family.', context: 'Discussing the Avengers in Endgame.' },
      { quote: 'Let me go. It\'s okay.', context: 'Her final words to Clint Barton on Vormir.' }
    ],
    fun_facts: [
      'Natasha Romanoff was born on December 3, 1984 in Stalingrad, Soviet Union.',
      'Her "ledger" included operations across São Paulo, Budapest, and Osaka before joining S.H.I.E.L.D.'
    ],
    hero_image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    background_image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop'
    ],
    accent_theme: {
      primary: '#ef4444',
      glow: 'rgba(239, 68, 68, 0.45)',
      border: 'rgba(239, 68, 68, 0.3)'
    },
    where_are_they_now: {
      current_mcu_status: 'Deceased on Vormir (2023). Heroic martyr of the Infinity Saga.',
      last_known_appearance: 'Black Widow (2021) / Hawkeye series memorialization',
      post_endgame_development: 'Sister Yelena Belova continues her legacy, joining the Thunderbolts*.',
      future_status: 'NONE',
      notes: 'Natasha\'s soul exchange on Vormir is permanent in Earth-616 canon.',
      source: 'Marvel Studios Canon'
    },
    source_urls: [
      { label: 'Marvel Official Black Widow Profile', url: 'https://www.marvel.com/characters/black-widow-natasha-romanoff' }
    ],
    last_verified: '2026-09-28',
    content_version: 'v2.4.0',
    views_count: 1980,
    favorites_count: 1120
  },
  {
    id: 'spider-man',
    name: 'Spider-Man',
    real_name: 'Peter Benjamin Parker',
    hero_title: 'Your Friendly Neighborhood Avenger',
    category: 'CORE AVENGERS',
    status: 'ACTIVE',
    team_status: 'Knighted Avenger by Tony Stark',
    first_appearance: 'Captain America: Civil War (2016)',
    last_appearance: 'Spider-Man: No Way Home (2021)',
    origin: 'A brilliant Queens high school teenager bitten by a radioactive spider, Peter embraced the philosophy that with great power comes great responsibility after the tragic loss of his Uncle Ben and Aunt May.',
    powers: [
      'Superhuman Strength, Agility, Speed & Balance',
      'Spider-Sense (Precognitive Danger Detection)',
      'Wall-Crawling & Surface Adhesion',
      'Genius-Level Chemical & Mechanical Intellect',
      'Accelerated Cellular Healing'
    ],
    weapons: [
      'Synthetic Web-Shooters & Specialized Web Fluids',
      'Iron Spider Armor (Nanotech waldoes)',
      'Integrated Nano Suit',
      'Handmade Classic Red & Blue Suit'
    ],
    affiliations: [
      'Avengers (Knighted Member)',
      'Midtown School of Science and Technology',
      'Stark Industries Internship (Alumni)'
    ],
    storyline: {
      origin: 'Operating anonymously around Queens stopping petty crimes, Peter was tracked down by Tony Stark in 2016.',
      the_call: 'Brought to Germany by Tony during Civil War, Peter stole Captain America\'s shield and took down Giant-Man.',
      rise: 'Defeated the Vulture on Coney Island, proving his worth without relying on Stark\'s high-tech suit.',
      greatest_battles: 'Leipzig Airport (2016), Battle of Titan (2018), Battle of Earth (2019), London Drone Swarm (2024), and Statue of Liberty Multiverse Clash (2024).',
      losses: 'Dusted on Titan in Tony\'s arms; endured the murder of Aunt May by Green Goblin; lost all personal memories of him held by the entire world.',
      turning_point: 'Cured the Multiverse villains with help from Peter-Two and Peter-Three, choosing empathy over vengeance.',
      legacy: 'Requested Doctor Strange cast a universal forgetting spell, sacrificing his friendships with Ned and MJ to save the fabric of reality.',
      where_are_they_now: 'Operating completely solo in New York in a handmade cloth suit, monitoring police radio frequencies.'
    },
    timeline: [
      { year: '2016', title: 'Civil War Debut', description: 'Catches Bucky\'s metal fist and trips Giant-Man with AT-AT tactics.' },
      { year: '2017', title: 'Homecoming & Vulture', description: 'Lifts fallen warehouse rubble by willpower and captures Adrian Toomes.' },
      { year: '2018', title: 'Knighted & The Titan Snap', description: 'Stark dubs him an Avenger aboard Ebony Maw\'s Q-Ship; turns to dust on Titan.' },
      { year: '2023', title: 'Instant Kill Activated', description: 'Resurrects in Endgame, shields the Nano Gauntlet, and mourns Tony Stark.' },
      { year: '2024', title: 'Mysterio & Identity Exposed', description: 'Defeats Quentin Beck\'s drones in London, only for Beck to broadcast his real name.' },
      { year: '2024', title: 'No Way Home Sacrifice', description: 'Doctor Strange erases Peter Parker from human memory to seal multiverse fractures.', spoiler: true }
    ],
    relationships: [
      { character_id: 'iron-man', character_name: 'Tony Stark', relation: 'Mentor', notes: 'His father figure and mentor whose memory pushed Peter to step up as a true hero.' },
      { character_id: 'doctor-strange', character_name: 'Stephen Strange', relation: 'Ally', notes: 'Fought together on Titan and cast the spell that saved the multiverse at devastating personal cost.' }
    ],
    quotes: [
      { quote: 'When you can do the things that I can, but you don\'t, and then the bad things happen... they happen because of you.', context: 'Explaining his core motivation to Tony Stark.' },
      { quote: 'With great power must also come great responsibility.', context: 'Aunt May\'s final words in No Way Home.' }
    ],
    fun_facts: [
      'Peter developed the tensile synthetic web fluid formula in his high school chemistry lab.',
      'He is the only mortal Avenger to have engaged both Thanos on Titan and the Green Goblin from an alternate universe.'
    ],
    hero_image: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1200&auto=format&fit=crop',
    background_image: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1920&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=300&auto=format&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?q=80&w=1200&auto=format&fit=crop'
    ],
    accent_theme: {
      primary: '#dc2626',
      glow: 'rgba(220, 38, 38, 0.45)',
      border: 'rgba(220, 38, 38, 0.3)'
    },
    where_are_they_now: {
      current_mcu_status: 'Active vigilante in Manhattan; identity completely unknown to all living beings.',
      last_known_appearance: 'Spider-Man: No Way Home (2021)',
      post_endgame_development: 'Living in a modest rental apartment studying for his GED.',
      future_status: 'CONFIRMED',
      future_project_name: 'Spider-Man 4 (In active development with Sony / Marvel Studios)',
      notes: 'Officially confirmed for another MCU solo feature directed by Destin Daniel Cretton.',
      source: 'Marvel Studios & Sony Pictures Official Announcements'
    },
    source_urls: [
      { label: 'Marvel Official Spider-Man Profile', url: 'https://www.marvel.com/characters/spider-man-peter-parker' }
    ],
    last_verified: '2026-09-28',
    content_version: 'v2.4.0',
    views_count: 3100,
    favorites_count: 1950
  },
  {
    id: 'doctor-strange',
    name: 'Doctor Strange',
    real_name: 'Dr. Stephen Vincent Strange, M.D., Ph.D.',
    hero_title: 'Master of the Mystic Arts',
    category: 'AVENGERS-ALLIED HEROES',
    status: 'ACTIVE',
    team_status: 'Cosmic Guardian & Multiverse Defender',
    first_appearance: 'Doctor Strange (2016)',
    last_appearance: 'Doctor Strange in the Multiverse of Madness (2022)',
    origin: 'An egotistical world-renowned neurosurgeon whose hands were shattered in a car crash. Seeking healing in Kamar-Taj, he was trained by the Ancient One, ultimately mastering the mystic arts to guard Earth against cosmic and dimensional incursions.',
    powers: [
      'Mastery of Eldritch Magic & Dimensional Travel (Sling Ring)',
      'Energy Constructs, Shields & Mirror Dimension Manipulation',
      'Astral Projection & Chrono-Spatial Scrying',
      'Flight via Cloak of Levitation',
      'Third Eye Mystic Awareness'
    ],
    weapons: [
      'Cloak of Levitation',
      'Eye of Agamotto (formerly Time Stone)',
      'Sling Ring',
      'Book of Vishanti (destroyed)'
    ],
    affiliations: [
      'Masters of the Mystic Arts',
      'Avengers (Key Strategic Ally)',
      'New York Sanctum (Master)'
    ],
    storyline: {
      origin: 'Stephen Strange exhausted his fortune seeking medical restoration before discovering mystic arts in Nepal.',
      the_call: 'Defended the London and New York Sanctums against Kaecilius and the zealots.',
      rise: 'Trapped the cosmic conqueror Dormammu in an infinite time loop, proclaiming "Dormammu, I\'ve come to bargain," saving Earth.',
      greatest_battles: 'Dark Dimension Bargain (2016), Battle of Titan (2018), Battle of Earth (2019), and Darkhold Wanda Incursion (2022).',
      losses: 'Lost his surgeon career and romance with Christine Palmer; surrendered the Time Stone to save Stark\'s life as the sole winning timeline scenario.',
      turning_point: 'Scried 14,000,605 possible futures on Titan to discover the singular path to victory.',
      legacy: 'Held back the floodwaters in Endgame and later traversed the multiverse to protect America Chavez from the corrupted Scarlet Witch.',
      where_are_they_now: 'Departed with Clea into the Dark Dimension to fix a reality incursion he caused.'
    },
    timeline: [
      { year: '2016', title: 'The Ancient One\'s Pupil', description: 'Awakens his astral form and defeats Kaecilius in the Mirror Dimension.' },
      { year: '2016', title: 'Dormammu Bargain', description: 'Endures infinite deaths to force the cosmic ruler to retreat.' },
      { year: '2018', title: '14,000,605 Futures', description: 'Trades the Time Stone for Stark\'s life, whispering "There was no other way."' },
      { year: '2023', title: 'The One Winning Future', description: 'Signals to Tony Stark with a raised finger during the final clash.', spoiler: true },
      { year: '2024', title: 'Spider-Man Multiverse Spell', description: 'Attempts to erase Peter Parker\'s notoriety, accidentally breaching the multiverse.' },
      { year: '2025', title: 'Multiverse of Madness & Clea', description: 'Dreamwalks into a corpse to defeat Wanda; travels with Clea to fix an incursion.' }
    ],
    relationships: [
      { character_id: 'scarlet-witch', character_name: 'Wanda Maximoff', relation: 'Rival', notes: 'Recognized Wanda\'s immense mythical prophecy as the Scarlet Witch and stopped her rampage across the multiverse.' },
      { character_id: 'iron-man', character_name: 'Tony Stark', relation: 'Ally', notes: 'Clashed egotistically on Ebony Maw\'s ship before forging the ultimate strategic plan to defeat Thanos.' }
    ],
    quotes: [
      { quote: 'Dormammu, I\'ve come to bargain.', context: 'Repeating his declaration across countless deaths in the Dark Dimension.' },
      { quote: 'If I tell you what happens, it won\'t happen.', context: 'To Tony Stark before the final battle.' }
    ],
    fun_facts: [
      'Strange possesses eidetic memory and mastered Sanskrit in months.',
      'He currently sports a mystical Third Eye manifest from using the Darkhold.'
    ],
    hero_image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    background_image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=300&auto=format&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
    ],
    accent_theme: {
      primary: '#8b5cf6',
      glow: 'rgba(139, 92, 246, 0.45)',
      border: 'rgba(139, 92, 246, 0.3)'
    },
    where_are_they_now: {
      current_mcu_status: 'Active sorcerer traveling in the Dark Dimension alongside Clea.',
      last_known_appearance: 'Doctor Strange in the Multiverse of Madness (2022)',
      post_endgame_development: 'Confronting cosmic incursions threatening multiple timelines.',
      future_status: 'CONFIRMED',
      future_project_name: 'Avengers: Doomsday / Avengers: Secret Wars',
      notes: 'Crucial pillar for the upcoming Multiverse Saga climaxes.',
      source: 'Marvel Studios Production Status'
    },
    source_urls: [
      { label: 'Marvel Official Doctor Strange Profile', url: 'https://www.marvel.com/characters/doctor-strange-stephen-strange' }
    ],
    last_verified: '2026-09-28',
    content_version: 'v2.4.0',
    views_count: 2240,
    favorites_count: 1310
  },
  {
    id: 'scarlet-witch',
    name: 'Scarlet Witch',
    real_name: 'Wanda Maximoff',
    hero_title: 'Harbinger of Chaos Magic',
    category: 'CORE AVENGERS',
    status: 'UNKNOWN',
    team_status: 'Former Core Avenger / Mythological Reality Bender',
    first_appearance: 'Captain America: The Winter Soldier (2014) / Age of Ultron (2015)',
    last_appearance: 'Doctor Strange in the Multiverse of Madness (2022)',
    origin: 'Born in Sokovia alongside her twin brother Pietro, Wanda\'s latent witchcraft was catalyzed by exposure to the Mind Stone in HYDRA\'s experiments under Baron Strucker.',
    powers: [
      'Chaos Magic & Probability Hexes',
      'Spontaneous Creation & Reality Warping',
      'Telekinesis, Forcefield Generation & Levitation',
      'Telepathy, Mental Illusions & Mind Control',
      'Multiverse Dreamwalking'
    ],
    weapons: [
      'The Darkhold (destroyed on Mount Wundagore)',
      'Chaos Energy Spheres'
    ],
    affiliations: [
      'Avengers (Former Member)',
      'HYDRA (Volunteer - former)',
      'Westview Anomaly (Creator)'
    ],
    storyline: {
      origin: 'Watched her parents killed by a Stark Industries mortar that never detonated, fueling years of vengeance.',
      the_call: 'Initially joined Ultron to take down the Avengers, before discovering his intent to cause global extinction.',
      rise: 'Officially joined the Avengers after Sokovia, training under Steve Rogers and Natasha Romanoff.',
      greatest_battles: 'Battle of Sokovia (2015), Airport Clash (2016), Defense of Vision in Edinburgh & Wakanda (2018), Solo Assault on Thanos (2019), and Illuminati Massacre (2022).',
      losses: 'Lost her twin Pietro; accidentally killed civilians in Lagos; forced to shatter the Mind Stone in Vision\'s forehead before Thanos reversed time and murdered him again.',
      turning_point: 'Grief over Vision culminated in creating the Westview Hex, resurrecting Vision and creating sons Billy and Tommy, ultimately accepting her destiny as the prophesied Scarlet Witch.',
      legacy: 'Corrupted by the Darkhold while searching for her children in other universes, Wanda realized the horror she became, bringing down Mount Wundagore to destroy every copy of the Darkhold across all realities.',
      where_are_they_now: 'Status unconfirmed. Buried beneath Mount Wundagore\'s rubble with a scarlet flash of energy. Canonical status remains unknown.'
    },
    timeline: [
      { year: '2015', title: 'The Sokovian Loss', description: 'Pietro is killed; Wanda obliterates Ultron sentries in pure rage.' },
      { year: '2016', title: 'Lagos & The Accords', description: 'Diverts Crossbones\' explosion, leading to the Sokovia Accords.' },
      { year: '2018', title: 'Double Loss on Vision', description: 'Destroys the Mind Stone; Thanos uses the Time Stone to undo it and snaps.' },
      { year: '2023', title: '"You Will" Vengeance', description: 'Nearly crushes Thanos single-handedly in Endgame.' },
      { year: '2023', title: 'Westview & True Scarlet Witch', description: 'Defeats Agatha Harkness and unlocks the mythical Scarlet Witch crown.' },
      { year: '2025', title: 'Wundagore Destruction', description: 'Collapses Mount Wundagore onto herself to eradicate the Darkhold.', spoiler: true }
    ],
    relationships: [
      { character_id: 'vision', character_name: 'Vision', relation: 'Family', notes: 'The love of her life with whom she shared a brief domestic fantasy in Westview.' },
      { character_id: 'hawkeye', character_name: 'Clint Barton', relation: 'Mentor', notes: 'Clint inspired her to step through the door and become an Avenger in Sokovia.' }
    ],
    quotes: [
      { quote: 'You took everything from me.', context: 'Confronting Thanos in Avengers: Endgame.' },
      { quote: 'You break the rules and become a hero. I do it and I become the enemy. That doesn\'t seem fair.', context: 'To Doctor Strange in the Multiverse of Madness.' }
    ],
    fun_facts: [
      'According to Agatha Harkness, the Scarlet Witch\'s magic exceeds that of the Sorcerer Supreme.',
      'Her twin Pietro was born 12 minutes before her.'
    ],
    hero_image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
    background_image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1920&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=300&auto=format&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
    ],
    accent_theme: {
      primary: '#f43f5e',
      glow: 'rgba(244, 63, 94, 0.45)',
      border: 'rgba(244, 63, 94, 0.3)'
    },
    where_are_they_now: {
      current_mcu_status: 'Status currently unconfirmed following Mount Wundagore collapse.',
      last_known_appearance: 'Doctor Strange in the Multiverse of Madness (2022) / Agatha All Along references',
      post_endgame_development: 'Her spell on Westview and twin sons continue echoing across Phase 5 storylines.',
      future_status: 'UNCONFIRMED',
      future_project_name: 'Rumored solo / Vision Quest project',
      notes: 'Official Marvel Studios representatives have teased that characters with magic rarely remain permanently fallen.',
      source: 'Marvel Studios Multiverse of Madness Press Documentation'
    },
    source_urls: [
      { label: 'Marvel Official Scarlet Witch Profile', url: 'https://www.marvel.com/characters/scarlet-witch-wanda-maximoff' }
    ],
    last_verified: '2026-09-28',
    content_version: 'v2.4.0',
    views_count: 2750,
    favorites_count: 1720
  },
  {
    id: 'black-panther',
    name: 'Black Panther',
    real_name: 'T\'Challa / Shuri',
    hero_title: 'King & Protector of Wakanda',
    category: 'CORE AVENGERS',
    status: 'LEGACY',
    team_status: 'Valued Ally & Strategic Coalition Leader',
    first_appearance: 'Captain America: Civil War (2016)',
    last_appearance: 'Black Panther: Wakanda Forever (2022)',
    origin: 'Blessed by the Heart-Shaped Herb through the Panther Goddess Bast and protected by the Great Mound\'s vibranium weave, the mantle of Black Panther shields Wakanda from global exploitation.',
    powers: [
      'Heart-Shaped Herb Superhuman Agility, Strength & Senses',
      'Kinetic Energy Absorption & Redistribution Weave',
      'Vibranium Retractable Claws',
      'Master Tactician & Martial Artist',
      'Ancestral Spiritual Connection'
    ],
    weapons: [
      'Habit Suit (Vibranium Nanotech)',
      'Kimoyo Beads',
      'Vibranium Spear & Energy Gauntlets'
    ],
    affiliations: [
      'Wakandan Royal Family',
      'Avengers (Allied Coalition)',
      'War Dogs (Hatut Zeraze)'
    ],
    storyline: {
      origin: 'King T\'Chaka was murdered at the Vienna UN bombing. T\'Challa sought vengeance against Bucky before discovering Zemo\'s manipulation and choosing justice instead.',
      the_call: 'Opened Wakanda\'s borders and technology to the world after defeating Erik Killmonger.',
      rise: 'Hosted the Avengers in Wakanda during the Infinity War, leading armies against the Outriders.',
      greatest_battles: 'Battle of Wakanda (2018), Battle of Earth (2019), and Battle against Talokan (2022).',
      losses: 'Lost King T\'Chaka, Queen Ramonda, and King T\'Challa to a sudden illness.',
      turning_point: 'Princess Shuri synthesized the synthetic heart-shaped herb, overcoming vengeance against Namor to establish peace between Wakanda and Talokan.',
      legacy: 'T\'Challa\'s legacy endures through his sister Shuri as the Black Panther and his son Toussaint (Prince T\'Challa).',
      where_are_they_now: 'Shuri serves as the active Black Panther, guarding Wakanda while M\'Baku assumed the throne.'
    },
    timeline: [
      { year: '2016', title: 'Civil War & Vengeance Refused', description: 'Prevents Zemo from committing suicide so he can face trial.' },
      { year: '2018', title: 'King of Wakanda', description: 'Defeats Killmonger and establishes Wakandan Outreach Centers.' },
      { year: '2018', title: 'Yibambe in Infinity War', description: 'Leads the Wakandan front lines; disintegrates into dust in the Blip.' },
      { year: '2023', title: 'First through the Portals', description: 'Leads the armies of Wakanda through the first portal alongside Shuri and Okoye.' },
      { year: '2024', title: 'Wakanda Forever & Shuri Rises', description: 'Shuri creates the synthetic herb and becomes the new Black Panther.', spoiler: true }
    ],
    relationships: [
      { character_id: 'captain-america', character_name: 'Steve Rogers', relation: 'Ally', notes: 'Gave Steve sanctuary and crafted his new vibranium shields for the Infinity War.' },
      { character_id: 'bucky-barnes', character_name: 'Bucky Barnes', relation: 'Protege', notes: 'Wakandan scientists healed Bucky of Hydra\'s mental triggers, dubbing him the White Wolf.' }
    ],
    quotes: [
      { quote: 'Wakanda Forever!', context: 'The rallying cry of Wakanda and freedom.' },
      { quote: 'In times of crisis, the wise build bridges, while the foolish build barriers.', context: 'United Nations address.' }
    ],
    fun_facts: [
      'The Black Panther habit absorbs kinetic impact energy and glows purple as it charges up for release.',
      'Chadwick Boseman\'s portrayal inspired millions globally and remains immortalized in MCU lore.'
    ],
    hero_image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    background_image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1920&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=300&auto=format&fit=crop',
    gallery_images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop'
    ],
    accent_theme: {
      primary: '#a855f7',
      glow: 'rgba(168, 85, 247, 0.45)',
      border: 'rgba(168, 85, 247, 0.3)'
    },
    where_are_they_now: {
      current_mcu_status: 'Shuri serves as the active Black Panther protector; M\'Baku is King of Wakanda.',
      last_known_appearance: 'Black Panther: Wakanda Forever (2022)',
      post_endgame_development: 'Prince T\'Challa (son of T\'Challa and Nakia) is being raised peacefully in Haiti.',
      future_status: 'CONFIRMED',
      future_project_name: 'Upcoming Avengers films / Wakanda television spin-offs',
      notes: 'Black Panther will return to defend Earth.',
      source: 'Marvel Studios Official Production Status'
    },
    source_urls: [
      { label: 'Marvel Official Black Panther Profile', url: 'https://www.marvel.com/characters/black-panther-t-challa' }
    ],
    last_verified: '2026-09-28',
    content_version: 'v2.4.0',
    views_count: 2310,
    favorites_count: 1410
  }
];
