import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderPortfolio } from './test/renderPortfolio';

describe('portfolio shell', () => {
  it('renders the main landmark, navigation, and contact section', () => {
    renderPortfolio();

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /navegação principal/i })).toBeInTheDocument();
    expect(document.querySelector('#contact')).toBeInTheDocument();
  });

  it.each([
    ['pt-BR', 'Três projetos, três tipos de impacto.'],
    ['en-US', 'Three projects, three kinds of impact.'],
  ] as const)('renders Lucas and every case study in %s', (locale, projectsHeading) => {
    renderPortfolio(locale);

    expect(screen.getAllByText('Lucas Araújo de Lima').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: projectsHeading })).toBeInTheDocument();
    for (const project of ['Pago Parcelado', 'Harpia AI', 'DevRoast']) {
      expect(screen.getAllByText(project).length).toBeGreaterThan(0);
    }
  });
});
