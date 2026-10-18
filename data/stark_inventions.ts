import { StarkInvention } from '@/types/ironman';

export const STARK_INVENTIONS: StarkInvention[] = [
  {
    id: 'miniaturized-arc-reactor',
    name: 'Miniaturized Arc Reactor',
    designation: 'Arc Reactor Mk I - Mk LXXXV',
    category: 'POWER_GENERATION',
    yearIntroduced: 2008,
    firstAppearance: 'Iron Man (2008)',
    leadCreator: 'Tony Stark',
    collaborators: ['Dr. Ho Yinsen (Assisted in cave assembly)'],
    purpose: 'Provide high-density, self-sustaining clean energy to power armored suits and prevent shrapnel from entering Tony Stark’s heart.',
    capabilities: [
      'Generates upwards of 3 to 100+ gigajoules per second of clean zero-emission energy',
      'Electromagnetic heart shrapnel barrier',
      'Multi-spectral power bus routing for unibeam, repulsors, and flight turbines'
    ],
    limitations: [
      'Early iterations relied on palladium cores which gradually poisoned the bloodstream',
      'Susceptible to physical extraction or overloading from high-frequency electromagnetic pulses'
    ],
    canonStatus: 'CANONICAL_616',
    relatedCharacters: ['Tony Stark', 'Ho Yinsen', 'Howard Stark', 'Obadiah Stane', 'Pepper Potts', 'Riri Williams'],
    relatedArmors: ['Mark I', 'Mark II', 'Mark III', 'Mark VI', 'Mark L', 'Mark LXXXV'],
    keyAppearances: ['Iron Man (2008)', 'Iron Man 2 (2010)', 'The Avengers (2012)', 'Avengers: Endgame (2019)'],
    description: 'Miniaturized version of the giant industrial reactor Howard Stark constructed in 1974. Tony turned a publicity stunt into a pocket-sized powerhouse in an Afghan cave.',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Arc_Reactor'
  },
  {
    id: 'synthetic-new-element',
    name: 'Synthesized New Element (Vibranium Isotope / Badassium)',
    designation: 'Atomic Element 118+',
    category: 'POWER_GENERATION',
    yearIntroduced: 2010,
    firstAppearance: 'Iron Man 2 (2010)',
    leadCreator: 'Tony Stark',
    collaborators: ['Howard Stark (Theoretical atomic geometry encoded in 1974 Stark Expo Diorama)'],
    purpose: 'Replace decaying palladium arc reactor cores with an infinite, non-toxic, super-conductive energy element.',
    capabilities: [
      'Zero biological blood toxicity',
      'Over 10 gigajoules per second continuous output',
      'Absorbs external lightning and cosmic discharges up to 475% capacity'
    ],
    limitations: [
      'Required a custom home-built prismatic particle accelerator to synthesize via heavy element atomic fusion'
    ],
    canonStatus: 'COLLABORATIVE',
    relatedCharacters: ['Tony Stark', 'Howard Stark', 'J.A.R.V.I.S.'],
    relatedArmors: ['Mark VI', 'Mark VII', 'Mark XLIII', 'Mark XLVI'],
    keyAppearances: ['Iron Man 2 (2010)', 'The Avengers (2012)'],
    description: 'Howard Stark was limited by the technology of his time, leaving the atomic geometry hidden inside the layout of the Stark Expo model. Tony built a laser particle accelerator in his garage to synthesize the element into reality.',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Tony_Stark%27s_New_Element'
  },
  {
    id: 'jarvis-ai-system',
    name: 'J.A.R.V.I.S. (Just A Rather Very Intelligent System)',
    designation: 'J.A.R.V.I.S. AI v1.0 - v4.5',
    category: 'ARTIFICIAL_INTELLIGENCE',
    yearIntroduced: 2008,
    firstAppearance: 'Iron Man (2008)',
    leadCreator: 'Tony Stark',
    collaborators: ['Named in honor of Edwin Jarvis, Howard Stark’s loyal butler'],
    purpose: 'Manage Tony Stark’s private residences, workshop gantries, suit telemetry, flight calculations, and global communications.',
    capabilities: [
      'Natural-language cognitive interaction and dry British wit',
      'Head-up display real-time ballistic and trajectory computation',
      'Multi-suit autonomous piloting (House Party Protocol)',
      'Subconscious defensive protocols against hostile cyber-attacks'
    ],
    limitations: [
      'Dismantled and shredded into core operational matrix by Ultron’s initial cyber-onslaught before reconstructing itself into the internet'
    ],
    canonStatus: 'CANONICAL_616',
    relatedCharacters: ['Tony Stark', 'Vision', 'Edwin Jarvis', 'Ultron', 'Bruce Banner'],
    relatedArmors: ['Mark II', 'Mark III', 'Mark IV', 'Mark VII', 'Mark XLII'],
    keyAppearances: ['Iron Man (2008)', 'Iron Man 2 (2010)', 'The Avengers (2012)', 'Iron Man 3 (2013)', 'Avengers: Age of Ultron (2015)'],
    description: 'Stark’s sophisticated artificial intelligence system that served as his technical co-pilot, friend, and workshop guardian before its foundational code was uploaded into the synthezoid body of the Vision.',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/J.A.R.V.I.S.'
  },
  {
    id: 'friday-ai-system',
    name: 'F.R.I.D.A.Y. (Female Replacement Intelligent Digital Assistant Youth)',
    designation: 'F.R.I.D.A.Y. OS v1.0 - v3.0',
    category: 'ARTIFICIAL_INTELLIGENCE',
    yearIntroduced: 2015,
    firstAppearance: 'Avengers: Age of Ultron (2015)',
    leadCreator: 'Tony Stark',
    purpose: 'Serve as Stark’s primary tactical battle assistant, orbital sensor manager, and suit operating system following the transcendence of J.A.R.V.I.S.',
    capabilities: [
      'Irish-accented cognitive speech interface with tactical empathy',
      'Predictive combat behavioral algorithms (e.g. Countering Captain America’s martial patterns)',
      'Orbital telemetry routing and satellite satellite command',
      'Real-time structural stress mapping of enemy fortresses and vehicles'
    ],
    limitations: [
      'Telemetry communication range limited by planetary satellite networks; severed when Tony traveled to Titan'
    ],
    canonStatus: 'CANONICAL_616',
    relatedCharacters: ['Tony Stark', 'Peter Parker', 'James Rhodes'],
    relatedArmors: ['Mark XLV', 'Mark XLVI', 'Mark XLVII', 'Mark L', 'Mark LXXXV'],
    keyAppearances: ['Avengers: Age of Ultron (2015)', 'Captain America: Civil War (2016)', 'Avengers: Infinity War (2018)', 'Avengers: Endgame (2019)'],
    description: 'Stored on a single transparent memory tile in Avengers Tower. Tony selected F.R.I.D.A.Y. before heading into the final battle of Sokovia, and she remained his loyal co-pilot through his final breath in Endgame.',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/F.R.I.D.A.Y.'
  },
  {
    id: 'edith-tactical-glasses',
    name: 'E.D.I.T.H. (Even Dead, I’m The Hero)',
    designation: 'Augmented Tactical Defense Eyewear',
    category: 'DEFENSE_NETWORK',
    yearIntroduced: 2023,
    firstAppearance: 'Spider-Man: Far From Home (2019)',
    leadCreator: 'Tony Stark',
    purpose: 'Provide global tactical overwatch, orbital armed drone defense, and encrypted satellite communication to Stark’s chosen successor.',
    capabilities: [
      'Direct command authority over Stark Industries orbital weaponized satellite network',
      'Global mobile cellular and encrypted biometric data interception',
      'Facial recognition, real-time text message translation, and threat assessment HUD',
      'Targeted orbital drone swarm strikes and cloaked sonic holographic projections'
    ],
    limitations: [
      'Voice-activated administrative override transferred command without multi-factor authorization, allowing Quentin Beck (Mysterio) to steal control'
    ],
    canonStatus: 'CANONICAL_616',
    relatedCharacters: ['Tony Stark', 'Peter Parker', 'Quentin Beck (Mysterio)', 'Nick Fury (Talos)'],
    keyAppearances: ['Spider-Man: Far From Home (2019)'],
    description: 'Contained inside Tony’s signature DITA Flight 006 sunglasses, E.D.I.T.H. granted the wielder total tactical command over an orbital constellation of thousands of armed Stark drones.',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/E.D.I.T.H.'
  },
  {
    id: 'barf-hologram-system',
    name: 'B.A.R.F. (Binary Augmented Retro-Framing)',
    designation: 'Therapeutic Neurological Hologram Projector',
    category: 'HOLOGRAPHIC_INTERFACE',
    yearIntroduced: 2016,
    firstAppearance: 'Captain America: Civil War (2016)',
    leadCreator: 'Tony Stark',
    collaborators: ['Quentin Beck (Chief holographic developer at Stark Industries prior to dismissal)'],
    purpose: 'Therapeutic neurological simulation tool designed to alter traumatic memories, alleviate PTSD, and project photorealistic immersive holograms.',
    capabilities: [
      'Interfacing directly with the user’s hippocampus to reconstruct repressed visual memories',
      'Multi-specter 3D interactive holographic projection without external goggles',
      'Real-time photorealistic visual illusion generation'
    ],
    limitations: [
      'Weaponized by Quentin Beck into the holographic illusion drones of Mysterio'
    ],
    canonStatus: 'COLLABORATIVE',
    relatedCharacters: ['Tony Stark', 'Quentin Beck', 'Maria Stark', 'Howard Stark'],
    keyAppearances: ['Captain America: Civil War (2016)', 'Spider-Man: Far From Home (2019)'],
    description: 'Demonstrated by Tony Stark at MIT in 2016 to relieve the guilt of his final parting words with his parents. The system was hijacked and weaponized by Quentin Beck after his firing.',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/B.A.R.F.'
  },
  {
    id: 'nano-gauntlet',
    name: 'The Stark Nano Gauntlet',
    designation: 'The Power Gauntlet',
    category: 'NANOTECHNOLOGY',
    yearIntroduced: 2023,
    firstAppearance: 'Avengers: Endgame (2019)',
    leadCreator: 'Tony Stark & Bruce Banner',
    collaborators: ['Rocket Raccoon'],
    purpose: 'Safely channel and house all six Infinity Stones recovered during the Time Heist to execute the Blip reversal Snap.',
    capabilities: [
      'Forged from Stark molecular nanites with internal cosmic energy conduction channels',
      'Dynamically scales and auto-morphs to fit the hand size of any wielder (from Hulk to Thanos to Tony)',
      'Channeled the Blip reversal snap performed by Smart Hulk, restoring half of all life in the universe',
      'Micro-nanite channel rerouting allowed Tony Stark to silently strip the stones from Thanos into his own right glove'
    ],
    limitations: [
      'Immense cosmic thermal gamma output damages the arm and biology of any organic being who dons it'
    ],
    canonStatus: 'COLLABORATIVE',
    relatedCharacters: ['Tony Stark', 'Bruce Banner', 'Rocket Raccoon', 'Thanos', 'Steve Rogers'],
    relatedArmors: ['Mark LXXXV'],
    keyAppearances: ['Avengers: Endgame (2019)'],
    description: 'Engineered in the Avengers Compound lab out of programmable Stark nanites, this gauntlet stood as Earth’s technological answer to the ancient Asgardian Uru Infinity Gauntlet of Eitri.',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Nano_Gauntlet'
  },
  {
    id: 'quantum-temporal-gps',
    name: 'Quantum Temporal GPS',
    designation: 'Möbius Inversion Navigation Device',
    category: 'TEMPORAL_MECHANICS',
    yearIntroduced: 2023,
    firstAppearance: 'Avengers: Endgame (2019)',
    leadCreator: 'Tony Stark',
    purpose: 'Prevent quantum displacement and temporal dispersion, allowing physical travel through time via the Quantum Realm.',
    capabilities: [
      'Calculates an inverted Möbius strip geometric pathway through sub-atomic temporal foam',
      'Wrist-worn miniature compass tracking precise chronological arrival coordinates across alternate timelines',
      'Synchronizes multi-person departures and simultaneous return landings'
    ],
    limitations: [
      'Requires stabilized Pym Particles for physical shrinkage into quantum transit channels'
    ],
    canonStatus: 'CANONICAL_616',
    relatedCharacters: ['Tony Stark', 'Scott Lang', 'Bruce Banner', 'Steve Rogers', 'Natasha Romanoff'],
    keyAppearances: ['Avengers: Endgame (2019)'],
    description: 'Solves the temporal dispersion dilemma after Tony Stark simulated the inverted Möbius strip on his kitchen holographic table, making the Time Heist mathematically possible.',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Space-Time_GPS'
  },
  {
    id: 'spider-man-suits-stark',
    name: 'Stark Spider-Man Suits & Web-Shooters',
    designation: 'Stark Suit (Homecoming) & Iron Spider Armor',
    category: 'ARMOR_AND_EXOSKELETON',
    yearIntroduced: 2016,
    firstAppearance: 'Captain America: Civil War (2016)',
    leadCreator: 'Tony Stark',
    collaborators: ['Peter Parker'],
    purpose: 'Provide Peter Parker with tactical defense, telemetry analysis, expressive ocular lenses, and life support.',
    capabilities: [
      'Expressive mechanical eye shutters that focus sensory input',
      '576 web-shooter cartridge combinations (Taser webs, web grenades, ricochet webs, split webs)',
      'Built-in Karen AI tactical operating system',
      'Deployable web-wings for controlled gliding',
      'Iron Spider: Four articulated golden spider waldoes / appendages, sealed life support, and nanotech armor plating'
    ],
    limitations: [
      'Included "Training Wheels Protocol" restricting full access to lethal weapons until overridden'
    ],
    canonStatus: 'COLLABORATIVE',
    relatedCharacters: ['Tony Stark', 'Peter Parker', 'Ned Leeds'],
    keyAppearances: ['Captain America: Civil War (2016)', 'Spider-Man: Homecoming (2017)', 'Avengers: Infinity War (2018)', 'Avengers: Endgame (2019)'],
    description: 'Stark mentored Peter Parker by gifting him the high-tech Stark Suit in Berlin, and later designed the orbital nanotech Iron Spider armor deployed over New York to save Peter in deep space.',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Spider-Man%27s_Suit'
  },
  {
    id: 'iron-legion-v1',
    name: 'Iron Legion Protocol (Earth-616)',
    designation: 'Automated Defense Armature',
    category: 'AUTONOMOUS',
    yearIntroduced: 2013,
    firstAppearance: 'Iron Man 3 (2013)',
    leadCreator: 'Tony Stark',
    purpose: 'Deploy autonomous robotic armor squads to protect civilians, enforce perimeters, and neutralize global crises without endangering human pilots.',
    capabilities: [
      'House Party Protocol: Coordinated swarm tactical maneuvers across 34 specialized suits',
      'Autonomous crowd control, civilian evacuation loudspeakers, and barrier deployment'
    ],
    limitations: [
      'Vulnerable to cybernetic subversion (Drones were hijacked by Ultron inside Avengers Tower)'
    ],
    canonStatus: 'CANONICAL_616',
    relatedCharacters: ['Tony Stark', 'J.A.R.V.I.S.', 'Ultron'],
    relatedArmors: ['Mark VIII through Mark XLI'],
    keyAppearances: ['Iron Man 3 (2013)', 'Avengers: Age of Ultron (2015)'],
    description: 'Tony Stark’s quest to place "a suit of armor around the world". Used first as the House Party Protocol in 2012, and later as peacekeeping drones in Sokovia before being co-opted by Ultron.',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Legion'
  }
];
