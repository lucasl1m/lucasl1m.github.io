import { describe, expect, it } from 'vitest';
import { enUS } from './en-US';
import { ptBR } from './pt-BR';

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, shape(child)]));
  }
  return typeof value;
}

describe('locale catalogs', () => {
  it('keeps English structurally identical to Portuguese', () => {
    expect(shape(enUS)).toEqual(shape(ptBR));
  });

  it('contains Lucas and no source identity', () => {
    const serialized = JSON.stringify({ ptBR, enUS });
    expect(serialized).toContain('Lucas');
    expect(serialized).not.toMatch(/Matheus|Nexus|Concord|Sinlabs|Deepwokendle/i);
  });
});
