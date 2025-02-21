export interface OnboardingFormData {
  // Basic Information
  name: string;
  age: number;
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  livingSituation: 'alone' | 'with-family' | 'with-friends' | 'recovery-facility';

  // Health & Medical History
  medicalConditions: string[];
  takingMedications: boolean;
  hasSubstanceUseDisorder: boolean;
  substanceTypes?: ('alcohol' | 'opioids' | 'tobacco' | string)[];

  // Addiction & Recovery Journey
  recoveryDuration: string;
  hadRelapse: boolean;
  relapseTriggers: string[];

  // Support System
  hasCounselor: boolean;
  connectWithSupport: boolean;
  emergencyContact: {
    name: string;
    contact: string;
  };

  // Lifestyle & Behavior
  stressLevel: 'low' | 'moderate' | 'high';
  sleepHours: number;
  physicalActivity: 'daily' | 'few-times-week' | 'rarely';
  useWearables: boolean;

  // Recovery Goals
  primaryGoals: ('stay-sober' | 'improve-mental-health' | 'build-social-support' | string)[];
  setMilestoneReminders: boolean;

  // Privacy & Preferences
  acceptAiSuggestions: boolean;
  shareAnonymousData: boolean;
}

export type OnboardingStep =
  | 'basic-info'
  | 'health-history'
  | 'addiction-journey'
  | 'support-system'
  | 'lifestyle'
  | 'recovery-goals'
  | 'privacy';