export interface TriviaQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correct_index: number;
  explanation: string;
  category: 'CHARACTERS' | 'MOVIES' | 'INFINITY_STONES' | 'BATTLES' | 'LORE';
  character_id?: string;
  movie_id?: string;
  difficulty: 'EASY' | 'MEDIUM' | 'EXPERT';
}

export interface QuizAttempt {
  id: string;
  user_display_name: string;
  total_questions: number;
  score: number;
  mode: string;
  timestamp: string;
}

export interface MemoryCard {
  id: string;
  character_id: string;
  name: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}
