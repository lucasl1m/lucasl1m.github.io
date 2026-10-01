import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { renderPortfolio } from '../../test/renderPortfolio';

describe('project case studies', () => {
  it('renders the approved cases in order with their public links', () => {
    renderPortfolio();

    const projectsSection = document.querySelector('#projects');
    expect(projectsSection).not.toBeNull();
    const headings = within(projectsSection as HTMLElement).getAllByRole('heading', { level: 3 }).map(({ textContent }) => textContent);
    expect(headings).toEqual(['Pago Parcelado', 'Harpia AI', 'DevRoast']);
    expect(screen.getByRole('link', { name: /visitar o site\s*Pago Parcelado/i })).toHaveAttribute('href', 'https://pagoparcelado.com.br/orgaos-disponiveis');
    expect(screen.getByRole('link', { name: /visitar o site\s*Harpia AI/i })).toHaveAttribute('href', 'https://harpia.ia.br/');
    expect(screen.getByRole('link', { name: /código no GitHub\s*DevRoast/i })).toHaveAttribute('href', 'https://github.com/lucasl1m/devroast');
  });

  it('shows sequential Pix and card authentication journeys', async () => {
    const user = userEvent.setup();
    renderPortfolio();

    const caseStudy = document.querySelector('#project-pagoParcelado');
    expect(caseStudy).not.toBeNull();
    const project = within(caseStudy as HTMLElement);

    const pixJourney = within(project.getByRole('list', { name: 'Etapas do pagamento Pix' }));
    for (const step of ['Escolha Pix', 'Gerar cobrança', 'QR Code ou copia e cola', 'Banco processa', 'Pagamento confirmado']) {
      expect(pixJourney.getByText(step)).toBeInTheDocument();
    }
    expect(project.queryByRole('button', { name: 'Adicionar uma etapa' })).not.toBeInTheDocument();

    await user.click(project.getByRole('radio', { name: 'Cartão + 3DS' }));

    const cardJourney = within(project.getByRole('list', { name: 'Etapas do pagamento com cartão e 3DS' }));
    for (const step of ['Dados do cartão', 'Checagem 3DS', 'Desafio do emissor', 'Autorização', 'Pagamento confirmado']) {
      expect(cardJourney.getByText(step)).toBeInTheDocument();
    }
  });
});
