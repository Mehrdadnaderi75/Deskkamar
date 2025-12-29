
export interface EducationalContent {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'anatomy' | 'prevention' | 'treatment' | 'exercises';
  fullText: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Exercise {
  id: string;
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  duration: string;
  imageUrl: string;
}
