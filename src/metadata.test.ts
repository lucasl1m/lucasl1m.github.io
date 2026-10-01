import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '..');

describe('production metadata and documents', () => {
  it('uses Lucas identity and canonical URL in the static shell', () => {
    const html = readFileSync(resolve(root, 'index.html'), 'utf8');
    expect(html).toContain('<title>Lucas Araújo de Lima · Desenvolvedor Frontend/Mobile</title>');
    expect(html).toContain('https://lucasl1m.github.io/');
    expect(html).toContain('lucasarlim@gmail.com');
    expect(html).not.toMatch(/Matheus|matheuskrs/i);
  });

  it.each([
    'public/cv/Lucas_Lima.pdf',
    'public/cv/Lucas_Lima_EN.pdf',
    'src/assets/cv/cv-pt-BR.webp',
    'src/assets/cv/cv-en-US.webp',
  ])('ships a non-empty %s', (relativePath) => {
    const path = resolve(root, relativePath);
    expect(existsSync(path)).toBe(true);
    expect(statSync(path).size).toBeGreaterThan(0);
  });
});
