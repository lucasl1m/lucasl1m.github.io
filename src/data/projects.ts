import type { ProjectId, Shot } from './types';

export interface ProjectLinks {
  site?: string;
  repo?: string;
}

export interface Project {
  id: ProjectId;
  name: string;
  links: ProjectLinks;
  stack: string[];
  shots: Shot[];
}

export interface Annotation {
  /** Posição do marcador em porcentagem da largura e da altura da imagem. */
  x: number;
  y: number;
}

export const projects: Record<ProjectId, Project> = {
  pagoParcelado: {
    id: 'pagoParcelado',
    name: 'Pago Parcelado',
    links: { site: 'https://pagoparcelado.com.br/orgaos-disponiveis' },
    stack: ['Angular', 'RxJS', 'i18n', 'Yup', 'Angular Material'],
    shots: [],
  },
  harpia: {
    id: 'harpia',
    name: 'Harpia AI',
    links: { site: 'https://harpia.ia.br/' },
    stack: ['React', 'Next.js', 'TypeScript', 'Context API', 'Tailwind CSS', 'Cypress', 'CI/CD'],
    shots: [],
  },
  devroast: {
    id: 'devroast',
    name: 'DevRoast',
    links: {
      site: 'https://devroast-drab.vercel.app/',
      repo: 'https://github.com/lucasl1m/devroast',
    },
    stack: ['React', 'Next.js', 'TypeScript', 'tRPC', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS'],
    shots: [],
  },
};

/** Marcadores sobre a captura principal do Harpia, na mesma ordem das legendas. */
export const harpiaAnnotations: Annotation[] = [];

export const devroastTour = {
  poster: '',
  animation: '',
  width: 800,
  height: 450,
};
