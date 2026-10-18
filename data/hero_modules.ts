import { HeroSpecializedModule } from '@/types/mcu';

export const HERO_SPECIALIZED_MODULES: Record<string, HeroSpecializedModule> = {
  'captain-america': {
    moduleId: 'mod-cap-shield-vault',
    heroSlug: 'captain-america',
    heroName: 'Captain America (Steve Rogers)',
    moduleType: 'CAPTAIN_SHIELD_VAULT',
    title: 'THE SHIELD ARCHIVE & VIBRANIUM LEGACY',
    subtitle: 'From Brooklyn Trash Can Lids to the Star-Spangled Bastion',
    description: 'Steve Rogers’ iconic defensive arsenal, uniform evolution across eight decades, and the passing of the mantle.',
    items: [
      {
        id: 'steve-shield-original-triangular',
        name: 'The USO Triangular Shield',
        designation: '1943 USO Touring Prop',
        type: 'Ballistic Steel Prop Shield',
        firstAppearance: 'Captain America: The First Avenger (2011)',
        capabilities: ['Basic handgun bullet deflection', 'USO stage show choreography aid'],
        materialsOrOrigin: 'Stamped sheet steel painted with patriotic red, white, and blue stripes',
        damageOrStatus: 'Dented by Red Skull’s physical punch during Hydra factory raid in Austria',
        notes: 'Carried during the unauthorized rescue of the 107th Infantry Regiment.'
      },
      {
        id: 'steve-shield-circular-vibranium',
        name: 'Circular Vibranium Shield',
        designation: 'Howard Stark SSR Prototype (1943)',
        type: 'Pure Vibranium Kinetic Absorption Disc',
        firstAppearance: 'Captain America: The First Avenger (2011)',
        capabilities: [
          'Total kinetic shockwave absorption (Vibranium absorbs and redirects physical impact)',
          'Aerodynamic return-curve bounce trajectory physics',
          'Ricochets off multiple targets and hard surfaces returning to thrower’s arm'
        ],
        materialsOrOrigin: 'Forged from all the refined vibranium the SSR possessed in 1943 by Howard Stark',
        damageOrStatus: 'Shattered by Thanos wielding his Uru double-edged broadsword in 2023; replaced by an alternate timeline shield gifted to Sam Wilson',
        notes: 'The enduring symbol of freedom in the Marvel Cinematic Universe.'
      },
      {
        id: 'steve-shield-stealth-suit',
        name: 'S.H.I.E.L.D. Strike Stealth Shield',
        designation: 'STRIKE Team Low-Visibility Variant',
        type: 'Muted Paint Tactical Shield',
        firstAppearance: 'Captain America: The Winter Soldier (2014)',
        capabilities: ['Radar-absorbent coating', 'Low-visibility electromagnetic paint for nocturnal maritime boarding'],
        materialsOrOrigin: 'Original vibranium disc repainted with light blue and silver non-reflective enamel',
        damageOrStatus: 'Stripped back to classic red/white/blue after Steve exposed Hydra inside S.H.I.E.L.D.',
        notes: 'Used during the Lemurian Star hostage rescue operation.'
      },
      {
        id: 'steve-shield-wakandan-gauntlets',
        name: 'Wakandan Dual Vibranium Gauntlets',
        designation: 'Wakandan Design Group Combat Vane Shields',
        type: 'Retractable Kinetic Forearm Shields',
        firstAppearance: 'Avengers: Infinity War (2018)',
        capabilities: [
          'Spring-activated expanding vibranium blades',
          'Close-quarters punching and slicing capability',
          'Deployable dual forearm shields'
        ],
        materialsOrOrigin: 'Wakandan vibranium crafted by Shuri at T’Challa’s request ("Get this man a shield")',
        damageOrStatus: 'Retired after the Battle of Wakanda when Steve reclaimed his circular shield',
        notes: 'Gifted by King T’Challa when Steve arrived in Wakanda without his original shield.'
      }
    ]
  },
  'thor': {
    moduleId: 'mod-thor-weapons-lore',
    heroSlug: 'thor',
    heroName: 'Thor Odinson',
    moduleType: 'THOR_MJOLNIR_LORE',
    title: 'THE URU FORGE & ASGARDIAN RELICS',
    subtitle: 'Mjolnir, Stormbreaker, and the God of Thunder’s Inherent Divinity',
    description: 'The mystical weapons forged in the heart of dying neutron stars, Odin’s worthiness enchantment, and Thor’s elemental mastery.',
    items: [
      {
        id: 'thor-mjolnir',
        name: 'Mjolnir',
        designation: 'The Hammer of the Worthy',
        type: 'Mystical Asgardian Uru War Hammer',
        firstAppearance: 'Thor (2011)',
        capabilities: [
          'Channeling lightning, storms, and atmospheric pressure',
          'High-velocity flight via rotational momentum throwing',
          'Worthiness Enchantment: "Whosoever holds this hammer, if he be worthy, shall possess the power of Thor"'
        ],
        materialsOrOrigin: 'Forged from Uru metal in the dying star forge of Nidavellir by King Eitri',
        damageOrStatus: 'Crushed into fragments by Hela in Norway (2017); reconstructed by Jane Foster as Mighty Thor (2024)',
        notes: 'Wielded canonically by Thor, Odin, Vision (2015), Steve Rogers (2023), and Jane Foster (2024).'
      },
      {
        id: 'thor-stormbreaker',
        name: 'Stormbreaker',
        designation: 'The King’s Weapon',
        type: 'Mystical Uru Battleaxe / Halberd',
        firstAppearance: 'Avengers: Infinity War (2018)',
        capabilities: [
          'Bifrost summoning: Can access the dimensional teleportation bridge anywhere in the Nine Realms',
          'Capable of cleaving through the continuous blast of all six Infinity Stones',
          'Flies independently and returns to Thor’s hand; amplifies lightning to cataclysmic levels'
        ],
        materialsOrOrigin: 'Forged by Eitri at Nidavellir with Groot sacrificing his own arm to form the wooden handle',
        damageOrStatus: 'Active primary weapon; temporarily borrowed by Gorr’s daughter Love',
        notes: 'Decapitated Thanos at the Garden in 2018.'
      },
      {
        id: 'thor-god-of-thunder-powers',
        name: 'Inherent Thunder God Physiology',
        designation: 'Asgardian Divine Essence',
        type: 'Biological Divinity',
        firstAppearance: 'Thor (2011)',
        capabilities: [
          'Generating raw lightning directly from eyes, fists, and veins without any weapon',
          'Centuries-long lifespan (over 1,500 years old)',
          'Superhuman durability surviving the full neutron heat of Nidavellir’s star forge'
        ],
        materialsOrOrigin: 'Son of Odin Allfather and Gaea / Frigga',
        notes: '"Are you Thor, the God of Hammers? That hammer was to help you control your power, to focus it."'
      }
    ]
  },
  'hulk': {
    moduleId: 'mod-hulk-transformation-matrix',
    heroSlug: 'hulk',
    heroName: 'Bruce Banner & The Hulk',
    moduleType: 'HULK_TRANSFORMATION_MATRIX',
    title: 'THE GAMMA TRANSFORMATION SPECTRUM',
    subtitle: 'From Savage Green Goliath to Merged Smart Hulk',
    description: 'Dr. Bruce Banner’s biochemical struggle, gamma radiation synthesis, alter-ego stages, and the psychological merger of brain and brawn.',
    items: [
      {
        id: 'hulk-savage-form',
        name: 'Savage Hulk (The Other Guy)',
        designation: 'Uncontrolled Gamma Manifestation',
        type: 'Adrenaline-Triggered Berserker Alter-Ego',
        firstAppearance: 'The Incredible Hulk (2008) / The Avengers (2012)',
        capabilities: [
          'Infinite strength scaling directly with rage and emotional distress',
          'Leaping across miles in a single bound; seismic ground smashes',
          'Near-instantaneous cellular regeneration and bullet immunity'
        ],
        materialsOrOrigin: 'Bio-tech gamma radiation accident at Culver University attempting to replicate Erskine’s super soldier serum',
        damageOrStatus: 'Superseded by Smart Hulk after 18 months in the gamma lab',
        notes: '"That’s my secret, Cap: I’m always angry."'
      },
      {
        id: 'hulk-gladiator-form',
        name: 'Gladiator Hulk (Sakaar Champion)',
        designation: 'Sentient Warrior King of Sakaar',
        type: 'Cognitive Arena Fighter',
        firstAppearance: 'Thor: Ragnarok (2017)',
        capabilities: [
          'Full verbal speech, tactical weapon use (Giant war-hammer and battleaxe)',
          'Remained in continuous Hulk manifestation for two Earth years without reverting to Banner'
        ],
        materialsOrOrigin: 'Arrived on Sakaar via Quinjet wormhole following the Battle of Sokovia',
        damageOrStatus: 'Reverted to Banner after seeing Natasha Romanoff’s video message in Quinjet',
        notes: 'Champion of the Grandmaster’s Contest of Champions.'
      },
      {
        id: 'hulk-smart-hulk',
        name: 'Smart Hulk (Professor Hulk)',
        designation: 'Permanent Neural & Physical Merger',
        type: 'Synthesized Brain & Brawn Identity',
        firstAppearance: 'Avengers: Endgame (2019)',
        capabilities: [
          'Retains Tony Stark-level scientific genius and doctoral intelligence in a 9-foot, 1,400-pound green body',
          'High physical strength and emotional equilibrium; zero uncontrolled rampages',
          'Survives massive cosmic gamma radiation doses that would incinerate normal human tissue'
        ],
        materialsOrOrigin: 'Spent eighteen months in a gamma laboratory during the Blip combining the two halves',
        damageOrStatus: 'Right arm severely burned channeling the six Infinity Stones in the Blip reversal Snap; healed via inhibitor device',
        notes: 'Snapping the Nano Gauntlet to bring everyone back was "what I was made for."'
      }
    ]
  },
  'black-widow': {
    moduleId: 'mod-widow-black-ops',
    heroSlug: 'black-widow',
    heroName: 'Natasha Romanoff',
    moduleType: 'WIDOW_BLACK_OPS_DOSSIER',
    title: 'RED ROOM SPECIAL OPERATIONS & WIDOW’S BITE',
    subtitle: 'From Soviet Assassin to Earth’s Master Espionage Agent',
    description: 'Natasha Romanoff’s Red Room conditioning, tactical electroshock wrist gauntlets, covert espionage tradecraft, and Budapest origins.',
    items: [
      {
        id: 'widows-bite-gauntlets',
        name: 'The Widow’s Bite Wrist Gauntlets',
        designation: 'Electro-Shock Electrostatic Projector',
        type: 'Tactical Wrist Combat System',
        firstAppearance: 'Iron Man 2 (2010)',
        capabilities: [
          '30,000-volt electro-muscular disruption taser discharge',
          'Deployable grapple cable and zip-line wire',
          'Blue plasma explosive discs and tear-gas pellets'
        ],
        materialsOrOrigin: 'Engineered in the Red Room, upgraded by S.H.I.E.L.D. and Tony Stark in Avengers Tower',
        damageOrStatus: 'Upgraded through multiple iterations across all MCU deployments',
        notes: 'Used to incapacitate Happy Hogan’s sparring partners and neutralize Black Panther’s pursuit in Civil War.'
      },
      {
        id: 'widow-batons',
        name: 'Electrified Tactical Batons',
        designation: 'Dual Shock Stun Batons',
        type: 'Collapsible Electro-Shock Weapons',
        firstAppearance: 'Avengers: Age of Ultron (2015)',
        capabilities: [
          'Dual escrima stick close-quarters combat',
          'Connect together into a single long-reach electrified combat bo-staff',
          'High-voltage stun discharge upon impact'
        ],
        materialsOrOrigin: 'Stark Industries custom fabrication for Romanoff',
        damageOrStatus: 'Active through Infinity War and Endgame',
        notes: 'Wielded in the Leipzig airport clash and the Battle of Wakanda against Proxima Midnight.'
      },
      {
        id: 'widow-photostatic-veil',
        name: 'Photostatic Nanomask Veil',
        designation: 'S.H.I.E.L.D. Holographic Disguise Matrix',
        type: 'Facial Impersonation Mask',
        firstAppearance: 'Captain America: The Winter Soldier (2014)',
        capabilities: [
          'Replicates another person’s face, skin texture, and voice pitch in real time',
          'Allows total infiltration of high-security diplomatic environments'
        ],
        materialsOrOrigin: 'S.H.I.E.L.D. R&D Department',
        notes: 'Used to impersonate World Security Council member Councilwoman Hawley to disarm Alexander Pierce.'
      }
    ]
  },
  'hawkeye': {
    moduleId: 'mod-hawkeye-trick-arrows',
    heroSlug: 'hawkeye',
    heroName: 'Clint Barton',
    moduleType: 'HAWKEYE_TRICK_ARROWS',
    title: 'THE QUIVER OF PRECISION: TRICK ARROW ARSENAL',
    subtitle: 'From Circus Marksmanship to Master Marksman & Ronin',
    description: 'Clint Barton’s specialized mechanical arrowheads, collapsible recurve bows, Ronin katana steel, and succession to Kate Bishop.',
    items: [
      {
        id: 'arrow-pym-particle',
        name: 'Pym Particle Shrink / Growth Arrow',
        designation: 'Sub-Atomic Scale Warhead',
        type: 'Specialized Trick Arrow',
        firstAppearance: 'Hawkeye (2021)',
        capabilities: [
          'Enlarges target objects 50x in mid-air upon collision (e.g. Enlarging an arrow to crush a pursuing truck)',
          'Shrinks enemy vehicles to toy size'
        ],
        materialsOrOrigin: 'Arrowhead fitted with Hank Pym’s red/blue particle regulators provided by Scott Lang',
        notes: 'Deployed during the Manhattan car chase with Kate Bishop.'
      },
      {
        id: 'arrow-emp-sonic',
        name: 'High-Frequency Sonic & EMP Arrow',
        designation: 'Area-Denial Electronic Disruption Warhead',
        type: 'Non-Lethal Tactical Arrow',
        firstAppearance: 'The Avengers (2012)',
        capabilities: [
          'Neutralizes electronic circuits, drone navigation, and radar in a 20-meter burst',
          'High-decibel acoustic disorientation'
        ],
        materialsOrOrigin: 'S.H.I.E.L.D. Weaponry',
        notes: 'Used to shut down S.H.I.E.L.D. Helicarrier computer banks in 2012.'
      },
      {
        id: 'arrow-grapple-zipline',
        name: 'Kevlar-Reinforced Grappling Hook Arrow',
        designation: 'High-Tensile Kinetic Ascent Arrow',
        type: 'Mobility & Rappelling Arrow',
        firstAppearance: 'The Avengers (2012)',
        capabilities: [
          'Carries 500-pound load capacity across 150-meter cable',
          'Automatic motorized cable retraction'
        ],
        materialsOrOrigin: 'S.H.I.E.L.D. Tactical Mobility Division',
        notes: 'Used to dive off the roof of the Manhattan skyscraper while shooting backward at Chitauri.'
      },
      {
        id: 'ronin-katana',
        name: 'The Ronin Katana',
        designation: 'Folded Carbon Steel Wakizashi & Katana',
        type: 'Lethal Edged Combat Weapon',
        firstAppearance: 'Avengers: Endgame (2019)',
        capabilities: [
          'Razor-sharp folded high-carbon steel capable of slicing through body armor',
          'Silent close-quarters assassination balance'
        ],
        materialsOrOrigin: 'Forged during Clint’s five-year grief-fueled crusade against global cartels during the Blip',
        damageOrStatus: 'Reclaimed and passed down during confrontation with Maya Lopez and the Tracksuit Mafia',
        notes: 'The weapon of Clint Barton’s darkest era as the masked executioner Ronin.'
      }
    ]
  },
  'spider-man': {
    moduleId: 'mod-spiderman-suit-lab',
    heroSlug: 'spider-man',
    heroName: 'Spider-Man (Peter Parker)',
    moduleType: 'SPIDERMAN_SUIT_LAB',
    title: 'THE WEB-SHOOTER LABORATORY & SUIT MATRIX',
    subtitle: 'From Queens Dumpster Dive to Multiversal Integrated Nanotech',
    description: 'Peter Parker’s homemade web-fluid chemistry, Stark-engineered tactical suits, Iron Spider waldoes, and multiversal costume integration.',
    items: [
      {
        id: 'spiderman-homemade-webfluid',
        name: 'Homemade Web-Fluid Formula',
        designation: 'High-Tensile Polymer Adhesive Compound',
        type: 'Chemical Polymer Invention',
        firstAppearance: 'Captain America: Civil War (2016) / Spider-Man: Homecoming (2017)',
        capabilities: [
          'Tensile strength exceeding industrial steel cables by 300%',
          'Dissolves into harmless inert powder after exactly two hours',
          'Cooked by high-schooler Peter Parker in school science labs using common household chemicals'
        ],
        materialsOrOrigin: 'Original chemical formulation by Peter Parker',
        notes: 'Tony Stark was amazed: "Tensile strength is off the charts. Who manufactured this?"'
      },
      {
        id: 'spiderman-stark-suit',
        name: 'Stark Tactical Spider-Man Suit',
        designation: 'Homecoming Suit / Mark I Stark Upgrade',
        type: 'Smart-Fabric Spider Suit',
        firstAppearance: 'Captain America: Civil War (2016)',
        capabilities: [
          '576 selectable web-shooter cartridge configurations',
          'Expressive mechanical camera shutters that focus his overwhelmed spider-sense',
          'Karen internal AI voice interface',
          'Built-in parachute and reconnaissance drone spider emblem'
        ],
        materialsOrOrigin: 'Tailored and coded by Tony Stark for the Leipzig-Halle airport battle',
        notes: 'Peter unlocked the "Enhanced Combat Mode" with Ned Leeds’ hacking skills.'
      },
      {
        id: 'spiderman-iron-spider',
        name: 'Iron Spider Armor',
        designation: 'Item 17A / Nanotech Spider Suit',
        type: 'Powered Molecular Nanite Armor',
        firstAppearance: 'Spider-Man: Homecoming (2017) / Avengers: Infinity War (2018)',
        capabilities: [
          'Four deployable golden arachnid waldoes (mechanical spider legs) on back for climbing and combat',
          'Hermetically sealed cockpit with independent oxygen supply for deep cosmic vacuum',
          'Repulsor landing dampeners and neural HUD'
        ],
        materialsOrOrigin: 'Stark Industries orbital deployment pod',
        notes: 'Saved Peter’s life when he climbed aboard Ebony Maw’s Q-Ship ascending into space.'
      },
      {
        id: 'spiderman-integrated-suit',
        name: 'Integrated Nanotech & Magic Suit',
        designation: 'Hybrid Mystic-Nano Suit',
        type: 'Mystic-Enhanced Suit',
        firstAppearance: 'Spider-Man: No Way Home (2021)',
        capabilities: [
          'Nanotech from Doc Ock’s tentacles integrated with Doctor Strange’s dimensional containment runes',
          'Allowed Peter to track and capture multiversal villains across New York City'
        ],
        materialsOrOrigin: 'Combination of Stark Iron Spider nanites, red/black upgraded suit, and Strange’s mystic gauntlet',
        notes: 'Worn during the battle of the Statue of Liberty alongside Peter Two (Tobey) and Peter Three (Andrew).'
      }
    ]
  },
  'doctor-strange': {
    moduleId: 'mod-strange-mystic-sanctum',
    heroSlug: 'doctor-strange',
    heroName: 'Doctor Stephen Strange',
    moduleType: 'STRANGE_MYSTIC_SANCTUM',
    title: 'THE SANCTUM SANCTORUM & MYSTIC RELICS',
    subtitle: 'From Neurosurgeon to Master of the Mystic Arts',
    description: 'The ancient relics of Kamar-Taj, the Eye of Agamotto, the sentient Cloak of Levitation, and Eldritch Magic spells.',
    items: [
      {
        id: 'strange-cloak-of-levitation',
        name: 'The Cloak of Levitation',
        designation: 'Sentient Ancient Relic',
        type: 'Conscious Mystic Relic',
        firstAppearance: 'Doctor Strange (2016)',
        capabilities: [
          'Supersonic flight and high-agility aerial maneuvering',
          'Sentient personality that independently defends Strange, catches him when falling, and wipes tears from his face',
          'Can grapple, wrap around, and suffocate enemy combatants autonomously'
        ],
        materialsOrOrigin: 'Preserved for centuries inside the glass case of the New York Sanctum Sanctorum until it chose Stephen Strange',
        notes: 'Stitched back together using blue thread in the Multiverse of Madness.'
      },
      {
        id: 'strange-eye-of-agamotto',
        name: 'The Eye of Agamotto',
        designation: 'Amulet of the First Sorcerer Supreme / Time Stone Housing',
        type: 'Infinity Stone Relic & Mystic Amulet',
        firstAppearance: 'Doctor Strange (2016)',
        capabilities: [
          'Housed the green Time Stone, allowing manipulation of time loops, age reversal, and chronological foresight',
          'Viewed 14,000,605 possible futures on Titan to identify the single victory against Thanos',
          'Retained by Strange as an amulet to dispel dark illusions even after the destruction of the Time Stone'
        ],
        materialsOrOrigin: 'Forged by Agamotto, the First Sorcerer Supreme of Earth',
        notes: '"Dormammu, I’ve come to bargain."'
      },
      {
        id: 'strange-sling-ring',
        name: 'Two-Finger Sling Ring',
        designation: 'Interdimensional Gateway Focus',
        type: 'Dimensional Portal Generator',
        firstAppearance: 'Doctor Strange (2016)',
        capabilities: [
          'Opens fiery circular portals between any two points in the multiverse or on Earth',
          'Can sever limbs of giant enemies when closed abruptly (as demonstrated on Cull Obsidian)'
        ],
        materialsOrOrigin: 'Standard mystic focusing tool issued to Kamar-Taj sorcerers',
        notes: 'Opened the cosmic portals that brought the vanished armies to the Battle of Earth in Endgame.'
      },
      {
        id: 'strange-spells-compendium',
        name: 'Compendium of Eldritch Spells',
        designation: 'Vishanti Eldritch Arts',
        type: 'Mystic Spells & Incantations',
        firstAppearance: 'Doctor Strange (2016) / Avengers: Infinity War (2018)',
        capabilities: [
          'Mirror Dimension: Creates parallel sub-dimension to contain catastrophic blasts without real-world damage',
          'Crimson Bands of Cyttorak: Unbreakable mystic energy bands used to pin Thanos’s gauntlet hand',
          'Images of Ikonn: Multiplies Strange into hundreds of duplicate magical copies simultaneously',
          'Winds of Watoomb: High-velocity atmospheric gale force to disperse volcanic matter'
        ],
        materialsOrOrigin: 'Studied from the library of Kamar-Taj and the Book of Cagliostro',
        notes: 'Allowed Doctor Strange to duel four-stone Thanos head-on on Titan.'
      }
    ]
  },
  'wanda-maximoff': {
    moduleId: 'mod-wanda-chaos-spectrum',
    heroSlug: 'wanda-maximoff',
    heroName: 'Wanda Maximoff (The Scarlet Witch)',
    moduleType: 'WANDA_CHAOS_SPECTRUM',
    title: 'THE CHAOS MAGIC SPECTRUM & SCARLET WITCH PROPHECY',
    subtitle: 'From Sokovian Orphan to the Nexus Being of Earth-616',
    description: 'Wanda Maximoff’s innate psionic awakening, Mind Stone enhancement, the Westview Hex anomaly, and the dark cosmic mastery of the Darkhold.',
    items: [
      {
        id: 'wanda-innate-chaos-magic',
        name: 'Spontaneous Chaos Magic',
        designation: 'Innate Mythic Probability Alteration',
        type: 'Nexus Being Reality Warping',
        firstAppearance: 'Captain America: The Winter Soldier (2014) / WandaVision (2021)',
        capabilities: [
          'Innate probability hexes (Disarmed the Stark missile that struck her childhood apartment as a child)',
          'Spontaneous creation of matter, life, and physical realities from sheer will',
          'Telekinesis strong enough to overpower Thanos and shatter his Uru broadsword'
        ],
        materialsOrOrigin: 'Born with mythic Chaos Magic prophecy, magnified exponentially by exposure to the Mind Stone in Baron Strucker’s laboratory',
        notes: '"You have no idea how powerful you are. You’re supposed to be a myth. A being capable of spontaneous creation."'
      },
      {
        id: 'wanda-westview-hex',
        name: 'The Westview Hex Field',
        designation: 'CMBR Reality Distortion Dome',
        type: 'Spontaneous Micro-Reality Bubble',
        firstAppearance: 'WandaVision (2021)',
        capabilities: [
          'Rewrote the molecules of an entire New Jersey suburban town into a dynamic sitcom reality',
          'Resurrected a living soul of Vision from her internal Mind Stone resonance',
          'Created her twin sons Billy and Tommy with independent consciousness'
        ],
        materialsOrOrigin: 'Cast in a burst of grief-stricken raw Chaos Magic inside the vacant foundation of Vision’s intended home',
        notes: 'Dismantled voluntarily by Wanda to free the residents, sacrificing her manifested family.'
      },
      {
        id: 'wanda-darkhold-grimoire',
        name: 'The Darkhold (The Book of the Damned)',
        designation: 'Elder God Chthon’s Grimoire',
        type: 'Dark Corrupting Spellbook',
        firstAppearance: 'WandaVision (2021) / Doctor Strange in the Multiverse of Madness (2022)',
        capabilities: [
          'Dreamwalking: Projecting consciousness across the multiverse into alternate universe variant bodies',
          'Dark dimensional summoning and demonic entity control',
          'Corrupts the user’s soul with an inescapable obsession'
        ],
        materialsOrOrigin: 'Transcribed from the carvings on Mount Wundagore by the ancient demon god Chthon',
        damageOrStatus: 'Destroyed in every universe across the multiverse when Wanda brought down Mount Wundagore upon herself',
        notes: 'Carried Wanda down the dark path of multiversal slaughter before her final redemption.'
      }
    ]
  },
  'vision': {
    moduleId: 'mod-vision-synthezoid-core',
    heroSlug: 'vision',
    heroName: 'Vision',
    moduleType: 'VISION_SYNTH_CORE',
    title: 'THE SYNTHEZOID MATRIX & MIND STONE CORE',
    subtitle: 'Vibranium Biology, Cosmic Intelligence, and White Vision Evolution',
    description: 'Vision’s synthetic cellular anatomy, density-shifting phase mechanics, the solar energy forehead jewel, and the philosophical debate of the Ship of Theseus.',
    items: [
      {
        id: 'vision-mind-stone',
        name: 'The Mind Stone (Solar Jewel)',
        designation: 'Cosmic Singularity Consciousness Core',
        type: 'Cosmic Infinity Stone',
        firstAppearance: 'Avengers: Age of Ultron (2015)',
        capabilities: [
          'Emits devastating high-thermal energy beams capable of melting vibranium and slicing through reinforced aircraft',
          'Provides autonomous consciousness, high-order empathy, and philosophical introspection',
          'Calculates millions of tactical combat permutations simultaneously'
        ],
        materialsOrOrigin: 'One of the six cosmic singularities forged by cosmic entities at the birth of the universe',
        damageOrStatus: 'Shattered by Wanda Maximoff; time-reversed and ripped from Vision’s forehead by Thanos in Wakanda (2018)',
        notes: 'The living source of Vision’s sentience and humanity.'
      },
      {
        id: 'vision-vibranium-cellular-body',
        name: 'Synthetic Vibranium Cellular Biology',
        designation: 'Cradle of Life Synthezoid Vessel',
        type: 'Bio-Synthetic Living Body',
        firstAppearance: 'Avengers: Age of Ultron (2015)',
        capabilities: [
          'Density manipulation: Can phase intangibly through solid steel walls or become as hard as diamond to withstand heavy artillery',
          'Weightless supersonic levitation and flight',
          'Molecular synthetic clothing generation (Tuxedos, capes, civilian sweaters)'
        ],
        materialsOrOrigin: 'Constructed by Dr. Helen Cho under Ultron’s mind control using real human tissue bonded with Wakandan vibranium molecules',
        notes: 'Lifted Thor’s hammer Mjolnir seconds after waking up, instantly earning the trust of the Avengers.'
      },
      {
        id: 'white-vision-rebuilt',
        name: 'The White Vision Rebuild',
        designation: 'S.W.O.R.D. Project Cataract Weapon',
        type: 'Reactivated De-pigmented Synthezoid',
        firstAppearance: 'WandaVision (2021)',
        capabilities: [
          'All original vibranium physical density and flight capabilities',
          'Reprogrammed by Director Tyler Hayward with Wanda’s raw Chaos Magic drone residue',
          'Restored all original memories after debating the Ship of Theseus paradox with Hex Vision'
        ],
        materialsOrOrigin: 'Reconstructed from Vision’s salvaged corpse by S.W.O.R.D.',
        notes: '"I am the Vision." Flew into the sky after memory recovery; current location in Earth-616 unknown.'
      }
    ]
  },
  'sam-wilson': {
    moduleId: 'mod-sam-falcon-cap',
    heroSlug: 'falcon',
    heroName: 'Sam Wilson (Captain America)',
    moduleType: 'CAPTAIN_SHIELD_VAULT',
    title: 'THE EXO-7 FALCON RIG & CAPTAIN AMERICA MANTLE',
    subtitle: 'From Pararescue Wingman to the Global Captain America',
    description: 'Sam Wilson’s specialized flight exo-packs, autonomous Redwing reconnaissance drones, Wakandan vibranium wings, and moral leadership.',
    items: [
      {
        id: 'exo7-falcon-wings',
        name: 'EXO-7 Falcon Flight Exoskeleton',
        designation: 'USAF Pararescue Tactical Wing Pack',
        type: 'Aviation Flight Pack',
        firstAppearance: 'Captain America: The Winter Soldier (2014)',
        capabilities: [
          'High-velocity evasive aerial dogfighting and glider maneuvers',
          'Foldable wings act as kinetic shields against small-arms fire',
          'Dual sub-machine gun mounts'
        ],
        materialsOrOrigin: 'Classified United States Air Force Pararescue experimental military hardware',
        notes: 'Stolen from Fort Meade with Captain America to expose Hydra’s Project Insight.'
      },
      {
        id: 'redwing-drone',
        name: 'Redwing Combat & Reconnaissance Drone',
        designation: 'Stark / Wakandan Autonomous UAV',
        type: 'Tactical Drone Companion',
        firstAppearance: 'Captain America: Civil War (2016)',
        capabilities: [
          'Thermal X-ray imaging, biometric scanning, and live video telemetry feed',
          'Precision laser cutting torch and grappling tow cables',
          'Autonomous target acquisition'
        ],
        materialsOrOrigin: 'Engineered by Tony Stark; upgraded with Wakandan vibranium by Shuri',
        notes: 'Severed by Karli Morgenthau; replaced with advanced dual drones.'
      },
      {
        id: 'sam-wakandan-cap-suit',
        name: 'Wakandan Vibranium Captain America Suit',
        designation: 'Wakandan Design Group Flight Uniform',
        type: 'Vibranium-Weave Flight Armor',
        firstAppearance: 'The Falcon and the Winter Soldier (2021)',
        capabilities: [
          'Pure vibranium wing feathers capable of slicing through armored helicopters',
          'Twin vector thruster engines allowing high-speed supersonic flight without an engine stall',
          'Seamless magnetic holster and launch mechanism for Steve Rogers’ vibranium shield'
        ],
        materialsOrOrigin: 'Commissioned by Bucky Barnes as a personal gift from the Wakandan Design Group',
        notes: 'Worn when Sam addressed the Global Repatriation Council in Manhattan, officially accepting the mantle of Captain America.'
      }
    ]
  },
  't-challa': {
    moduleId: 'mod-panther-vibranium-lab',
    heroSlug: 'black-panther',
    heroName: 'T’Challa & Shuri',
    moduleType: 'BLACKPANTHER_VIBRANIUM_LAB',
    title: 'THE WAKANDAN DESIGN GROUP & PANTHER HABIT',
    subtitle: 'The Heart-Shaped Herb and Kinetic Energy Dissipation Armor',
    description: 'Wakanda’s greatest royal heritage: the nanotech Panther Habit, kinetic blast absorption, kimoyo bead networks, and succession.',
    items: [
      {
        id: 'panther-habit-civil-war',
        name: 'Civil War Vibranium Mesh Habit',
        designation: 'Traditional Royal Black Panther Habit',
        type: 'Vibranium Micro-Weave Armor',
        firstAppearance: 'Captain America: Civil War (2016)',
        capabilities: [
          'Complete immunity to heavy caliber bullets, helicopter machine guns, and explosions',
          'Retractable vibranium claws capable of scratching Steve Rogers’ vibranium shield',
          'Acoustically silenced boots absorbing all footstep noise'
        ],
        materialsOrOrigin: 'Sacred royal Wakandan vibranium weave blessed by the Panther Goddess Bast',
        notes: 'Worn by T’Challa in pursuit of Bucky Barnes across Bucharest and Leipzig.'
      },
      {
        id: 'panther-habit-nanotech-kinetic',
        name: 'Shuri Nanotech Kinetic Absorption Habit',
        designation: 'Tooth Necklace Nanotech Habit',
        type: 'Kinetic Energy Redistribution Suit',
        firstAppearance: 'Black Panther (2018)',
        capabilities: [
          'Stored entirely inside a silver tooth collar necklace, deploying instantaneously over the body',
          'Kinetic energy absorption: Absorbs the force of bullets and punches, storing it in the suit until glowing purple',
          'Kinetic Pulse Blast: Releases accumulated energy in a 360-degree radial concussive blast'
        ],
        materialsOrOrigin: 'Engineered by Princess Shuri in the Wakandan Design Group',
        notes: '"Strike me, go on. It absorbs the energy and holds it in place for redistribution."'
      },
      {
        id: 'heart-shaped-herb',
        name: 'The Heart-Shaped Herb',
        designation: 'Mutated Vibranium Botanical Essence',
        type: 'Superhuman Enhancement Flora',
        firstAppearance: 'Black Panther (2018)',
        capabilities: [
          'Bestows enhanced strength, superhuman agility, endurance, and sensory awareness',
          'Allows spiritual communion with ancestors on the Ancestral Plane'
        ],
        materialsOrOrigin: 'Flora native to Wakandan soil mutated by thousands of years of vibranium exposure; burned by Killmonger, chemically resynthesized by Shuri',
        notes: 'Shuri synthesized a synthetic vibranium herb in 2024 to become the new Black Panther.'
      }
    ]
  }
};
