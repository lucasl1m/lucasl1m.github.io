import { screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderPortfolio } from '../test/renderPortfolio';

describe('Lucas identity sections', () => {
  it('renders the verified career, education, and contact without the source identity', () => {
    renderPortfolio();

    expect(screen.getAllByText('Lucas Araújo de Lima').length).toBeGreaterThan(0);
    expect(screen.getByText(/Desenvolvedor Frontend\/Mobile · Produto e engenharia/i)).toBeInTheDocument();

    const timeline = document.querySelector('#experience');
    expect(timeline).not.toBeNull();
    const companies = within(timeline as HTMLElement).getAllByRole('heading', { level: 3 }).map(({ textContent }) => textContent);
    expect(companies).toEqual(['Lifters Tecnologia', 'Blockfy', 'Beeteller', 'Educbank']);

    const education = document.querySelector('#education');
    expect(education).toHaveTextContent('Universidade Federal de Campina Grande');
    expect(education).toHaveTextContent('2024');
    expect(screen.getByRole('link', { name: 'lucasarlim@gmail.com' })).toHaveAttribute('href', 'mailto:lucasarlim@gmail.com');
    expect(document.body.textContent).not.toMatch(/Matheus/i);
    expect([...document.images].map(({ alt }) => alt).join(' ')).not.toMatch(/Matheus/i);
  });

  it.each([
    ['pt-BR', /jogos?|iGaming|Godot/i],
    ['en-US', /games?|gaming|Godot/i],
  ] as const)('does not present game development in the %s public narrative', (locale, forbiddenTerms) => {
    renderPortfolio(locale);

    expect(document.body).not.toHaveTextContent(forbiddenTerms);
  });
});
