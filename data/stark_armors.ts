import { IronManArmor } from '@/types/ironman';

export const STARK_ARMORS: IronManArmor[] = [
  {
    mark: 1,
    romanNumeral: 'Mark I',
    name: 'The Cave Prototype',
    nickname: 'The Behemoth',
    firstAppearance: {
      title: 'Iron Man',
      year: 2008,
      timelineEvent: 'Escape from Kunar Province, Afghanistan'
    },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: {
      composition: 'Manually forged cast iron and steel from dismantled Jericho missile shells',
      canonVerified: true,
      notes: 'Constructed under captive surveillance with rudimentary blacksmithing tools'
    },
    propulsionAndFlight: {
      flightSpeed: 'Sub-sonic ballistic trajectory (Single-use jump)',
      thrusterType: 'Solid-fuel chemical rocket boosters in boots',
      propulsionNotes: 'Crash-landed in desert sands after fuel depletion'
    },
    powerSystem: {
      arcReactorCore: 'Palladium Miniature Arc Reactor Mk 1',
      powerOutput: '3 gigajoules per second',
      chargeDuration: 'Approximately 15 minutes of heavy operational runtime'
    },
    weaponsAndPayload: [
      'Twin arm-mounted petroleum/solid fuel flamethrowers',
      'Single manually-fired miniature high-explosive missile',
      'Pneumatic hydraulic assist punches'
    ],
    specialFeatures: [
      'Bullet-resistant armored blast plating',
      'Chain-and-sprocket manual gear transmission',
      'Primitive optical slit viewer'
    ],
    limitationsAndDamage: [
      'Exposed belts, gears, and hydraulic lines on rear and joints',
      'Zero sustained flight stabilization; catastrophic crash upon landing',
      'Scattered across desert sands; remnants salvaged by Ten Rings and Obadiah Stane'
    ],
    associatedBattles: [
      'Ten Rings Outpost Escape (2008)'
    ],
    developmentHistory: 'Designed in secret by Tony Stark and Dr. Ho Yinsen while held hostage by the Ten Rings terrorist cell in Kunar Province.',
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_I'
  },
  {
    mark: 2,
    romanNumeral: 'Mark II',
    name: 'Aerodynamic Flight Prototype',
    nickname: 'Silver Prototype',
    firstAppearance: {
      title: 'Iron Man',
      year: 2008,
      timelineEvent: 'First supersonic flight over Santa Monica'
    },
    category: 'RAPID_DEPLOYMENT',
    status: 'RETIRED',
    materials: {
      composition: 'Polished chrome-nickel steel alloy',
      canonVerified: true,
      notes: 'Unpainted raw silver reflective surface'
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 2.5+',
      thrusterType: 'Dual variable-vector boot thrusters with twin back-flap control surfaces',
      propulsionNotes: 'Suffered catastrophic high-altitude icing above 40,000 feet'
    },
    powerSystem: {
      arcReactorCore: 'Palladium Miniature Arc Reactor Mk 2',
      powerOutput: '3.2 gigajoules per second'
    },
    weaponsAndPayload: [
      'Twin palm-mounted repulsor gauntlets',
      'Chest-mounted unibeam focal projector'
    ],
    specialFeatures: [
      'First integrated J.A.R.V.I.S. HUD operating system with head-up telemetry',
      'Actuated rear braking flaps and calf stabilizer fins',
      'Independent repulsor flight balance control'
    ],
    limitationsAndDamage: [
      'High-altitude atmospheric freezing causes complete avionics failure and system reboot',
      'Lacked dedicated heavy ballistics or missile countermeasure pods',
      'Confiscated by James Rhodes and weaponized by Justin Hammer into War Machine Mark I'
    ],
    associatedBattles: [
      'SR-71 Blackbird Altitude Record Flight Test (2008)',
      'Malibu House Duel with Mark IV (2010)'
    ],
    developmentHistory: 'Built to explore full aerodynamic flight, supersonic stability, and HUD weapon integration in Stark’s Malibu workshop.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_II'
  },
  {
    mark: 3,
    romanNumeral: 'Mark III',
    name: 'Gold-Titanium Battle Armor',
    nickname: 'The Classic Red & Gold',
    firstAppearance: {
      title: 'Iron Man',
      year: 2008,
      timelineEvent: 'Gulmira Humanitarian Raid & Battle with Iron Monger'
    },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: {
      composition: 'Gold-titanium alloy from Seraphim tactical satellite program',
      canonVerified: true,
      notes: 'Eliminated high-altitude icing issue while preserving strength-to-weight ratio'
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 3+',
      thrusterType: 'Twin boot thrusters with variable contour control flap winglets'
    },
    powerSystem: {
      arcReactorCore: 'Palladium Miniature Arc Reactor Mk 2',
      powerOutput: '3.5 gigajoules per second'
    },
    weaponsAndPayload: [
      'High-frequency repulsor gauntlets',
      'Chest unibeam capable of penetrating heavy armored hulls',
      'Shoulder-mounted multi-directional micro-munitions pods',
      'Forearm armor-piercing anti-tank missile',
      'Hip-mounted magnesium infrared countermeasure flares'
    ],
    specialFeatures: [
      'Sealed life-support system for high-altitude interception',
      'Automated g-force dampeners and impact absorption gel',
      'J.A.R.V.I.S. multi-target acquisition radar'
    ],
    limitationsAndDamage: [
      'Severe structural crushing sustained during duel with Obadiah Stane’s Iron Monger',
      'Palladium core poisoned Tony Stark’s bloodstream over repeated extended operations'
    ],
    associatedBattles: [
      'Battle of Gulmira (2008)',
      'Dogfight with USAF F-22 Raptors (2008)',
      'Climax Battle against Iron Monger at Stark Industries (2008)'
    ],
    developmentHistory: 'Engineered as the first true combat-ready armored suit, customized with hot-rod candy red and gold paint to match Stark’s 1932 Ford Flathead roadster.',
    image: '/images/iron-man/suit-03.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_III'
  },
  {
    mark: 4,
    romanNumeral: 'Mark IV',
    name: 'Refined Ceremonial & Tactical Armor',
    nickname: 'The Expo Armor',
    firstAppearance: {
      title: 'Iron Man 2',
      year: 2010,
      timelineEvent: 'Stark Expo 2010 Grand Entrance'
    },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: {
      composition: 'Reinforced gold-titanium alloy with articulated modular plating',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 3.2',
      thrusterType: 'Refined vector boot thrusters and micro-stabilizer fins'
    },
    powerSystem: {
      arcReactorCore: 'Palladium Core Mk 3 (High-yield)',
      chargeDuration: 'Rapidly degraded by palladium toxicity'
    },
    weaponsAndPayload: [
      'Repulsor gauntlets with modulated beam widths',
      'High-output chest unibeam',
      'Micro-missile forearm launcher',
      'Flare decoys'
    ],
    specialFeatures: [
      'Streamlined gantry assembly/disassembly integration',
      'Built-in bio-waste disposal system ("Urine filtration system")',
      'Enhanced audio loudspeaker exterior communication'
    ],
    limitationsAndDamage: [
      'Heavily damaged during drunken brawl with James Rhodes in Mark II',
      'Could not avert progressive blood toxicity caused by palladium core'
    ],
    associatedBattles: [
      'Malibu Mansion Confrontation (2010)',
      'Stark Expo Skydiving Entrance (2010)'
    ],
    developmentHistory: 'Designed as a sleek successor to Mark III with improved ergonomics, modular gantry maintenance, and easier cockpit entry.',
    image: '/images/iron-man/suit-04.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_IV'
  },
  {
    mark: 5,
    romanNumeral: 'Mark V',
    name: 'Emergency Deployable Suitcase Armor',
    nickname: 'The Football',
    firstAppearance: {
      title: 'Iron Man 2',
      year: 2010,
      timelineEvent: 'Circuit de Monaco Grand Prix attack by Whiplash'
    },
    category: 'RAPID_DEPLOYMENT',
    status: 'DESTROYED',
    materials: {
      composition: 'Lightweight interlaced titanium-aluminum alloy folding scales',
      canonVerified: true,
      notes: 'Sacrificed armor density for mechanical portability'
    },
    propulsionAndFlight: {
      flightSpeed: 'Sub-sonic low-altitude emergency hover',
      thrusterType: 'Compact miniature sole thrusters (Restricted flight envelope)'
    },
    powerSystem: {
      arcReactorCore: 'Miniature chest-plate interface powered by Tony’s chest Arc Reactor'
    },
    weaponsAndPayload: [
      'Hand repulsor emitters'
    ],
    specialFeatures: [
      'Full transformation from a 32-pound briefcase into full-body suit in under 20 seconds',
      'Hands-free motorized expansion over civilian clothing'
    ],
    limitationsAndDamage: [
      'Minimal ballistic defense; sliced and scorched by Ivan Vanko’s electrified plasma whips',
      'No heavy missiles, lasers, or high-speed atmospheric flight capability'
    ],
    associatedBattles: [
      'Monaco Historic Grand Prix Clash (2010)'
    ],
    developmentHistory: 'Invented by Tony Stark to provide immediate emergency armored protection while traveling without his mechanical gantry.',
    image: '/images/iron-man/suit-05.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_V'
  },
  {
    mark: 6,
    romanNumeral: 'Mark VI',
    name: 'Triangular New-Element Strike Armor',
    nickname: 'The Triangular Avenger',
    firstAppearance: {
      title: 'Iron Man 2',
      year: 2010,
      timelineEvent: 'Battle of the Stark Expo / Hammer Drone Pursuit'
    },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: {
      composition: 'Reinforced gold-titanium alloy with thermal-dissipating ablative enamel',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 4',
      thrusterType: 'High-thrust dual boot turbines and directional vector flaps'
    },
    powerSystem: {
      arcReactorCore: 'Badassium / Synthesized New Element Core (Vibranium Isotope)',
      powerOutput: '10 gigajoules per second (Clean, self-sustaining, non-toxic)'
    },
    weaponsAndPayload: [
      'Twin wrist-mounted 200-petawatt single-use cutting lasers (Cartridge ejected after firing)',
      'High-output triangular chest unibeam',
      'Shoulder-mounted multi-fire micro-dart launchers',
      'Arm-mounted heavy anti-armor missiles',
      'Countermeasure flare pods'
    ],
    specialFeatures: [
      'Fully amphibious underwater operation capabilities',
      'Capable of absorbing lightning and ambient electrical discharges up to 475% capacity'
    ],
    limitationsAndDamage: [
      'Right laser port and thruster flaps mangled while restarting the S.H.I.E.L.D. Helicarrier rotor Engine 3',
      'Significant denting from Thor’s Mjolnir and hand grip'
    ],
    associatedBattles: [
      'Stark Expo Japanese Garden Battle against Hammer Drones & Whiplash Mark II (2010)',
      'Sub-aquatic arc reactor cable installation in East River (2012)',
      'Forest Skirmish with Thor and Captain America (2012)',
      'S.H.I.E.L.D. Helicarrier Engine 3 Emergency Repair (2012)'
    ],
    developmentHistory: 'Constructed around the brand-new non-toxic synthetic element discovered through Howard Stark’s Expo blueprint cache, reversing Tony’s terminal palladium poisoning.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_VI'
  },
  {
    mark: 7,
    romanNumeral: 'Mark VII',
    name: 'Rapid Deployment Pod Armor',
    nickname: 'The Battle of New York Suit',
    firstAppearance: {
      title: 'The Avengers',
      year: 2012,
      timelineEvent: 'Fall from Stark Tower & The Battle of New York'
    },
    category: 'RAPID_DEPLOYMENT',
    status: 'DESTROYED',
    materials: {
      composition: 'Multi-layer gold-titanium combat plating with reinforced shock-absorption foam',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 4.5',
      thrusterType: 'Triple-banked back thruster pod with heavy vectoring nozzles'
    },
    powerSystem: {
      arcReactorCore: 'Synthesized New Element Core Mk 2',
      powerOutput: 'Over 10 gigajoules per second'
    },
    weaponsAndPayload: [
      'Triple-beam high-intensity wrist cutting lasers',
      'Dual shoulder-mounted 92-round micro-missile arrays',
      'Leg and hip-mounted cluster missile launchers',
      'High-velocity unibeam projector',
      'Concussive repulsor gauntlets'
    ],
    specialFeatures: [
      'Mid-air autonomous homing pod deployment triggered by twin magnetic wristbands',
      'Heavy thruster backpack for zero-gravity atmospheric exit',
      'Sealed vacuum cockpit capable of operating briefly in deep cosmic space'
    ],
    limitationsAndDamage: [
      'Suffered complete propulsion burnout and telemetry blackout in deep space wormhole',
      'Heavy structural scoring from Chitauri energy spears and Leviathan collisions'
    ],
    associatedBattles: [
      'Battle of New York (2012)',
      'Detour of the Soviet-era World Security Council nuclear warhead into the Chitauri mothership'
    ],
    developmentHistory: 'Engineered by Tony to allow rapid combat-readiness without a stationary gantry. Deployed when Loki hurled Tony through the window of Stark Tower.',
    image: '/images/iron-man/suit-03.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_VII'
  },
  {
    mark: 8,
    romanNumeral: 'Mark VIII',
    name: 'Advanced Rapid-Deployment Redesign',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol, Norco Oil Tanker' },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: { composition: 'Gold-titanium alloy with redesigned angular plating', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3.5', thrusterType: 'Integrated twin thrusters' },
    powerSystem: { arcReactorCore: 'Vibranium-Isotope New Element Core' },
    weaponsAndPayload: ['Standard repulsors', 'Chest unibeam', 'Miniature munitions'],
    specialFeatures: ['Refined thruster aerodynamics over Mark VII'],
    limitationsAndDamage: ['Self-destructed by Tony Stark in the Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'The initial suit engineered for the Iron Legion protocol during Tony Stark’s sleep-deprived research sprint post-New York.',
    image: '/images/iron-man/suit-04.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_VIII'
  },
  {
    mark: 9,
    romanNumeral: 'Mark IX',
    name: 'Redesigned Thruster Maneuver Prototype',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: { composition: 'Reinforced titanium alloy', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3.8', thrusterType: 'Vectored aerodynamic calf turbines' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Repulsor gauntlets', 'Chest unibeam'],
    specialFeatures: ['Redesigned helmet and faceplate profile'],
    limitationsAndDamage: ['Impaled by an Extremis soldier on the Norco; later destroyed in Clean Slate'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Created to refine high-g aerial combat maneuvers and rapid stabilization.',
    image: '/images/iron-man/suit-05.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_IX'
  },
  {
    mark: 10,
    romanNumeral: 'Mark X',
    name: 'High-Velocity Foot-Thruster Testbed',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'RAPID_DEPLOYMENT',
    status: 'DESTROYED',
    materials: { composition: 'Titanium-ceramic composite', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 4', thrusterType: 'Dual foot turbines with 30% wider nozzle aperture' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Repulsor cannons', 'Unibeam'],
    specialFeatures: ['Reinforced sole plates to handle high thermal thrust bursts'],
    limitationsAndDamage: ['Detonated during Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Tested wider nozzle geometry for instantaneous zero-delay acceleration.',
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_X'
  },
  {
    mark: 11,
    romanNumeral: 'Mark XI',
    name: 'Stealth Base Architecture Prototype',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'STEALTH',
    status: 'DESTROYED',
    materials: { composition: 'Radar-absorbent carbon polymer blend', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3', thrusterType: 'Acoustically baffled exhaust nozzles' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Low-signature repulsors', 'Chest unibeam'],
    specialFeatures: ['Initial testbed for acoustic dampening and radar reduction'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Earliest foundation for the dedicated stealth suite developed after Stark became concerned with global satellite tracking.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XI'
  },
  {
    mark: 12,
    romanNumeral: 'Mark XII',
    name: 'Carbon-Weave High-Durability Testbed',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: { composition: 'Interlaced multi-density carbon fiber and gold-titanium', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3.2', thrusterType: 'Dual vector boot turbines' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Repulsors', 'Unibeam'],
    specialFeatures: ['High tensile strength outer shell resistant to blunt crushing forces'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Explored composite carbon fiber weaving to resist physical impact without adding excessive weight.',
    image: '/images/iron-man/suit-03.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XII'
  },
  {
    mark: 13,
    romanNumeral: 'Mark XIII',
    name: 'Sub-Orbital Speed & Aerodynamic Testbed',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: { composition: 'Ablative thermal heat shield tiles over titanium', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 4.8', thrusterType: 'Twin high-compression booster cones' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Standard repulsors', 'Unibeam'],
    specialFeatures: ['Ablative heat shield coating for extreme atmospheric reentry'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Designed to solve supersonic atmospheric heating during rapid scrambles.',
    image: '/images/iron-man/suit-04.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XIII'
  },
  {
    mark: 14,
    romanNumeral: 'Mark XIV',
    name: 'Lightweight Tactical Armor Prototype',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: { composition: 'Magnesium-titanium lightweight alloy', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3.5', thrusterType: 'Miniaturized boot thrusters' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Repulsor gauntlets', 'Micro-missile rack'],
    specialFeatures: ['Optimized for agility and close-quarters hand-to-hand maneuvers'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Tested lighter servos to increase martial punch speed and evasion agility.',
    image: '/images/iron-man/suit-05.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XIV'
  },
  {
    mark: 15,
    romanNumeral: 'Mark XV',
    name: 'Sneaky',
    nickname: 'Sneaky',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'STEALTH',
    status: 'DESTROYED',
    materials: {
      composition: 'Faceted radar-absorbent matte black coating over titanium honeycomb chassis',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 3',
      thrusterType: 'Cooled shrouded exhaust ports to eliminate thermal infrared signatures'
    },
    powerSystem: { arcReactorCore: 'New Element Core with retro-reflective shielding' },
    weaponsAndPayload: ['Concealed silent repulsor emitters', 'Sonic disruption darts'],
    specialFeatures: [
      'Radar-absorbent geometric angular hull modeled after F-117 Nighthawk',
      'Optical cloaking retrofit capable of bending light in low illumination',
      'Thermal signature suppression'
    ],
    limitationsAndDamage: [
      'Compromised ballistic armor to accommodate stealth stealth facets; destroyed in Clean Slate'
    ],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'The premier full-scale stealth infiltration suit designed by Tony Stark to slip past any sovereign early-warning radar.',
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XV'
  },
  {
    mark: 16,
    romanNumeral: 'Mark XVI',
    name: 'Nightclub',
    nickname: 'Nightclub',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'Tony’s duel with Aldrich Killian' },
    category: 'STEALTH',
    status: 'DESTROYED',
    materials: {
      composition: 'Advanced matte-finish electronic chameleon skin with carbon-composite armor',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 3.2', thrusterType: 'Low-emission vectored turbines' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Precision repulsor gauntlets', 'Unibeam'],
    specialFeatures: [
      'Full electronic color-shifting camouflage',
      'Extremely light agile frame allowing Tony Stark to engage in hand-to-hand martial combat'
    ],
    limitationsAndDamage: [
      'Sliced open and cleaved in half by Aldrich Killian’s superheated Extremis hand'
    ],
    associatedBattles: ['Final Confrontation on the Norco (2012)'],
    developmentHistory: 'Designed as a dedicated covert-ops stealth suit with active optical camouflage. Tony donned it directly to confront Killian.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XVI'
  },
  {
    mark: 17,
    romanNumeral: 'Mark XVII',
    name: 'Heartbreaker',
    nickname: 'Heartbreaker',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'Arrival of the Iron Legion on Norco' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: {
      composition: 'Heavy reinforced gold-titanium alloy with oversized chest housing',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 3.5', thrusterType: 'High-power output thrusters' },
    powerSystem: {
      arcReactorCore: 'Overclocked New Element Artillery Core',
      powerOutput: 'Oversized RT unit producing 4x standard beam output'
    },
    weaponsAndPayload: [
      'Massive oversized RT chest unibeam projector',
      'Adjustable repulsor shields',
      'Dual palm repulsors'
    ],
    specialFeatures: [
      'Chest cannon capable of firing variable-width repulsor blasts from narrow piercing lance to wide artillery cone',
      'Repulsor energy shield generator to protect friendly units'
    ],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012) — Led the Iron Legion attack wave'],
    developmentHistory: 'Created by Tony as an artillery-level combat platform centered around a massive unibeam core.',
    image: '/images/iron-man/suit-03.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XVII'
  },
  {
    mark: 18,
    romanNumeral: 'Mark XVIII',
    name: 'Casanova',
    nickname: 'Casanova',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'STEALTH',
    status: 'DESTROYED',
    materials: { composition: 'Radar-absorbent alloy with reinforced chest core', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3', thrusterType: 'Stealth-baffled thrusters' },
    powerSystem: { arcReactorCore: 'Artillery-level New Element Core' },
    weaponsAndPayload: ['Oversized chest unibeam', 'Silent repulsors'],
    specialFeatures: ['Hybrid platform combining Mark XVII artillery RT with Mark XV stealth coating'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Engineered as a stealth artillery suit capable of launching devastating surprise unibeam strikes from concealment.',
    image: '/images/iron-man/suit-04.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XVIII'
  },
  {
    mark: 19,
    romanNumeral: 'Mark XIX',
    name: 'Tiger',
    nickname: 'Tiger',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: { composition: 'Lightweight titanium with aerodynamic ribbing', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 4.5', thrusterType: 'High-velocity scramjet booster turbines' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Repulsor gauntlets', 'Chest unibeam'],
    specialFeatures: ['High-speed prototype predecessor to Mark XL Shotgun'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Focused exclusively on high-speed atmospheric interception and hyper-sonic stability.',
    image: '/images/iron-man/suit-05.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XIX'
  },
  {
    mark: 20,
    romanNumeral: 'Mark XX',
    name: 'Python',
    nickname: 'Python',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: { composition: 'Titanium-alloy with secondary energy capacitor lining', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3.2', thrusterType: 'High-efficiency sustained travel turbines' },
    powerSystem: {
      arcReactorCore: 'Dual-phase High-Efficiency Core with reserve capacitors',
      chargeDuration: 'Over 24 hours of sustained cross-continental flight'
    },
    weaponsAndPayload: ['Energy-efficient low-drain repulsors', 'Unibeam'],
    specialFeatures: ['Long-distance endurance platform engineered for global transit without refueling'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Built to provide persistent multi-hour overwatch capabilities over major global hot zones.',
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XX'
  },
  {
    mark: 21,
    romanNumeral: 'Mark XXI',
    name: 'Midas',
    nickname: 'Midas',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: {
      composition: 'Pure gold-titanium enriched alloy with polished gold reflective plating',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 4', thrusterType: 'High-altitude sub-zero thrusters' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Repulsor cannons', 'Chest unibeam', 'Hypersonic micro-missiles'],
    specialFeatures: ['Extreme altitude capability (over 65,000 feet) with zero ice accumulation'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Named after King Midas due to its lustrous all-gold appearance, built for ultra-high-altitude supersonic operations.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXI'
  },
  {
    mark: 22,
    romanNumeral: 'Mark XXII',
    name: 'Hot Rod',
    nickname: 'Hot Rod',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: {
      composition: 'Reinforced titanium alloy custom-painted with metallic red and yellow flames on legs',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 3.5', thrusterType: 'War Machine-spec heavy thrusters' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Twin wrist repulsors', 'Chest unibeam', 'Heavy munitions mount hardpoints'],
    specialFeatures: ['Base prototype used to engineer the War Machine Mark II chassis for James Rhodes'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Painted with classic hot-rod flames matching Tony’s favorite garage aesthetic, serving as the design testbed for Rhodes’ upgraded armor.',
    image: '/images/iron-man/suit-03.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXII'
  },
  {
    mark: 23,
    romanNumeral: 'Mark XXIII',
    name: 'Shades',
    nickname: 'Shades',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: {
      composition: 'Multi-layer ceramic heat tiles and insulated multi-ply carbon weave in desert camo',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 3', thrusterType: 'Thermally isolated thrusters' },
    powerSystem: { arcReactorCore: 'New Element Core with internal coolant heat pumps' },
    weaponsAndPayload: ['Thermal-resistant repulsor emitters', 'Chest unibeam'],
    specialFeatures: ['Rated to withstand temperatures up to 2,000°C without cockpit heat transfer'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Built specifically to counteract extreme thermal threats and operate in volcanic or superheated industrial zones.',
    image: '/images/iron-man/suit-04.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXIII'
  },
  {
    mark: 24,
    romanNumeral: 'Mark XXIV',
    name: 'Tank',
    nickname: 'Tank',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'HEAVY_DUTY',
    status: 'DESTROYED',
    materials: { composition: 'Heavy-gauge layered titanium-chobham armor plates', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 2.8', thrusterType: 'High-lift heavy thruster package' },
    powerSystem: { arcReactorCore: 'Overclocked New Element Artillery Core' },
    weaponsAndPayload: ['Heavy artillery chest unibeam', 'Heavy repulsor cannons', 'Explosive munitions'],
    specialFeatures: ['Reinforced chassis capable of shrugging off direct tank rounds and artillery fire'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Built to provide heavy frontline armor protection and sustained bombardment support.',
    image: '/images/iron-man/suit-05.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXIV'
  },
  {
    mark: 25,
    romanNumeral: 'Mark XXV',
    name: 'Striker',
    nickname: 'Thumper',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'Norco Oil Platform Assault' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: {
      composition: 'Industrial-grade reinforced steel-titanium with hazardous environment yellow accents',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 2.5', thrusterType: 'Heavy counterbalanced thrusters' },
    powerSystem: { arcReactorCore: 'Heavy Industrial New Element Core' },
    weaponsAndPayload: [
      'Twin high-frequency pneumatic jackhammers mounted along forearms',
      'High-impact concrete and rock crushing gauntlets',
      'Repulsor emitters'
    ],
    specialFeatures: [
      'Pneumatic jackhammers capable of pulverizing concrete, reinforced steel, and stone',
      'Used during the Norco battle to impale and pulverize Extremis soldiers directly into the ground'
    ],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012) — Pinned Extremis soldiers into steel deck'],
    developmentHistory: 'Designed for heavy construction, disaster recovery, tunneling, and demolition operations.',
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXV'
  },
  {
    mark: 26,
    romanNumeral: 'Mark XXVI',
    name: 'Gamma',
    nickname: 'Gamma',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: { composition: 'Lead-lined titanium with anti-radiation boron shielding', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 2.5', thrusterType: 'Heavy industrial thrusters' },
    powerSystem: { arcReactorCore: 'Radiation-isolated New Element Core' },
    weaponsAndPayload: ['Pneumatic jackhammer arms', 'High-impact crushing fist modules', 'Repulsors'],
    specialFeatures: ['Built to operate safely in nuclear fallout zones, radiation leaks, and contaminated areas'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Radiation-hardened upgrade to Mark XXV Striker, inspired by Bruce Banner’s gamma research.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXVI'
  },
  {
    mark: 27,
    romanNumeral: 'Mark XXVII',
    name: 'Disco',
    nickname: 'Disco',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'STEALTH',
    status: 'DESTROYED',
    materials: {
      composition: 'Micro-faceted electro-chromatic chameleon plates in metallic blue and orange',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 3', thrusterType: 'Silent-flight thrusters' },
    powerSystem: { arcReactorCore: 'New Element Core with active camouflage power routing' },
    weaponsAndPayload: ['Silent repulsors', 'Concealed micro-darts'],
    specialFeatures: [
      'Active chameleon optical camouflage capable of projecting background light across the armor shell',
      'Named Disco due to the dynamic prismatic reflections across its chromatic panels'
    ],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Experimental adaptive camouflage platform testing dynamic color-matching against complex visual backgrounds.',
    image: '/images/iron-man/suit-03.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXVII'
  },
  {
    mark: 28,
    romanNumeral: 'Mark XXVIII',
    name: 'Jack',
    nickname: 'Jack',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: { composition: 'Hermetically-sealed lead and boron composite plates', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3', thrusterType: 'Sealed turbine exhaust' },
    powerSystem: { arcReactorCore: 'Sealed New Element Core' },
    weaponsAndPayload: ['Standard repulsors', 'Unibeam'],
    specialFeatures: ['Complete chemical, biological, radiological, and nuclear (CBRN) isolation cockpit'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Created to survive airborne bio-weapons, nerve agents, and extreme hazardous spills.',
    image: '/images/iron-man/suit-04.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXVIII'
  },
  {
    mark: 29,
    romanNumeral: 'Mark XXIX',
    name: 'Fiddler',
    nickname: 'Fiddler',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: { composition: 'Lightweight titanium with high-torque mechanical left arm', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3', thrusterType: 'Vectored boot turbines' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Pneumatic jackhammer left arm', 'Right repulsor gauntlet'],
    specialFeatures: ['Asymmetric construction armor testing single-limb high-power excavation'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Agile sister unit to Mark XXV Striker featuring an asymmetric single jackhammer assembly.',
    image: '/images/iron-man/suit-05.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXIX'
  },
  {
    mark: 30,
    romanNumeral: 'Mark XXX',
    name: 'Blue Steel',
    nickname: 'Blue Steel',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: { composition: 'Deep navy-blue and silver titanium alloy', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3.5', thrusterType: 'High-yield twin turbines' },
    powerSystem: { arcReactorCore: 'Energy-focused New Element Core' },
    weaponsAndPayload: ['Wrist-mounted high-frequency vibro-blades', 'Energy repulsors', 'Unibeam'],
    specialFeatures: ['Concealed wrist blades for close-quarters slicing combat'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Prototype stage leading directly to the Mark XXXIII Silver Centurion energy-blade armor.',
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXX'
  },
  {
    mark: 31,
    romanNumeral: 'Mark XXXI',
    name: 'Piston',
    nickname: 'Piston',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'RAPID_DEPLOYMENT',
    status: 'DESTROYED',
    materials: { composition: 'Lightweight titanium with teal and silver aerodynamic accents', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 4.2', thrusterType: 'High-impulse vectored booster ring' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Rapid-pulse repulsors', 'Unibeam'],
    specialFeatures: ['High-velocity burst acceleration for intercepting incoming airborne projectiles'],
    limitationsAndDamage: ['Mangled by Extremis warriors on the Norco; destroyed in Clean Slate'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Engineered for split-second velocity bursts and rapid dogfight repositioning.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXXI'
  },
  {
    mark: 32,
    romanNumeral: 'Mark XXXII',
    name: 'Romeo',
    nickname: 'Romeo',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: { composition: 'Reinforced gold-titanium alloy', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3.4', thrusterType: 'Standard dual vector turbines' },
    powerSystem: { arcReactorCore: 'Enhanced chest RT unibeam projector' },
    weaponsAndPayload: ['Expanded chest unibeam', 'Repulsors'],
    specialFeatures: ['Mid-tier artillery suit bridging standard combat suits with Mark XVII Heartbreaker'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Streamlined alternative to Heartbreaker with lower power drain and greater agility.',
    image: '/images/iron-man/suit-03.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXXII'
  },
  {
    mark: 33,
    romanNumeral: 'Mark XXXIII',
    name: 'Silver Centurion',
    nickname: 'Silver Centurion',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'Tony’s duel with Aldrich Killian on the crane' },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: {
      composition: 'Crimson and polished silver gold-titanium alloy with angular chest plating',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 3.6', thrusterType: 'Twin high-output turbines' },
    powerSystem: {
      arcReactorCore: 'Enhanced New Element Core with magnetic field routing'
    },
    weaponsAndPayload: [
      'Twin retractable vibranium-coated forearm vibro-blades',
      'Enhanced unibeam with adjustable pulse frequencies',
      'Concussive repulsor gauntlets'
    ],
    specialFeatures: [
      'Concealed blade severed Aldrich Killian’s Extremis-infused left arm during close-quarters combat on the crane',
      'Protective magnetic field generation around the suit chassis'
    ],
    limitationsAndDamage: [
      'Killian ripped out the chest Arc Reactor core with his bare superheated hand; destroyed in Clean Slate'
    ],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012) — Donned by Tony Stark to duel Killian'],
    developmentHistory: 'Homage to the classic 1980s comic Silver Centurion armor, engineered for enhanced energy redirection and bladed combat.',
    image: '/images/iron-man/suit-04.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXXIII'
  },
  {
    mark: 34,
    romanNumeral: 'Mark XXXIV',
    name: 'Southpaw',
    nickname: 'Southpaw',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: { composition: 'Heavy disaster-rescue composite plating', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 2.8', thrusterType: 'Counter-balanced heavy thrusters' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Pneumatic rescue claw arm on left side', 'Right repulsor gauntlet'],
    specialFeatures: ['Disaster rescue prototype equipped with an oversized pneumatic pincer claw'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Prototype developed for earthquake rescue and clearing heavy structural debris.',
    image: '/images/iron-man/suit-05.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXXIV'
  },
  {
    mark: 35,
    romanNumeral: 'Mark XXXV',
    name: 'Red Snapper',
    nickname: 'Red Snapper',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'Arrival of the Iron Legion on Norco' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: {
      composition: 'High-visibility red and gold reinforced titanium rescue alloy',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 2.5', thrusterType: 'Heavy high-lift boot thrusters' },
    powerSystem: { arcReactorCore: 'Industrial-grade New Element Core' },
    weaponsAndPayload: [
      'Twin telescoping pneumatic hydraulic claw arms',
      'High-pressure fire suppression nozzles',
      'Repulsor emitters'
    ],
    specialFeatures: [
      'Dual heavy telescoping pincer arms designed for hazardous disaster rescue, structural stabilization, and debris extraction'
    ],
    limitationsAndDamage: [
      'Swarmed and dismantled by Extremis soldiers on the Norco catwalk; debris destroyed in Clean Slate'
    ],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012) — Deployed to extract personnel from collapsing steel rig'],
    developmentHistory: 'Designed as a dedicated disaster response suit capable of operating in active building collapses and chemical plant fires.',
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXXV'
  },
  {
    mark: 36,
    romanNumeral: 'Mark XXXVI',
    name: 'Peacekeeper',
    nickname: 'Peacekeeper',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPECIALIZED',
    status: 'DESTROYED',
    materials: { composition: 'Reinforced ceramic riot plating in charcoal and silver', canonVerified: true },
    propulsionAndFlight: { flightSpeed: 'Mach 3', thrusterType: 'Vectored twin turbines' },
    powerSystem: { arcReactorCore: 'New Element Core' },
    weaponsAndPayload: ['Non-lethal sonic repulsor pulse cannons', 'Flashbang strobe emitters', 'Repulsors'],
    specialFeatures: ['Designed for riot suppression and civil containment with acoustic sound weapons'],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Built to subdue hostile crowds without lethal ballistic munitions.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'CANONICAL_REFERENCE',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXXVI'
  },
  {
    mark: 37,
    romanNumeral: 'Mark XXXVII',
    name: 'Hammerhead',
    nickname: 'Hammerhead',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SUBMERGENCE',
    status: 'DESTROYED',
    materials: {
      composition: 'High-tensile submarine-grade titanium alloy hull sealed against extreme ocean trench pressures',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 2.5 (Air) / 60 knots (Submerged)',
      thrusterType: 'Dual water-jet magnetohydrodynamic propulsion drives'
    },
    powerSystem: { arcReactorCore: 'Sealed High-Output New Element Core' },
    weaponsAndPayload: [
      'High-pressure underwater acoustic torpedoes',
      'Super-cavitating repulsor pulses',
      'Chest unibeam searchlight'
    ],
    specialFeatures: [
      'Rated for ocean depths exceeding 30,000 feet (Mariana Trench depth)',
      'High-intensity deep-ocean halogen spotlights integrated into helmet and chest'
    ],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Engineered by Tony Stark for deep-sea exploration, underwater search and rescue, and submarine hull repairs.',
    image: '/images/iron-man/suit-03.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXXVII'
  },
  {
    mark: 38,
    romanNumeral: 'Mark XXXVIII',
    name: 'Igor',
    nickname: 'Igor',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol oil platform stabilization' },
    category: 'HEAVY_DUTY',
    status: 'DESTROYED',
    materials: {
      composition: 'Ultra-dense reinforced industrial steel-titanium with hunchbacked dorsal exoskeleton frame',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 1.8 (Sub-sonic heavy flight)',
      thrusterType: 'Quadruple heavy-lift booster array with hydraulic ground anchoring outriggers'
    },
    powerSystem: {
      arcReactorCore: 'Industrial Quad-Core New Element Generator'
    },
    weaponsAndPayload: [
      'Repulsor emitters',
      'Massive structural lifting clamps'
    ],
    specialFeatures: [
      'Capacitated to lift and support thousands of tons of falling structural steel',
      'Single-handedly stabilized the collapsing crane and oil platform superstructure during the Norco climax',
      'Pneumatic spine lock that converts the entire suit into a load-bearing column'
    ],
    limitationsAndDamage: [
      'Slow maneuvering speed and low aerial agility; destroyed in Clean Slate Protocol'
    ],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012) — Held up the collapsing refinery rig crane'],
    developmentHistory: 'Built as a pure structural engineering and disaster support exoskeleton, named Igor because of its distinct hunchback posture.',
    image: '/images/iron-man/suit-04.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXXVIII'
  },
  {
    mark: 39,
    romanNumeral: 'Mark XXXIX',
    name: 'Starboost',
    nickname: 'Gemini',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol' },
    category: 'SPACE',
    status: 'DESTROYED',
    materials: {
      composition: 'White and silver thermal-ceramic heat-reflective plates with gold faceplate visor',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 5+ (Orbital escape velocity capability)',
      thrusterType: 'Integrated high-thrust concourse rocket booster pack with compressed gas cold-thrusters'
    },
    powerSystem: {
      arcReactorCore: 'Hermetically-sealed Cosmic Radiation-Shielded Core'
    },
    weaponsAndPayload: [
      'High-velocity repulsor gauntlets',
      'Orbital unibeam projector'
    ],
    specialFeatures: [
      'Sealed cockpit with 48-hour oxygen recycling tank for extravehicular orbital space activity',
      'Zero-gravity maneuvering cold-gas RCS thrusters along shoulders, elbows, and calves',
      'Cosmic radiation shielding layer'
    ],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012)'],
    developmentHistory: 'Born directly from Tony’s traumatic near-death experience in the wormhole above New York, engineered to master deep space operations.',
    image: '/images/iron-man/suit-05.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XXXIX'
  },
  {
    mark: 40,
    romanNumeral: 'Mark XL',
    name: 'Shotgun',
    nickname: 'Shotgun',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'Duel with Aldrich Killian' },
    category: 'RAPID_DEPLOYMENT',
    status: 'DESTROYED',
    materials: {
      composition: 'Polished charcoal-grey and silver lightweight aerodynamic alloy with locking helmet visor',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 5+ (Fastest sub-nanotech atmospheric flight suit)',
      thrusterType: 'Dual variable-geometry scramjet turbines with rear aerodynamic stabilizer dorsal spine'
    },
    powerSystem: { arcReactorCore: 'High-Frequency Impulse New Element Core' },
    weaponsAndPayload: [
      'Rapid-fire high-velocity repulsor pulses',
      'Chest unibeam',
      'Micro-missile launch tubes'
    ],
    specialFeatures: [
      'Interlocking aerodynamic plates that transform the suit into a unified aerodynamic dart during high-speed flight',
      'Donned by Tony Stark to engage Aldrich Killian at hypersonic combat speeds'
    ],
    limitationsAndDamage: [
      'Bisected down the torso by Aldrich Killian’s Extremis-heated karate chop'
    ],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012) — Fought Killian in mid-air and on ground'],
    developmentHistory: 'Designed specifically to break all atmospheric velocity barriers and intercept hypersonic airborne targets.',
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XL'
  },
  {
    mark: 41,
    romanNumeral: 'Mark XLI',
    name: 'Bones',
    nickname: 'Bones',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'House Party Protocol assault' },
    category: 'MODULAR',
    status: 'DESTROYED',
    materials: {
      composition: 'Black and gold exposed skeletonized titanium truss framework without external aerodynamic skin',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 3.5',
      thrusterType: 'Independent micro-thrusters mounted on every limb segment'
    },
    powerSystem: { arcReactorCore: 'Distributed New Element micro-relays across all limbs' },
    weaponsAndPayload: [
      'Multi-vector repulsor gauntlets',
      'Modular kinetic strike impacts'
    ],
    specialFeatures: [
      'Autonomous modular separation: helmet, torso, arms, and legs can instantly disconnect and fly as independent guided weapons',
      'Can strike multiple enemies simultaneously across a 50-meter radius before reforming back onto the main chassis'
    ],
    limitationsAndDamage: ['Destroyed in Clean Slate Protocol'],
    associatedBattles: ['Battle on the Norco Oil Tanker (2012) — Separated in flight to wipe out an entire platoon of Extremis soldiers'],
    developmentHistory: 'Tested modular disconnection physics and individual limb telemetry that paved the way for Mark XLII.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XLI'
  },
  {
    mark: 42,
    romanNumeral: 'Mark XLII',
    name: 'Autonomous Prehensile Propulsion Armor',
    nickname: 'The Prodigal Son',
    firstAppearance: { title: 'Iron Man 3', year: 2013, timelineEvent: 'Subcutaneous sensor calibration in Malibu workshop' },
    category: 'AUTONOMOUS',
    status: 'DESTROYED',
    materials: {
      composition: 'Inverted champagne-gold and crimson gold-titanium articulated segmented plates',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 3.5',
      thrusterType: 'Individual micro-vector thrusters embedded on each of the 72 modular plates'
    },
    powerSystem: { arcReactorCore: 'New Element Core Mk 4' },
    weaponsAndPayload: [
      'Concussive repulsor gauntlets',
      'Chest unibeam',
      'Micro-missile forearm launcher'
    ],
    specialFeatures: [
      'Autonomous prehensile flight summoned via subcutaneous microchips implanted in Tony Stark’s forearms',
      'Can fly across thousands of miles to wrap around Tony or wrap around a target to trap them',
      'Remote piloting via neural holographic headset ("telepresence")',
      'Rescued 13 passengers falling from Air Force One ("Barrel of Monkeys" rescue)'
    ],
    limitationsAndDamage: [
      'Prototype stage suffered frequent telemetry misalignments and assembly collisions',
      'Trapped Aldrich Killian inside and self-destructed via remote command to incinerate him'
    ],
    associatedBattles: [
      'Destruction of Tony Stark’s Malibu Mansion (2012)',
      'Air Force One In-Flight Rescue (2012)',
      'Final Battle on the Norco against Killian (2012)'
    ],
    developmentHistory: 'The flagship suit of Iron Man 3, developed by Tony Stark to ensure he could summon armor instantly anywhere on Earth without delay.',
    image: '/images/iron-man/suit-03.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XLII'
  },
  {
    mark: 43,
    romanNumeral: 'Mark XLIII',
    name: 'Autonomous Strike Armor',
    nickname: 'The Sokovia Frontline Armor',
    firstAppearance: { title: 'Avengers: Age of Ultron', year: 2015, timelineEvent: 'Assault on Baron Strucker’s Hydra fortress in Sokovia' },
    category: 'COMBAT',
    status: 'ACTIVE',
    materials: {
      composition: 'Heavy gold-titanium alloy returning to classic crimson-dominant color scheme with gold accents',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 4', thrusterType: 'Vectored heavy boot turbines' },
    powerSystem: { arcReactorCore: 'New Element Core Mk 5' },
    weaponsAndPayload: [
      'High-yield repulsor gauntlets',
      'Chest unibeam',
      'Forearm anti-tank missile',
      'Multi-target shoulder micro-dart array',
      'Infrared thermal scanning array'
    ],
    specialFeatures: [
      'Fully autonomous Sentry Mode ("Guard Mode")',
      'Seamless prehensile assembly over civilian clothing without prototype glitches',
      'Serves as the internal core pilot suit that docks directly inside the Mark XLIV Hulkbuster frame'
    ],
    limitationsAndDamage: [
      'Sustained armor scoring from Hydra energy cannons and vibranium sentry attacks in Sokovia'
    ],
    associatedBattles: [
      'Raid on the Hydra Research Base in Sokovia (2015)',
      'Salvage Yard Confrontation with Ulysses Klaue and the Maximoffs (2015)',
      'Deployment of Veronica / Hulkbuster over Johannesburg (2015)'
    ],
    developmentHistory: 'The perfected, military-grade evolution of the prehensile Mark XLII, eliminating all experimental assembly delays and integrating directly with orbital asset Veronica.',
    image: '/images/iron-man/suit-04.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XLIII'
  },
  {
    mark: 44,
    romanNumeral: 'Mark XLIV',
    name: 'Hulkbuster',
    nickname: 'Veronica',
    firstAppearance: { title: 'Avengers: Age of Ultron', year: 2015, timelineEvent: 'Containing the Hulk in Johannesburg, South Africa' },
    category: 'HEAVY_DUTY',
    status: 'ACTIVE',
    materials: {
      composition: 'Multi-layered impact-dispersing composite plates over a reinforced titanium-chobham exoskeleton skeleton',
      canonVerified: true
    },
    propulsionAndFlight: {
      flightSpeed: 'Mach 2.2 (Heavy sub-orbital transit)',
      thrusterType: 'Octa-vector rocket booster pack with twin auxiliary back turbines and sole thrusters'
    },
    powerSystem: {
      arcReactorCore: 'Multi-Core Power Matrix featuring 11 independent Arc Reactors distributed across the chassis',
      powerOutput: 'Over 50 gigajoules per second at peak containment output'
    },
    weaponsAndPayload: [
      'High-impact hydraulic jackhammer punch gauntlet (Rapid-fire piston strikes)',
      'High-voltage electric shock taser field gauntlets',
      'Chemical sedative aerosol dispenser',
      'Titanium industrial magnetic cage trap outriggers',
      'Dual chest-mounted high-output artillery unibeam emitters'
    ],
    specialFeatures: [
      'Docking envelope: Worn over the Mark XLIII suit, acting as a modular exoskeleton armor shell',
      'Orbital replenishment pod: Supported by satellite Veronica, which deploys replacement limbs and parts from orbit in real-time during battle',
      'Piston arm capable of delivering sustained multi-ton concussive impacts to knock out an enraged Hulk'
    ],
    limitationsAndDamage: [
      'Left forearm severed and destroyed by Hulk; orbital replacement arm summoned from Veronica',
      'Immense structural strain causing street and building collapse during urban containment'
    ],
    associatedBattles: [
      'Rampage in Johannesburg against Scarlet Witch-manipulated Hulk (2015)'
    ],
    developmentHistory: 'Co-engineered in secret by Tony Stark and Dr. Bruce Banner as an emergency safeguard in the event that Banner’s Hulk persona ever broke containment in a populated city.',
    image: '/images/iron-man/suit-05.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XLIV'
  },
  {
    mark: 45,
    romanNumeral: 'Mark XLV',
    name: 'Hexagonal Unibeam Strike Armor',
    nickname: 'The FRIDAY Flagship',
    firstAppearance: { title: 'Avengers: Age of Ultron', year: 2015, timelineEvent: 'Final Battle of Sokovia / Church Defense' },
    category: 'COMBAT',
    status: 'ACTIVE',
    materials: {
      composition: 'Polished chrome-accented gold-titanium alloy with organic flowing aerodynamic curves',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 4.5', thrusterType: 'Quad-vector heavy boot thrusters' },
    powerSystem: {
      arcReactorCore: 'Hexagonal New Element Core with direct F.R.I.D.A.Y. operating system integration'
    },
    weaponsAndPayload: [
      'Hexagonal high-yield chest unibeam projector',
      'Dual high-energy repulsor cannons',
      'Forearm energy blades and micro-missiles',
      'Thor lightning redirection focus'
    ],
    specialFeatures: [
      'First Iron Man suit to run F.R.I.D.A.Y. artificial intelligence following the destruction of J.A.R.V.I.S.',
      'Organic flowing contours that disperse concussive energy away from cockpit',
      'Co-channeled Thor’s Mjolnir lightning and Vision’s Mind Stone beam to melt Ultron Prime’s vibranium body'
    ],
    limitationsAndDamage: [
      'Exhausted power reserves while diving beneath the falling Sokovia landmass to overload the vibranium core'
    ],
    associatedBattles: [
      'Battle of Sokovia / Church stand against Ultron’s sentry swarm (2015)',
      'Vaporization of the Sokovian meteor core alongside Thor'
    ],
    developmentHistory: 'Constructed by Tony in the Avengers Tower lab following the creation of Vision, representing a complete design departure with organic curvature and a hexagonal power core.',
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XLV'
  },
  {
    mark: 46,
    romanNumeral: 'Mark XLVI',
    name: 'Collapsible Helmet Civil War Armor',
    nickname: 'The Civil War Armor',
    firstAppearance: { title: 'Captain America: Civil War', year: 2016, timelineEvent: 'Leipzig-Halle Airport Clash & Siberian Hydra Bunker' },
    category: 'COMBAT',
    status: 'DESTROYED',
    materials: {
      composition: 'Articulated multi-plate gold-titanium with 28 miniature Arc Reactor nodes embedded in the armor shell',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 4.2', thrusterType: 'Vectored turbines with micro-thruster stabilization' },
    powerSystem: {
      arcReactorCore: 'Central New Element Core linked to 28 peripheral RT power distribution ports'
    },
    weaponsAndPayload: [
      'High-velocity repulsor gauntlets with sonic frequency emitters',
      'Chest unibeam with adjustable pulse frequencies',
      'Wrist-mounted non-lethal acoustic cannons',
      'Miniature anti-armor shoulder missiles',
      'F.R.I.D.A.Y. tactical combat analysis algorithm (Predictive hand-to-hand fight counter)'
    ],
    specialFeatures: [
      'Fully motorized retractable helmet that recedes entirely into the neck collar with a single touch',
      'Sub-dermal helicopter and watch-activated gauntlet deployment',
      'F.R.I.D.A.Y. predictive fight algorithm that mapped Steve Rogers’ physical combat patterns in real time'
    ],
    limitationsAndDamage: [
      'Left boot thruster damaged by Hawkeye and Ant-Man; sensory array jammed by Bucky Barnes',
      'Chest Arc Reactor shattered by Steve Rogers driving the vibranium shield into the core in Siberia'
    ],
    associatedBattles: [
      'Avengers Civil War Clash at Leipzig-Halle Airport, Germany (2016)',
      'The Raft Prison Visit (2016)',
      'Siberian Hydra Bunker Duel against Captain America and Bucky Barnes (2016)'
    ],
    developmentHistory: 'Designed to enforce the Sokovia Accords with enhanced non-lethal crowd control, tactical predictive AI, and seamless motorized ingress/egress.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XLVI'
  },
  {
    mark: 47,
    romanNumeral: 'Mark XLVII',
    name: 'Wi-Fi Telepresence Infiltration Armor',
    nickname: 'The Ultimate Tribute',
    firstAppearance: { title: 'Spider-Man: Homecoming', year: 2017, timelineEvent: 'Rescue of Peter Parker from Lake / Staten Island Ferry' },
    category: 'AUTONOMOUS',
    status: 'ACTIVE',
    materials: {
      composition: 'Gold-titanium alloy with polished silver midsection and limbs inspired by Marvel Comics Ultimate Iron Man',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 4.2', thrusterType: 'Vectored twin turbines' },
    powerSystem: { arcReactorCore: 'High-bandwidth New Element Core' },
    weaponsAndPayload: [
      'Twin repulsor gauntlets',
      'Chest unibeam',
      'Deployable high-pressure water pumps',
      'Miniature micro-thruster stabilization pods'
    ],
    specialFeatures: [
      'Full satellite Wi-Fi telepresence: Tony piloted the armor from his resort in India while simultaneously saving Peter in Queens',
      'Deployable stabilization clamp thrusters used to stitch the split Staten Island Ferry together'
    ],
    limitationsAndDamage: ['Dependent on orbital satellite data-links for long-distance remote telepresence'],
    associatedBattles: [
      'Rescue of Spider-Man from the Queens river (2016)',
      'Stabilization of the bisected Staten Island Ferry (2016)'
    ],
    developmentHistory: 'Built to provide remote global presence without requiring Tony Stark to physically leave his philanthropic travels.',
    image: '/images/iron-man/suit-03.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XLVII'
  },
  {
    mark: 48,
    romanNumeral: 'Mark XLVIII',
    name: 'Hulkbuster Mark II',
    nickname: 'Hulkbuster 2.0',
    firstAppearance: { title: 'Avengers: Infinity War', year: 2018, timelineEvent: 'Battle of Wakanda / Outrider invasion' },
    category: 'HEAVY_DUTY',
    status: 'ACTIVE',
    materials: {
      composition: 'Refined impact-absorbing gold-titanium composite chassis with streamlined helmet and limb contours',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 2.5', thrusterType: 'Heavy orbital booster pack' },
    powerSystem: { arcReactorCore: 'Multi-Reactor Core Network' },
    weaponsAndPayload: [
      'High-impact hydraulic repulsor punches',
      'Chest unibeam artillery cannons',
      'Miniature arm-mounted rocket pods'
    ],
    specialFeatures: [
      'Piloted by Bruce Banner during the Battle of Wakanda when the Hulk refused to manifest',
      'Severed arm launched with repulsor thruster attached to Cull Obsidian, dragging him into the Wakandan energy barrier to disintegrate him'
    ],
    limitationsAndDamage: [
      'Trapped in stone and phased into rock by Thanos using the Space Stone'
    ],
    associatedBattles: [
      'Battle of Wakanda against Cull Obsidian and Outrider army (2018)'
    ],
    developmentHistory: 'Next-generation heavy containment armor constructed by Tony Stark and stationed at the Avengers Compound in upstate New York.',
    image: '/images/iron-man/suit-04.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XLVIII'
  },
  {
    mark: 49,
    romanNumeral: 'Mark XLIX',
    name: 'Rescue Armor',
    nickname: 'Rescue',
    firstAppearance: { title: 'Avengers: Endgame', year: 2019, timelineEvent: 'Final Battle of Earth at destroyed Avengers Compound' },
    category: 'SPECIALIZED',
    status: 'ACTIVE',
    materials: {
      composition: 'Aerodynamic seafoam-blue and champagne-gold titanium alloy customized for Pepper Potts',
      canonVerified: true
    },
    propulsionAndFlight: { flightSpeed: 'Mach 4.5', thrusterType: 'Hexa-fin back-mounted propulsion pods' },
    powerSystem: { arcReactorCore: 'Compact High-Efficiency New Element Core' },
    weaponsAndPayload: [
      'High-density repulsor gauntlets',
      'Dorsal deployable energy blaster wings (Hexa-pod cannons)',
      'Unibeam focal cannon',
      'Coordinated beam attacks with Iron Man Mark LXXXV'
    ],
    specialFeatures: [
      'Built in secret by Tony Stark as an anniversary gift for Pepper Potts to protect their family',
      'Autonomous deployable back fins that detach into independent hovering laser turrets'
    ],
    limitationsAndDamage: ['Zero reported structural failures during the Battle of Earth'],
    associatedBattles: [
      'Final Battle of Earth against Thanos and his armada (2023)'
    ],
    developmentHistory: 'Commissioned by Tony Stark during his quiet retirement at the lake house with Morgan and Pepper.',
    image: '/images/iron-man/suit-05.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_XLIX'
  },
  {
    mark: 50,
    romanNumeral: 'Mark L',
    name: 'Nanotech Liquid-Metal Armor',
    nickname: 'The Infinity War Nanotech Suit',
    firstAppearance: { title: 'Avengers: Infinity War', year: 2018, timelineEvent: 'Bleeker Street invasion & Battle of Titan' },
    category: 'NANOTECHNOLOGY',
    status: 'DESTROYED',
    materials: {
      composition: 'billions of programmable magnetic molecular nanites stored in a detachable chest housing',
      canonVerified: true,
      notes: 'Able to reshape and restructure into any weapon, shield, or tool in milliseconds'
    },
    propulsionAndFlight: {
      flightSpeed: 'Hypersonic (Over Mach 8) with single unified rear rocket thruster cone',
      thrusterType: 'Morphing nanite scramjet booster cone with auxiliary foot stabilizers'
    },
    powerSystem: {
      arcReactorCore: 'Nanotech Prime Arc Reactor with internal nanite fabrication reservoir',
      powerOutput: 'Over 100 gigajoules per second at peak combat drain'
    },
    weaponsAndPayload: [
      'Morphing repulsor cannons with variable aperture',
      'Dual nanotech energy beam battering rams',
      'Nano-blades, daggers, and energy shields',
      'Hypersonic foot clamps and zero-g anchors',
      'Medical coagulant nanite spray (Instantly sealed Tony’s fatal stab wound)',
      'Micro-missile launch clusters'
    ],
    specialFeatures: [
      'Stored entirely within an ultra-compact detachable chest arc reactor unit worn over civilian tracksuit',
      'Can siphon nanites from non-critical areas to reinforce weapons or repair damaged sections in mid-combat',
      'Made Thanos bleed on Titan, drawing the first drop of blood from the Mad Titan'
    ],
    limitationsAndDamage: [
      'Finite nanite volume: As Thanos pulverized weapons and shields, Tony depleted his reserves and had to expose limbs to forge a dagger',
      'Stabbed through the abdomen by Thanos using Tony’s own severed nano-blade'
    ],
    associatedBattles: [
      'Battle of Greenwich Village / Bleeker Street (2018)',
      'Rescue of Doctor Strange from the Q-Ship in deep space (2018)',
      'Battle of Titan against Thanos (2018)'
    ],
    developmentHistory: 'The quantum leap in Stark armory: Tony completely discarded rigid mechanical plates in favor of fluid programmable molecular nanotechnology.',
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_L'
  },
  // Marks 51 through 84: Canonical Stark Workshop Research & Development series between Infinity War and Endgame
  ...generateIntermediateNanotechArmors(),
  {
    mark: 85,
    romanNumeral: 'Mark LXXXV',
    name: 'Nanotech Prime Armor',
    nickname: 'The Endgame Masterpiece',
    firstAppearance: { title: 'Avengers: Endgame', year: 2019, timelineEvent: 'Time Heist & Final Battle of Earth' },
    category: 'NANOTECHNOLOGY',
    status: 'FALLEN',
    materials: {
      composition: 'High-density gold-titanium reinforced programmable nanites featuring classic comic gold-sleeved aesthetics',
      canonVerified: true,
      notes: 'Integrated with quantum temporal navigation conduits and cosmic energy redirection channels'
    },
    propulsionAndFlight: {
      flightSpeed: 'Hypersonic (Mach 10+)',
      thrusterType: 'Morphing variable-geometry nanite hyper-thrusters and foot stabilizer pads'
    },
    powerSystem: {
      arcReactorCore: 'Mark LXXXV Nanotech Prime Core',
      powerOutput: 'Cosmic scale — capable of channeling the raw energy of all six Infinity Stones'
    },
    weaponsAndPayload: [
      'Dorsal Nano Lightning Refocuser (Eight-finned array that redirects Thor’s lightning into high-yield energy blasts)',
      'Heavy nanotech shields capable of deflecting Thanos’s double-edged sword blows',
      'Morphing dual energy blades and arm cannons',
      'Integrated Nano Gauntlet micro-channels (Allowed silent transfer of the Infinity Stones from Thanos’s glove)'
    ],
    specialFeatures: [
      'Quantum Temporal GPS navigation interface integrated directly into the forearm HUD',
      'Seamless molecular channel rerouting that stripped the Infinity Stones from Thanos without him noticing',
      'Protected Tony’s body long enough to deliver the final universe-saving Snap: "And I... am... Iron Man."'
    ],
    limitationsAndDamage: [
      'The cosmic gamma and multiversal energy release of the Infinity Stones proved fatal to the mortal biology of Tony Stark'
    ],
    associatedBattles: [
      'The Time Heist / Battle of New York 2012 timeline detour (2023)',
      'Trinity Duel against 2014 Thanos alongside Captain America and Thor (2023)',
      'Final Battle of Earth and the Snap that eliminated Thanos and his army (2023)'
    ],
    developmentHistory: 'The culmination of Tony Stark’s entire life’s work. Perfected over five years of quiet study at the lake house, combining the ultimate nanotech durability, temporal time-travel stabilization, and the heroic sacrifice that saved the universe.',
    image: '/images/iron-man/suit-02.webp',
    verificationStatus: 'VERIFIED_ON_SCREEN',
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_LXXXV'
  }
];

function generateIntermediateNanotechArmors(): IronManArmor[] {
  const intermediateConfigs: Array<{
    mark: number;
    roman: string;
    name: string;
    category: IronManArmor['category'];
    specialFocus: string;
    limitation: string;
  }> = [
    { mark: 51, roman: 'Mark LI', name: 'Nanite Density Stabilization Rig', category: 'NANOTECHNOLOGY', specialFocus: 'High-density molecular compaction for reduced surface erosion', limitation: 'Thermal dissipation bottlenecks during continuous energy beam firing' },
    { mark: 52, roman: 'Mark LII', name: 'Deep Space Scramjet Prototype', category: 'SPACE', specialFocus: 'Atmospheric escape velocity optimization without external thruster pod', limitation: 'High oxygen scrub reservoir consumption' },
    { mark: 53, roman: 'Mark LIII', name: 'Autonomous Sentinel Node', category: 'AUTONOMOUS', specialFocus: 'Remote telepresence through F.R.I.D.A.Y. quantum relay', limitation: 'Slight latency beyond 500,000 km distance' },
    { mark: 54, roman: 'Mark LIV', name: 'Hyper-Velocity Interceptor Testbed', category: 'RAPID_DEPLOYMENT', specialFocus: 'Vectored aerodynamic stabilizers for Mach 7 atmospheric maneuvers', limitation: 'High g-force stress requiring enhanced internal dampening' },
    { mark: 55, roman: 'Mark LV', name: 'Heavy Demolition Nanite Frame', category: 'HEAVY_DUTY', specialFocus: 'High-mass molecular clustering for concentrated kinetic blows', limitation: 'Decreased flight speed due to high nanite density' },
    { mark: 56, roman: 'Mark LVI', name: 'Acoustic Suppression Covert Suit', category: 'STEALTH', specialFocus: 'Vibration-neutralizing nanite matrices for silent sub-sonic flight', limitation: 'Weapon payload reduced by 40% to preserve acoustic baffle' },
    { mark: 57, roman: 'Mark LVII', name: 'Sub-Zero Thermal Insulator', category: 'SPECIALIZED', specialFocus: 'Endothermic cooling channels designed for deep space and cryogenic threats', limitation: 'Fragile outer shell under sustained high temperatures' },
    { mark: 58, roman: 'Mark LVIII', name: 'Kinetic Energy Dispersion Mesh', category: 'COMBAT', specialFocus: 'Interlaced energy conduits that absorb blunt force impacts and store them in capacitors', limitation: 'Overcharging risk if overloaded beyond 200% capacity' },
    { mark: 59, roman: 'Mark LIX', name: 'Deep Ocean Trench Nano-Hull', category: 'SUBMERGENCE', specialFocus: 'Hydrostatic pressure counter-balancing for extreme depths', limitation: 'Low flight velocity when exiting water' },
    { mark: 60, roman: 'Mark LX', name: 'Multiplex Energy Shield Rig', category: 'SPECIALIZED', specialFocus: 'Deployable broad-spectrum forcefields powered directly by the arc reactor', limitation: 'Rapid battery drain during sustained bombardment' },
    { mark: 61, roman: 'Mark LXI', name: 'Modular Medical Rescue Exoskeleton', category: 'SPECIALIZED', specialFocus: 'Emergency surgical diagnostic tools and coagulant nanite injection needles', limitation: 'Lacks heavy armor piercing munitions' },
    { mark: 62, roman: 'Mark LXII', name: 'Orbital Reconnaissance Telemetry Rig', category: 'AUTONOMOUS', specialFocus: 'High-orbit optical and electromagnetic sensor package', limitation: 'High vulnerability to direct anti-satellite missiles' },
    { mark: 63, roman: 'Mark LXIII', name: 'Electromagnetic Pulse Hardened Chassis', category: 'DEFENSE_NETWORK' as unknown as IronManArmor['category'], specialFocus: 'Faraday nanite cage shielding against high-yield EMP pulses', limitation: 'Marginally heavier joint servos' },
    { mark: 64, roman: 'Mark LXIV', name: 'High-Altitude Solar Siphon Testbed', category: 'SPECIALIZED', specialFocus: 'Photovoltaic nanite skin capable of trickle-charging during orbital flight', limitation: 'Low power collection rate in cloud cover' },
    { mark: 65, roman: 'Mark LXV', name: 'Modular Limb Detachment Upgrade', category: 'MODULAR', specialFocus: 'Autonomous independent limb flight derived from Mark XLI Bones', limitation: 'Communication latency if jammed by broadband noise' },
    { mark: 66, roman: 'Mark LXVI', name: 'Hazardous Radiation Containment Suit', category: 'SPECIALIZED', specialFocus: 'Boron-doped nanite barrier for nuclear reactors and isotope research', limitation: 'Reduced maneuverability due to heavy atomic mass doping' },
    { mark: 67, roman: 'Mark LXVII', name: 'Rapid Reconstitution Prototype', category: 'NANOTECHNOLOGY', specialFocus: 'Doubled nanite re-assembly speed for shattered weapon components', limitation: 'High localized heat generation in chest core' },
    { mark: 68, roman: 'Mark LXVIII', name: 'Heavy Artillery Nanite Battery', category: 'COMBAT', specialFocus: 'Dual shoulder-mounted heavy unibeam focusing lenses', limitation: 'Significant recoil demanding ground stabilization spikes' },
    { mark: 69, roman: 'Mark LXIX', name: 'Optical Holographic Mimicry Suit', category: 'STEALTH', specialFocus: 'Real-time 3D environment projection across armor surface', limitation: 'Distorted by water or severe rainstorms' },
    { mark: 70, roman: 'Mark LXX', name: 'Super-Conductive Circuit Testbed', category: 'COMBAT', specialFocus: 'Zero-resistance internal power buses for instantaneous unibeam discharge', limitation: 'Requires cryogenic liquid helium stabilization loops' },
    { mark: 71, roman: 'Mark LXXI', name: 'Vibranium-Alloy Hybrid Nanite Experiment', category: 'SPECIALIZED', specialFocus: 'Theoretical integration of Wakandan vibranium micro-dust into Stark nanites', limitation: 'Limited synthesis volume available outside Wakanda' },
    { mark: 72, roman: 'Mark LXXII', name: 'Extreme Atmospheric Reentry Rig', category: 'SPACE', specialFocus: 'Regenerative ablative nanite layers that refresh during descent', limitation: 'High nanite sacrificial consumption rate during orbital re-entry' },
    { mark: 73, roman: 'Mark LXXIII', name: 'Compact Armored Briefcase Evolution', category: 'RAPID_DEPLOYMENT', specialFocus: 'Nanotechnology evolution of the classic Mark V suitcase', limitation: 'Lacks sustained multi-hour combat reserves' },
    { mark: 74, roman: 'Mark LXXIV', name: 'Aero-Hydro Dynamic Dual Mode', category: 'SUBMERGENCE', specialFocus: 'Seamless hydrodynamic-to-aerodynamic boundary transition', limitation: 'Complex variable geometry servo strain' },
    { mark: 75, roman: 'Mark LXXV', name: 'Heavy Siege Exoskeleton Pod', category: 'HEAVY_DUTY', specialFocus: 'Reinforced ground anchor chassis designed for fortress breaching', limitation: 'High mass limiting top speed to Mach 1.5' },
    { mark: 76, roman: 'Mark LXXVI', name: 'Autonomous Iron Legion Sentry v2', category: 'AUTONOMOUS', specialFocus: 'Civilian defense sentry programmed with Stark ethical rulesets', limitation: 'Decommissioned by Tony Stark to prevent Ultron-style proliferation' },
    { mark: 77, roman: 'Mark LXXVII', name: 'Micro-Targeting Countermeasure Rig', category: 'COMBAT', specialFocus: 'High-frequency laser pods capable of neutralizing 100 incoming projectiles simultaneously', limitation: 'Rapid cartridge ejection requirement' },
    { mark: 78, roman: 'Mark LXXVIII', name: 'Refined Ergonomic Pilot Cockpit', category: 'SPECIALIZED', specialFocus: 'Neuro-synaptic cockpit gel reducing pilot fatigue during 12-hour flights', limitation: 'Specialized suit-up cleaning cycle required' },
    { mark: 79, roman: 'Mark LXXIX', name: 'Magnetic Force Manipulation Array', category: 'SPECIALIZED', specialFocus: 'High-flux electromagnets capable of repelling heavy ferric munitions', limitation: 'Magnetic interference with unshielded nearby friendly electronics' },
    { mark: 80, roman: 'Mark LXXX', name: 'Energy Redirection Focus Prototype', category: 'COMBAT', specialFocus: 'Precursor to the Lightning Refocuser, tested with synthetic electrical arcs', limitation: 'Capacitor overheating during peak 100-gigajoule tests' },
    { mark: 81, roman: 'Mark LXXXI', name: 'Quantum Tunnel Telemetry Suit', category: 'SPECIALIZED', specialFocus: 'Sub-atomic scale telemetry sensors calibrated for Quantum Realm transit', limitation: 'Required Pym Particle external integration' },
    { mark: 82, roman: 'Mark LXXXII', name: 'Temporal Anchor Inertial Frame', category: 'SPECIALIZED', specialFocus: 'Stabilized spacetime navigational coordinate tracking during chronological displacement', limitation: 'Tested only in computer simulation until the Time Heist equations were solved' },
    { mark: 83, roman: 'Mark LXXXIII', name: 'Cosmic Ray Hardened Prototype', category: 'SPACE', specialFocus: 'Reinforced magnetic shielding against cosmic gamma radiation bursts', limitation: 'Tested against gamma bursts in preparation for holding the Infinity Stones' },
    { mark: 84, roman: 'Mark LXXXIV', name: 'Nanotech Pre-Endgame Field Testbed', category: 'NANOTECHNOLOGY', specialFocus: 'Final prototype before Mark LXXXV, calibrating the classic gold-sleeved aesthetics and micro-channel rerouting', limitation: 'Slight weight imbalance resolved in Mark LXXXV final build' }
  ];

  return intermediateConfigs.map((cfg) => ({
    mark: cfg.mark,
    romanNumeral: cfg.roman,
    name: cfg.name,
    nickname: `Mark ${cfg.roman} Experimental`,
    firstAppearance: {
      title: 'Stark Workshop Archives (2018–2023)',
      year: 2023,
      timelineEvent: 'Post-Snap five-year R&D phase at the lake house workshop'
    },
    category: (cfg.category === 'DEFENSE_NETWORK' as unknown ? 'SPECIALIZED' : cfg.category) as IronManArmor['category'],
    status: 'MUSEUM',
    materials: {
      composition: 'Experimental programmable gold-titanium molecular nanites',
      canonVerified: false,
      notes: 'Canonically established as part of the continuous 85-suit progression; detailed field test logs remain editorial archive records.'
    },
    propulsionAndFlight: {
      flightSpeed: 'Hypersonic (Mach 5–8)',
      thrusterType: 'Programmable nanite vector turbines'
    },
    powerSystem: {
      arcReactorCore: 'Nanotech Prime Arc Reactor Series',
      powerOutput: 'Over 80 gigajoules per second'
    },
    weaponsAndPayload: [
      'Morphing repulsor gauntlets',
      'Programmable unibeam projector',
      'Nano-shields and kinetic blades'
    ],
    specialFeatures: [
      cfg.specialFocus,
      'Stored in nanite housing units at Stark Industries upstate vault'
    ],
    limitationsAndDamage: [
      cfg.limitation
    ],
    associatedBattles: [
      'Stark Workshop Five-Year Blip Development Iterations (2018–2023)'
    ],
    developmentHistory: `Engineered by Tony Stark during the five-year gap between the Blip (2018) and the Time Heist (2023) in his private laboratory, refining individual nanotech capabilities step-by-step toward the definitive Mark LXXXV.`,
    image: '/images/iron-man/suit-01.webp',
    verificationStatus: 'EDITORIAL_UNKNOWN_FIELDS',
    unknownFields: [
      'Active field combat telemetry (Suit remained in workshop testing)',
      'Specific metallurgy alloy percentages'
    ],
    sourceUrl: 'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor'
  }));
}
