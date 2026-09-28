import { TriviaQuestion } from '@/types/trivia';

export const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 't-1',
    question: 'In which film did Natasha Romanoff (Black Widow) make her first Marvel Cinematic Universe appearance?',
    options: ['The Avengers (2012)', 'Iron Man 2 (2010)', 'Captain America: The Winter Soldier (2014)', 'Iron Man (2008)'],
    correct_index: 1,
    explanation: 'Natasha debuted undercover as legal assistant "Natalie Rushman" evaluating Tony Stark for Nick Fury in Iron Man 2 (2010).',
    category: 'CHARACTERS',
    character_id: 'black-widow',
    movie_id: 'iron-man-2008',
    difficulty: 'EASY'
  },
  {
    id: 't-2',
    question: 'Which character wielded Thor\'s mystical hammer Mjolnir during the climax of Avengers: Endgame?',
    options: ['Tony Stark', 'Steve Rogers (Captain America)', 'Bruce Banner', 'Sam Wilson'],
    correct_index: 1,
    explanation: 'Steve Rogers proved worthy, summoning Mjolnir and calling down lightning against Thanos in a legendary MCU sequence.',
    category: 'CHARACTERS',
    character_id: 'captain-america',
    movie_id: 'avengers-endgame',
    difficulty: 'EASY'
  },
  {
    id: 't-3',
    question: 'What Infinity Stone was originally contained inside Loki\'s Scepter and later powered the Vision?',
    options: ['The Space Stone', 'The Reality Stone', 'The Mind Stone', 'The Power Stone'],
    correct_index: 2,
    explanation: 'The yellow Mind Stone was hidden inside the blue casing of Loki\'s scepter and later mounted onto the Vision\'s forehead in Age of Ultron.',
    category: 'INFINITY_STONES',
    character_id: 'vision',
    difficulty: 'EASY'
  },
  {
    id: 't-4',
    question: 'What is the real name of the city that Ultron turned into a global extinction meteor in 2015?',
    options: ['Novi Grad', 'Madripoor', 'Puente Antiguo', 'Sokovia City'],
    correct_index: 0,
    explanation: 'Ultron used vibranium thrusters to elevate Novi Grad, the capital city of Sokovia, into the atmosphere.',
    category: 'BATTLES',
    movie_id: 'avengers-age-of-ultron',
    difficulty: 'MEDIUM'
  },
  {
    id: 't-5',
    question: 'What phrase does Tony Stark say in response to Thanos saying "I am inevitable" in Avengers: Endgame?',
    options: ['"Avengers assemble."', '"We have a Hulk."', '"And I... am... Iron Man."', '"Not on my watch."'],
    correct_index: 2,
    explanation: 'Tony Stark slipped the stones onto his Mark LXXXV nanotech gauntlet and answered with his iconic 2008 line: "And I... am... Iron Man."',
    category: 'LORE',
    character_id: 'iron-man',
    movie_id: 'avengers-endgame',
    difficulty: 'EASY'
  },
  {
    id: 't-6',
    question: 'Who did Natasha Romanoff and Clint Barton travel to Vormir to obtain?',
    options: ['The Time Stone', 'The Soul Stone', 'The Power Stone', 'The Reality Stone'],
    correct_index: 1,
    explanation: 'The Soul Stone required the ultimate price: a soul for a soul. Natasha sacrificed herself so Clint could return with the stone.',
    category: 'INFINITY_STONES',
    character_id: 'black-widow',
    difficulty: 'MEDIUM'
  },
  {
    id: 't-7',
    question: 'What element did Tony Stark synthesize in Iron Man 2 to replace palladium in his Arc Reactor?',
    options: ['Vibranium', 'Badassium (Synthesized New Element)', 'Uru', 'Adamantium'],
    correct_index: 1,
    explanation: 'Based on his father Howard Stark\'s 1974 Stark Expo architectural blueprints, Tony synthesized a new element using a prism particle accelerator.',
    category: 'LORE',
    character_id: 'iron-man',
    difficulty: 'HARD' as unknown as 'EXPERT'
  },
  {
    id: 't-8',
    question: 'In Captain America: The Winter Soldier, which covert algorithm did Hydra plan to deploy via Project Insight helicarriers?',
    options: ['Cerebro Algorithm', 'Zola\'s Algorithm', 'Stark Defense Grid', 'Ultron Protocol'],
    correct_index: 1,
    explanation: 'Arnim Zola developed an algorithm evaluating people\'s past choices to predict future threats to Hydra, targeting 20 million people.',
    category: 'LORE',
    character_id: 'captain-america',
    difficulty: 'MEDIUM'
  },
  {
    id: 't-9',
    question: 'Doctor Strange scried across time on Titan. Exactly how many possible outcomes did he view?',
    options: ['10,000,000', '14,000,605', '14,000,000', '616,000'],
    correct_index: 1,
    explanation: 'Doctor Strange used the Time Stone to witness 14,000,605 futures, noting they only won in one singular timeline.',
    category: 'MOVIES',
    character_id: 'doctor-strange',
    difficulty: 'MEDIUM'
  },
  {
    id: 't-10',
    question: 'What is the name of Peter Parker\'s artificial intelligence voice in his first Stark-designed Spider-Man suit?',
    options: ['J.A.R.V.I.S.', 'F.R.I.D.A.Y.', 'KAREN', 'EDITH'],
    correct_index: 2,
    explanation: 'Peter named the "Suit Lady" voice KAREN (voiced by Jennifer Connelly) in Spider-Man: Homecoming.',
    category: 'CHARACTERS',
    character_id: 'spider-man',
    difficulty: 'MEDIUM'
  },
  {
    id: 't-11',
    question: 'What is the ancestral herb that grants the Black Panther superhuman physical abilities?',
    options: ['Bast Lotus', 'Heart-Shaped Herb', 'Vibranium Orchid', 'Wakandan Root'],
    correct_index: 1,
    explanation: 'The Heart-Shaped Herb, grown in the soil of the Great Mound enriched by vibranium meteorite deposits, bestows the Panther\'s power.',
    category: 'LORE',
    character_id: 'black-panther',
    difficulty: 'EASY'
  },
  {
    id: 't-12',
    question: 'Which realm was Thor\'s battle axe Stormbreaker forged in?',
    options: ['Asgard', 'Jotunheim', 'Nidavellir', 'Svartalfheim'],
    correct_index: 2,
    explanation: 'Thor, Rocket, and Groot traveled to Nidavellir where King Eitri reignited the dying star forge to craft Stormbreaker.',
    category: 'LORE',
    character_id: 'thor',
    difficulty: 'MEDIUM'
  }
];
