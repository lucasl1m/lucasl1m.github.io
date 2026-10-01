import cvPreviewPt from '../assets/cv/cv-pt-BR.webp';
import cvPreviewEn from '../assets/cv/cv-en-US.webp';
import type { Locale } from './types';

export const profile = {
  name: 'Lucas Araújo de Lima',
  fullName: 'Lucas Araújo de Lima',
  monogram: 'LA',
};

export const contacts = {
  email: 'lucasarlim@gmail.com',
  phone: {
    display: '+55 83 98719-6021',
    href: 'tel:+5583987196021',
  },
  github: {
    href: 'https://github.com/lucasl1m',
    display: 'github.com/lucasl1m',
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/lucasl1m/',
    display: 'linkedin.com/in/lucasl1m',
  },
  sourceCode: 'https://github.com/lucasl1m/lucasl1m.github.io',
};

interface Resume {
  href: string;
  fileName: string;
  preview: string;
  previewWidth: number;
  previewHeight: number;
}

const resumeFile = (fileName: string) => `${import.meta.env.BASE_URL}cv/${fileName}`;

export const resumes: Record<Locale, Resume> = {
  'pt-BR': {
    href: resumeFile('Lucas_Lima.pdf'),
    fileName: 'Lucas_Lima.pdf',
    preview: cvPreviewPt,
    previewWidth: 1445,
    previewHeight: 1871,
  },
  'en-US': {
    href: resumeFile('Lucas_Lima_EN.pdf'),
    fileName: 'Lucas_Lima_EN.pdf',
    preview: cvPreviewEn,
    previewWidth: 1445,
    previewHeight: 1871,
  },
};
