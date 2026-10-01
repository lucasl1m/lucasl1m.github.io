export type EducationId =
  | 'ufcg'
  | 'rocketseatState'
  | 'rocketseatAccessibility'
  | 'rocketseatReact'
  | 'nlwOperator'
  | 'datadogRum'
  | 'scrumFundamentals';
export type EducationKind = 'degree' | 'technical' | 'course' | 'training';

export interface Education {
  id: EducationId;
  institution: string;
  kind: EducationKind;
  group: 'academic' | 'complementary';
  start: number;
  end?: number;
  expected?: boolean;
}

export const education: Education[] = [
  { id: 'ufcg', institution: 'Universidade Federal de Campina Grande', kind: 'degree', group: 'academic', start: 2019, end: 2024 },
  { id: 'rocketseatState', institution: 'Rocketseat', kind: 'course', group: 'complementary', start: 2026 },
  { id: 'rocketseatAccessibility', institution: 'Rocketseat', kind: 'course', group: 'complementary', start: 2026 },
  { id: 'rocketseatReact', institution: 'Rocketseat', kind: 'course', group: 'complementary', start: 2026 },
  { id: 'nlwOperator', institution: 'Rocketseat', kind: 'training', group: 'complementary', start: 2026 },
  { id: 'datadogRum', institution: 'Datadog', kind: 'course', group: 'complementary', start: 2025 },
  { id: 'scrumFundamentals', institution: 'SCRUMstudy', kind: 'course', group: 'complementary', start: 2021 },
];

export type LanguageId = 'pt' | 'en';

export const languages: LanguageId[] = ['pt', 'en'];
