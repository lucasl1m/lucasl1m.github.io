import { describe, expect, it } from 'vitest';
import { contacts, profile } from './contacts';
import { experience } from './experience';
import { projects } from './projects';
import { contexts, skillAreas } from './skills';

describe('Lucas portfolio data', () => {
  it('uses Lucas identity and verified public contacts', () => {
    expect(profile).toMatchObject({ name: 'Lucas Araújo de Lima', monogram: 'LA' });
    expect(contacts.email).toBe('lucasarlim@gmail.com');
    expect(contacts.github.href).toBe('https://github.com/lucasl1m');
    expect(contacts.linkedin.href).toBe('https://www.linkedin.com/in/lucasl1m/');
  });

  it('orders the verified career from newest to oldest', () => {
    expect(experience.map(({ id }) => id)).toEqual(['lifters', 'blockfy', 'beeteller', 'educbank']);
    expect(experience[0].roles[0].start).toBe('2026-09');
  });

  it('exports the three approved case studies', () => {
    expect(Object.keys(projects)).toEqual(['pagoParcelado', 'harpia', 'devroast']);
  });

  it('keeps every skill context referentially valid', () => {
    const valid = new Set(contexts);
    const used = skillAreas.flatMap(({ skills }) => skills.flatMap(({ usedIn }) => usedIn));

    expect(used.every((id) => valid.has(id))).toBe(true);
  });
});
