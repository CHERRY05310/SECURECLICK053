
export type AppTheme = 'light' | 'dark' | 'cyber-blue' | 'neon-green';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'analyst';
  avatar?: string;
}

export interface GlossaryItem {
  id: string;
  term: string;
  definition: string;
  category: 'Technical' | 'Behavioral' | 'Legal' | 'General';
}

export interface AttackType {
  id: string;
  title: string;
  definition: string;
  howItWorks: string;
  techniques: string[];
  examples: string[];
  targets: string[];
  impactDescription: string;
  psychology: string[];
  redFlags: string[];
  prevention: string[];
  icon: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  complexity: 'Easy' | 'Moderate' | 'Advanced';
}

export interface AwarenessSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  details: {
    heading: string;
    body: string;
    points?: string[];
  }[];
  takeaways: string[];
  color: string;
}

export interface SimulationOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface SimulationModule {
  id: string;
  type: 'email' | 'vishing' | 'website';
  title: string;
  scenario: string;
  content: string; // HTML or Markdown string for the preview
  options: SimulationOption[];
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
}

export interface LawSection {
  id: string;
  category: 'IT_ACT' | 'IPC' | 'DPDP';
  actName: string;
  sections: string[];
  title: string;
  description: string;
  punishment: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  example?: string;
  videoUrl?: string;
}

export interface AnalysisResult {
  status: 'Safe' | 'Suspicious' | 'Dangerous';
  riskLevel: number; // 0-100
  reasoning: string;
  suggestedActions: string[];
  detectedIndicators: string[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'guide' | 'checklist';
  downloadUrl: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
