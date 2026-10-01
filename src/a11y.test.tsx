import axe from 'axe-core';
import { describe, expect, it } from 'vitest';
import { renderPortfolio } from './test/renderPortfolio';

// jsdom has no layout engine, so color-contrast is covered by styles/contrast.test.ts instead.
async function violations() {
  const { violations } = await axe.run(document.body, { rules: { 'color-contrast': { enabled: false } } });
  return violations.map(({ id, nodes }) => `${id}: ${nodes.map(({ target }) => target.join(' ')).join(', ')}`);
}

describe('accessibility (axe-core)', () => {
  it.each(['pt-BR', 'en-US'] as const)('has no axe violations in %s', async (locale) => {
    renderPortfolio(locale);
    expect(await violations()).toEqual([]);
  });
});
