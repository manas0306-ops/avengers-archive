import { VerifiedAppearance, CharacterAppearanceSummary } from '@/types/mcu';

export const VERIFIED_APPEARANCES: VerifiedAppearance[] = [
  // --- IRON MAN (TONY STARK) ---
  {
    id: 'app-im-01',
    characterId: 'iron-man',
    title: 'Iron Man',
    releaseDate: '2008-05-02',
    releaseYear: 2008,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Escape from Ten Rings captivity in Mark I', 'Building Mark III armor', 'Defeating Iron Monger (Obadiah Stane)', 'Declaring "I am Iron Man"'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/iron-man', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-im-02',
    characterId: 'iron-man',
    title: 'The Incredible Hulk',
    releaseDate: '2008-06-13',
    releaseYear: 2008,
    format: 'FEATURE_FILM',
    role: 'CAMEO',
    isOnScreen: true,
    majorEvents: ['Post-credits bar approach to General Thaddeus Ross proposing a "team"'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/the-incredible-hulk', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-im-03',
    characterId: 'iron-man',
    title: 'Iron Man 2',
    releaseDate: '2010-05-07',
    releaseYear: 2010,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Stark Expo 2010', 'Monaco attack by Whiplash (Mark V suitcase)', 'Synthesizing the new non-toxic element (Mark VI)', 'Teaming up with War Machine'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/iron-man-2', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-im-04',
    characterId: 'iron-man',
    title: 'Marvel\'s The Avengers',
    releaseDate: '2012-05-04',
    releaseYear: 2012,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Assembling the Avengers in New York', 'Fixing Helicarrier Engine 3', 'Carrying nuclear warhead through Chitauri wormhole in Mark VII'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/the-avengers', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-im-05',
    characterId: 'iron-man',
    title: 'Iron Man 3',
    releaseDate: '2013-05-03',
    releaseYear: 2013,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['PTSD insomnia following New York', 'Air Force One barrel-of-monkeys rescue', 'House Party Protocol on Norco tanker', 'Clean Slate Protocol & chest shrapnel surgery'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/iron-man-3', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-im-06',
    characterId: 'iron-man',
    title: 'Avengers: Age of Ultron',
    releaseDate: '2015-05-01',
    releaseYear: 2015,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Hydra base assault', 'Creating Ultron to protect Earth', 'Deploying Veronica Hulkbuster in Johannesburg', 'Co-creating Vision and vaporizing Sokovia core in Mark XLV'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-age-of-ultron', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-im-07',
    characterId: 'iron-man',
    title: 'Captain America: Civil War',
    releaseDate: '2016-05-06',
    releaseYear: 2016,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Signing the Sokovia Accords', 'Recruiting Peter Parker in Queens', 'Airport battle at Leipzig in Mark XLVI', 'Siberia duel against Steve Rogers and Bucky Barnes'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/captain-america-civil-war', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-im-08',
    characterId: 'iron-man',
    title: 'Spider-Man: Homecoming',
    releaseDate: '2017-07-07',
    releaseYear: 2017,
    format: 'FEATURE_FILM',
    role: 'SUPPORTING',
    isOnScreen: true,
    majorEvents: ['Mentoring Peter Parker', 'Rescuing Staten Island Ferry in Mark XLVII', 'Inviting Peter to join the Avengers'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/spider-man-homecoming', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-im-09',
    characterId: 'iron-man',
    title: 'Avengers: Infinity War',
    releaseDate: '2018-04-27',
    releaseYear: 2018,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Bleeker Street duel in nanotech Mark L', 'Infiltrating Q-Ship into cosmic deep space', 'Battle of Titan against Thanos', 'Marooned after witnessing Peter Parker turn to dust in the Blip'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-infinity-war', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-im-10',
    characterId: 'iron-man',
    title: 'Avengers: Endgame',
    releaseDate: '2019-04-26',
    releaseYear: 2019,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Rescued from space by Captain Marvel', 'Five-year quiet retirement with Pepper and Morgan', 'Solving Quantum Temporal GPS', 'Time Heist to 2012 & 1970', 'Equipping Mark LXXXV and performing universe-saving Snap: "I am Iron Man"'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-endgame', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-im-11',
    characterId: 'iron-man',
    title: 'Spider-Man: Far From Home',
    releaseDate: '2019-07-02',
    releaseYear: 2019,
    format: 'FEATURE_FILM',
    role: 'ARCHIVAL_FOOTAGE',
    isOnScreen: false,
    majorEvents: ['Global murals, in-memoriam tribute, and bequest of E.D.I.T.H. glasses to Peter Parker'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/spider-man-far-from-home', verifiedDate: '2026-09-28' }
  },

  // --- CAPTAIN AMERICA (STEVE ROGERS) ---
  {
    id: 'app-cap-01',
    characterId: 'captain-america',
    title: 'Captain America: The First Avenger',
    releaseDate: '2011-07-22',
    releaseYear: 2011,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Project Rebirth super-soldier procedure', 'Liberating 107th Regiment in Austria', 'Leading Howling Commandos against Hydra', 'Crashing the Valkyrie into Arctic ice'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/captain-america-the-first-avenger', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-cap-02',
    characterId: 'captain-america',
    title: 'Marvel\'s The Avengers',
    releaseDate: '2012-05-04',
    releaseYear: 2012,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Awakening in modern Manhattan', 'Tactical field command during the Battle of New York', '"Hulk... smash."'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/the-avengers', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-cap-03',
    characterId: 'captain-america',
    title: 'Captain America: The Winter Soldier',
    releaseDate: '2014-04-04',
    releaseYear: 2014,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Exposing Hydra infiltration within S.H.I.E.L.D.', 'Elevator ambush: "Before we get started, does anyone want to get out?"', 'Discovering Bucky Barnes survived as the Winter Soldier', 'Dismantling Project Insight Helicarriers'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/captain-america-the-winter-soldier', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-cap-04',
    characterId: 'captain-america',
    title: 'Avengers: Age of Ultron',
    releaseDate: '2015-05-01',
    releaseYear: 2015,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Sokovian raid on Strucker', 'Slightly budging Mjolnir at Avengers Tower party', 'Guiding civilian evacuation in Sokovia', 'Founding the New Avengers facility upstate'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-age-of-ultron', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-cap-05',
    characterId: 'captain-america',
    title: 'Captain America: Civil War',
    releaseDate: '2016-05-06',
    releaseYear: 2016,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Lagos incident', 'Refusing to sign the Sokovia Accords', 'Protecting Bucky Barnes from global manhunt', 'Leipzig airport battle', 'Surrendering his shield to Tony in Siberia'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/captain-america-civil-war', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-cap-06',
    characterId: 'captain-america',
    title: 'Avengers: Infinity War',
    releaseDate: '2018-04-27',
    releaseYear: 2018,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Rescuing Wanda and Vision in Edinburgh as Nomad', 'Leading defense forces in the Battle of Wakanda', 'Witnessing the Blip: "Oh, God."'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-infinity-war', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-cap-07',
    characterId: 'captain-america',
    title: 'Avengers: Endgame',
    releaseDate: '2019-04-26',
    releaseYear: 2019,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Leading support group during the five-year gap', 'Time Heist to 2012 ("Hail Hydra") and 1970 Camp Lehigh', 'Wielding Mjolnir against Thanos: "Avengers... assemble."', 'Returning Infinity Stones to timelines and growing old with Peggy Carter', 'Passing the shield to Sam Wilson'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-endgame', verifiedDate: '2026-09-28' }
  },

  // --- THOR ODINSON ---
  {
    id: 'app-thor-01',
    characterId: 'thor',
    title: 'Thor',
    releaseDate: '2011-05-06',
    releaseYear: 2011,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Banished from Asgard to New Mexico', 'Proving worthiness to reclaim Mjolnir', 'Defeating the Destroyer and breaking the Rainbow Bridge'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/thor', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-thor-02',
    characterId: 'thor',
    title: 'Marvel\'s The Avengers',
    releaseDate: '2012-05-04',
    releaseYear: 2012,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Capturing Loki in Germany', 'Battle with Iron Man and Captain America in forest', 'Defending Manhattan in the Battle of New York'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/the-avengers', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-thor-03',
    characterId: 'thor',
    title: 'Thor: The Dark World',
    releaseDate: '2013-11-08',
    releaseYear: 2013,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Svartalfheim campaign against Malekith', 'Frigga\'s funeral', 'Convergence battle in Greenwich, London'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/thor-the-dark-world', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-thor-04',
    characterId: 'thor',
    title: 'Avengers: Age of Ultron',
    releaseDate: '2015-05-01',
    releaseYear: 2015,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Water of Sights Infinity Stone visions', 'Empowering Vision’s synthetic birth', 'Overloading Sokovia vibranium core with Iron Man'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-age-of-ultron', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-thor-05',
    characterId: 'thor',
    title: 'Thor: Ragnarok',
    releaseDate: '2017-11-03',
    releaseYear: 2017,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Destruction of Mjolnir by Hela', 'Gladiator battle with Hulk on Sakaar', 'Unlocking inherent lightning without a hammer', 'Unleashing Surtur to trigger Ragnarok and evacuating Asgard'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/thor-ragnarok', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-thor-06',
    characterId: 'thor',
    title: 'Avengers: Infinity War',
    releaseDate: '2018-04-27',
    releaseYear: 2018,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Statesman slaughter; loss of Loki and Heimdall', 'Journey to Nidavellir with Rocket and Groot to forge Stormbreaker', 'Bifrost arrival in Wakanda ("Bring me Thanos!")', 'Striking Thanos in chest: "You should have gone for the head"'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-infinity-war', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-thor-07',
    characterId: 'thor',
    title: 'Avengers: Endgame',
    releaseDate: '2019-04-26',
    releaseYear: 2019,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Decapitating Thanos on the Garden planet', 'Depression in New Asgard (Tønsberg)', 'Time Heist to 2013 Asgard; meeting Frigga and reclaiming Mjolnir', 'Dual-wielding Mjolnir and Stormbreaker against 2014 Thanos', 'Crowning Valkyrie King of New Asgard'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-endgame', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-thor-08',
    characterId: 'thor',
    title: 'Thor: Love and Thunder',
    releaseDate: '2022-07-08',
    releaseYear: 2022,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Adventures with Guardians of the Galaxy', 'Reuniting with Jane Foster (Mighty Thor)', 'Omnipotent City battle and stealing Zeus’s Thunderbolt', 'Shadow Realm battle with Gorr the God Butcher', 'Adopting Gorr\'s resurrected daughter Love'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/thor-love-and-thunder', verifiedDate: '2026-09-28' }
  },

  // --- BRUCE BANNER / HULK ---
  {
    id: 'app-hulk-01',
    characterId: 'hulk',
    title: 'The Incredible Hulk',
    releaseDate: '2008-06-13',
    releaseYear: 2008,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Culver University gamma accident aftermath', 'Harlem battle against the Abomination (Emil Blonsky)', 'Beginning heartbeat meditation control in British Columbia'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/the-incredible-hulk', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-hulk-02',
    characterId: 'hulk',
    title: 'Marvel\'s The Avengers',
    releaseDate: '2012-05-04',
    releaseYear: 2012,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Located by Natasha Romanoff in Kolkata', 'S.H.I.E.L.D. Helicarrier lab research with Tony Stark', 'Battle of New York: One-punching Chitauri Leviathan and thrashing Loki in Stark Tower penthouse'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/the-avengers', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-hulk-03',
    characterId: 'hulk',
    title: 'Avengers: Age of Ultron',
    releaseDate: '2015-05-01',
    releaseYear: 2015,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Lullaby technique with Natasha Romanoff', 'Mind-manipulated rampage in Johannesburg stopped by Veronica', 'Co-creating Vision', 'Disconnecting comms and flying into space aboard Quinjet'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-age-of-ultron', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-hulk-04',
    characterId: 'hulk',
    title: 'Thor: Ragnarok',
    releaseDate: '2017-11-03',
    releaseYear: 2017,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Gladiator champion of Sakaar', 'Contest of Champions duel with Thor', 'Reverting to Banner after two years inside Quinjet', 'Leaping from spaceship to battle Fenris Wolf on the Rainbow Bridge'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/thor-ragnarok', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-hulk-05',
    characterId: 'hulk',
    title: 'Avengers: Infinity War',
    releaseDate: '2018-04-27',
    releaseYear: 2018,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Overpowered by Thanos aboard the Statesman', 'Sent to Earth via Bifrost by dying Heimdall; crashing into Sanctum Sanctorum', 'Hulk persona refuses to manifest; piloting Hulkbuster Mark II in Wakanda'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-infinity-war', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-hulk-06',
    characterId: 'hulk',
    title: 'Avengers: Endgame',
    releaseDate: '2019-04-26',
    releaseYear: 2019,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Debut of Smart Hulk (Merged Banner/Hulk form)', 'Meeting Ancient One in 2012 to receive the Time Stone', 'Snapping the Nano Gauntlet to reverse the Blip', 'Holding up collapsed compound wreckage to save Rhodey and Rocket'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-endgame', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-hulk-07',
    characterId: 'hulk',
    title: 'She-Hulk: Attorney at Law',
    releaseDate: '2022-08-18',
    releaseYear: 2022,
    format: 'DISNEY_PLUS_SERIES',
    role: 'SUPPORTING',
    isOnScreen: true,
    majorEvents: ['Car crash blood transfusion that created She-Hulk (Jennifer Walters)', 'Training Jennifer in Mexico laboratory retreat', 'Healing injured arm using Jennifer\'s unique genetic blood synthesis', 'Introducing his Sakaaran son Skaar to the family'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Series Release', url: 'https://www.marvel.com/tv-shows/she-hulk-attorney-at-law', verifiedDate: '2026-09-28' }
  },

  // --- BLACK PANTHER (T'CHALLA / SHURI) ---
  {
    id: 'app-bp-01',
    characterId: 'black-panther',
    title: 'Captain America: Civil War',
    releaseDate: '2016-05-06',
    releaseYear: 2016,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Death of King T\'Chaka at Vienna UN bombing', 'Vow of vengeance against Bucky Barnes', 'Bucharest tunnel chase and Leipzig airport battle', 'Discovering Helmut Zemo framed Barnes; preventing Zemo from committing suicide', 'Providing asylum to Steve Rogers and Bucky in Wakanda'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/captain-america-civil-war', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-bp-02',
    characterId: 'black-panther',
    title: 'Black Panther',
    releaseDate: '2018-02-16',
    releaseYear: 2018,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Coronation ritual at Warrior Falls', 'Busan casino extraction of Klaue', 'Defeat by Erik Killmonger and fall from the waterfall', 'Healing by the Heart-Shaped Herb; Battle for the Great Mound', 'Opening Wakanda’s borders to the global community at the United Nations'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/black-panther', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-bp-03',
    characterId: 'black-panther',
    title: 'Avengers: Infinity War',
    releaseDate: '2018-04-27',
    releaseYear: 2018,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['Granting asylum to Vision and the Avengers', 'Deploying the Wakandan Golden Tribe army ("Yibambe!")', 'Leading the front lines against the Outrider army', 'Disintegrating into dust alongside Bucky in the Blip'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-infinity-war', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-bp-04',
    characterId: 'black-panther',
    title: 'Avengers: Endgame',
    releaseDate: '2019-04-26',
    releaseYear: 2019,
    format: 'FEATURE_FILM',
    role: 'MAIN_CAST',
    isOnScreen: true,
    majorEvents: ['First hero to step through Doctor Strange\'s portal at the ruined Avengers Compound', 'Leading the Wakandan battle charge', 'Passing the Nano Gauntlet to Hawkeye and Spider-Man in the final relay'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/avengers-endgame', verifiedDate: '2026-09-28' }
  },
  {
    id: 'app-bp-05',
    characterId: 'black-panther',
    title: 'Black Panther: Wakanda Forever',
    releaseDate: '2022-11-11',
    releaseYear: 2022,
    format: 'FEATURE_FILM',
    role: 'LEAD',
    isOnScreen: true,
    majorEvents: ['Passing of King T\'Challa mourned nationwide', 'Namor and Talokan declare war on surface world', 'Princess Shuri resynthesizes the synthetic Heart-Shaped Herb', 'Shuri ascends as the new Black Panther, defeating Namor in desert showdown and yielding peace', 'Introduction of Prince T\'Challa (son of T\'Challa and Nakia) in Haiti'],
    canonicalStatus: 'RELEASED',
    sourceReference: { title: 'Marvel Studios Official Film Release', url: 'https://www.marvel.com/movies/black-panther-wakanda-forever', verifiedDate: '2026-09-28' }
  }
];

// Helper function to calculate appearance metadata accurately from verified records
export function calculateHeroAppearances(characterId: string): CharacterAppearanceSummary {
  const records = VERIFIED_APPEARANCES.filter(
    (a) => a.characterId === characterId && a.canonicalStatus === 'RELEASED'
  );

  // Sort chronologically by ISO date
  records.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());

  const onScreenRecords = records.filter((r) => r.isOnScreen);
  const first = onScreenRecords[0] || records[0];
  const latest = onScreenRecords[onScreenRecords.length - 1] || records[records.length - 1];

  // Verified Upcoming & Rumored tracking
  const upcomingMap: Record<string, CharacterAppearanceSummary['upcomingConfirmedAppearances']> = {
    'iron-man': [
      {
        title: 'Avengers: Doomsday (Robert Downey Jr. portraying Victor von Doom)',
        projectedDate: '2026-05-01',
        status: 'ANNOUNCED',
        officialSourceUrl: 'https://marvel.com/articles/movies/sdcc-2024-avengers-doomsday-secret-wars-robert-downey-jr'
      }
    ],
    'thor': [
      {
        title: 'Upcoming Avengers Feature Film (Title TBA)',
        projectedDate: '2026-2027',
        status: 'ANNOUNCED',
        officialSourceUrl: 'https://marvel.com/movies'
      }
    ],
    'black-panther': [
      {
        title: 'Avengers: Doomsday & Wakanda Television Spin-offs',
        projectedDate: '2026-05-01',
        status: 'ANNOUNCED',
        officialSourceUrl: 'https://marvel.com/movies'
      }
    ],
    'spider-man': [
      {
        title: 'Untitled Spider-Man 4 (Marvel Studios & Sony Pictures)',
        projectedDate: '2026-07-24',
        status: 'IN_PRODUCTION',
        officialSourceUrl: 'https://marvel.com/movies'
      }
    ],
    'captain-america': [
      {
        title: 'Captain America: Brave New World (Sam Wilson as Captain America)',
        projectedDate: '2025-02-14',
        status: 'POST_PRODUCTION',
        officialSourceUrl: 'https://marvel.com/movies/captain-america-brave-new-world'
      }
    ]
  };

  const rumoredMap: Record<string, CharacterAppearanceSummary['rumoredAppearances']> = {
    'iron-man': [
      {
        title: 'Avengers: Secret Wars Multiversal Variant Flashback',
        notes: 'Speculated multiverse cameo; strictly unverified and unconfirmed by Marvel Studios.',
        verificationNotice: 'UNVERIFIED — DO NOT TREAT AS CANON'
      }
    ],
    'captain-america': [
      {
        title: 'Old Man Steve Rogers Epilogue Project',
        notes: 'Speculative comic adaptation; no official production filing.',
        verificationNotice: 'UNVERIFIED — EDITORIAL INQUIRY'
      }
    ]
  };

  return {
    firstReleasedAppearance: {
      title: first ? first.title : 'First Appearance',
      releaseDate: first ? first.releaseDate : '2008-05-02',
      year: first ? first.releaseYear : 2008,
      role: first ? first.role : 'LEAD'
    },
    latestReleasedAppearance: {
      title: latest ? latest.title : 'Latest Appearance',
      releaseDate: latest ? latest.releaseDate : '2019-04-26',
      year: latest ? latest.releaseYear : 2019,
      role: latest ? latest.role : 'LEAD',
      isOnScreen: latest ? latest.isOnScreen : true
    },
    totalVerifiedCount: records.length,
    upcomingConfirmedAppearances: upcomingMap[characterId] || [],
    rumoredAppearances: rumoredMap[characterId] || []
  };
}
