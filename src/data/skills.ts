import type { ContextId } from './types';

export type SkillAreaId = 'frontend' | 'mobile' | 'stateData' | 'uiProduct' | 'quality' | 'delivery';
export type TechKind = 'language' | 'platform' | 'framework' | 'library' | 'database' | 'tool' | 'standard';

export interface Skill {
  id: string;
  /** Nome exibido quando não há tradução em `skills.names` nos arquivos de idioma. */
  name: string;
  core?: boolean;
  /** Onde a tecnologia aparece. Lista vazia indica experiência geral, sem projeto listado no portfólio. */
  usedIn: ContextId[];
  kind?: TechKind;
  /** Ano de lançamento, usado apenas na demonstração de adivinhação. */
  released?: number;
}

export interface SkillArea {
  id: SkillAreaId;
  skills: Skill[];
}

export const contexts: ContextId[] = [
  'lifters',
  'blockfy',
  'beeteller',
  'educbank',
  'pagoParcelado',
  'harpia',
  'devroast',
];

export const skillAreas: SkillArea[] = [
  {
    id: 'frontend',
    skills: [
      { id: 'react', name: 'React', core: true, usedIn: ['lifters', 'blockfy', 'beeteller', 'harpia', 'devroast'], kind: 'library', released: 2013 },
      { id: 'nextjs', name: 'Next.js', core: true, usedIn: ['blockfy', 'beeteller', 'harpia', 'devroast'], kind: 'framework', released: 2016 },
      { id: 'angular', name: 'Angular', core: true, usedIn: ['beeteller', 'pagoParcelado'], kind: 'framework', released: 2016 },
      { id: 'typescript', name: 'TypeScript', core: true, usedIn: ['lifters', 'blockfy', 'beeteller', 'harpia', 'devroast'], kind: 'language', released: 2012 },
      { id: 'javascript', name: 'JavaScript', usedIn: ['lifters', 'blockfy', 'beeteller', 'harpia', 'devroast'], kind: 'language', released: 1995 },
      { id: 'htmlcss', name: 'HTML5 & CSS3', usedIn: ['lifters', 'blockfy', 'beeteller', 'pagoParcelado', 'harpia', 'devroast'] },
      { id: 'angularMaterial', name: 'Angular Material', usedIn: ['beeteller', 'pagoParcelado'], kind: 'library', released: 2016 },
      { id: 'i18n', name: 'i18n', usedIn: ['blockfy', 'beeteller', 'pagoParcelado', 'harpia'] },
    ],
  },
  {
    id: 'mobile',
    skills: [
      { id: 'reactNative', name: 'React Native', core: true, usedIn: ['beeteller'], kind: 'framework', released: 2015 },
      { id: 'expo', name: 'Expo', usedIn: ['beeteller'], kind: 'platform', released: 2016 },
    ],
  },
  {
    id: 'stateData',
    skills: [
      { id: 'contextApi', name: 'Context API', usedIn: ['blockfy', 'beeteller', 'harpia'] },
      { id: 'reactQuery', name: 'React Query', usedIn: ['devroast'], kind: 'library', released: 2014 },
      { id: 'rxjs', name: 'RxJS', core: true, usedIn: ['beeteller', 'pagoParcelado'], kind: 'library', released: 2011 },
      { id: 'zustand', name: 'Zustand', usedIn: [], kind: 'library', released: 2019 },
      { id: 'reactHookForm', name: 'React Hook Form', usedIn: ['blockfy'] },
      { id: 'zod', name: 'Zod', usedIn: ['blockfy', 'devroast'], kind: 'library', released: 2020 },
      { id: 'yup', name: 'Yup', usedIn: ['beeteller', 'pagoParcelado'] },
      { id: 'postgresql', name: 'PostgreSQL', usedIn: ['devroast'], kind: 'database', released: 1996 },
      { id: 'trpc', name: 'tRPC', usedIn: ['devroast'], kind: 'library', released: 2020 },
      { id: 'drizzle', name: 'Drizzle ORM', usedIn: ['devroast'], kind: 'library', released: 2022 },
    ],
  },
  {
    id: 'uiProduct',
    skills: [
      { id: 'tailwind', name: 'Tailwind CSS', core: true, usedIn: ['blockfy', 'harpia', 'devroast'], kind: 'framework', released: 2017 },
      { id: 'styledComponents', name: 'Styled Components', usedIn: ['beeteller'], kind: 'library', released: 2016 },
      { id: 'designSystem', name: 'Design System', usedIn: ['blockfy', 'educbank'] },
      { id: 'figma', name: 'Figma', usedIn: ['educbank'], kind: 'tool', released: 2016 },
      { id: 'accessibility', name: 'Accessibility', usedIn: [] },
    ],
  },
  {
    id: 'quality',
    skills: [
      { id: 'cypress', name: 'Cypress', core: true, usedIn: ['blockfy', 'harpia'], kind: 'tool', released: 2017 },
      { id: 'jest', name: 'Jest', usedIn: ['blockfy'], kind: 'library', released: 2014 },
      { id: 'testingLibrary', name: 'Testing Library', usedIn: [], kind: 'library', released: 2018 },
      { id: 'eslint', name: 'ESLint', usedIn: ['blockfy', 'harpia', 'devroast'], kind: 'tool', released: 2013 },
      { id: 'codeReview', name: 'Code review', usedIn: ['lifters', 'blockfy', 'beeteller'] },
    ],
  },
  {
    id: 'delivery',
    skills: [
      { id: 'git', name: 'Git & GitHub', core: true, usedIn: ['lifters', 'blockfy', 'beeteller', 'harpia', 'devroast'], kind: 'tool', released: 2005 },
      { id: 'githubActions', name: 'GitHub Actions', usedIn: ['blockfy', 'harpia', 'devroast'], kind: 'platform', released: 2019 },
      { id: 'cicd', name: 'CI/CD', usedIn: ['blockfy', 'beeteller', 'harpia', 'devroast'] },
      { id: 'gitFlow', name: 'Git Flow', usedIn: ['blockfy', 'beeteller'] },
      { id: 'rest', name: 'REST APIs', usedIn: ['lifters', 'blockfy', 'beeteller', 'harpia'] },
    ],
  },
];

export interface GuessableSkill extends Skill {
  kind: TechKind;
  released: number;
  area: SkillAreaId;
}

/** Tecnologias com dados suficientes para a demonstração de adivinhação. */
export const guessableSkills: GuessableSkill[] = skillAreas.flatMap((area) =>
  area.skills.flatMap((skill) =>
    skill.kind && skill.released ? [{ ...skill, kind: skill.kind, released: skill.released, area: area.id }] : [],
  ),
);

/** Relaciona o nome exibido nas stacks dos projetos ao id da tecnologia. */
export const skillIdByName: Record<string, string> = Object.fromEntries(
  skillAreas.flatMap((area) => area.skills.map((skill) => [skill.name, skill.id])),
);
