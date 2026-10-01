import type { YearMonth } from './types';

export type ExperienceId = 'lifters' | 'blockfy' | 'beeteller' | 'educbank';
export type RoleId = 'frontendDeveloper' | 'productDesigner';
export type CareerStepId = 'productDesigner' | 'frontendDeveloper' | 'frontendMobileDeveloper';

export interface Role {
  id: RoleId;
  start: YearMonth;
  end?: YearMonth;
}

export interface Experience {
  id: ExperienceId;
  company: string;
  lane: 'main' | 'parallel';
  /** Cargos do mais recente para o mais antigo. */
  roles: Role[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    id: 'lifters',
    company: 'Lifters Tecnologia',
    lane: 'main',
    roles: [{ id: 'frontendDeveloper', start: '2026-09' }],
    stack: ['React', 'TypeScript'],
  },
  {
    id: 'blockfy',
    company: 'Blockfy',
    lane: 'main',
    roles: [{ id: 'frontendDeveloper', start: '2025-08', end: '2026-08' }],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Cypress', 'Jest'],
  },
  {
    id: 'beeteller',
    company: 'Beeteller',
    lane: 'main',
    roles: [{ id: 'frontendDeveloper', start: '2023-04', end: '2025-08' }],
    stack: ['Angular', 'React', 'React Native', 'Next.js', 'TypeScript', 'RxJS'],
  },
  {
    id: 'educbank',
    company: 'Educbank',
    lane: 'parallel',
    roles: [{ id: 'productDesigner', start: '2022-09', end: '2023-01' }],
    stack: ['Figma', 'Design System'],
  },
];

export interface LadderStep {
  id: CareerStepId;
  start: YearMonth;
}

/** Degraus da progressão de cargo, do primeiro ao atual. */
export const careerLadder: LadderStep[] = [
  { id: 'productDesigner', start: '2022-09' },
  { id: 'frontendDeveloper', start: '2023-04' },
  { id: 'frontendMobileDeveloper', start: '2026-09' },
];
