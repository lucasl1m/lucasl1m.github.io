import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const css = readFileSync('src/styles/tokens.css', 'utf8');
const darkStart = css.indexOf(":root[data-theme='dark']");

function tokens(block: string) {
  return Object.fromEntries([...block.matchAll(/--color-([\w-]+):\s*(#[0-9a-fA-F]{6})/g)].map(([, name, hex]) => [name, hex]));
}

const light = tokens(css.slice(0, darkStart));
const dark = { ...light, ...tokens(css.slice(darkStart)) };

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// [foreground, background, minimum ratio]: 4.5 for text, 3 for UI components and focus rings (WCAG AA)
const pairs: Array<[string, string, number]> = [
  ['ink', 'bg', 4.5],
  ['ink', 'surface', 4.5],
  ['ink', 'surface-raised', 4.5],
  ['ink-muted', 'bg', 4.5],
  ['ink-muted', 'surface', 4.5],
  ['accent', 'bg', 4.5],
  ['accent', 'surface', 4.5],
  ['accent', 'surface-raised', 4.5],
  ['on-accent', 'accent', 4.5],
  ['on-accent', 'accent-hover', 4.5],
  ['signal', 'bg', 4.5],
  ['partial', 'bg', 4.5],
  ['danger', 'bg', 4.5],
  ['focus', 'bg', 3],
  ['stage-ink', 'stage', 4.5],
  ['stage-muted', 'stage', 4.5],
  ['stage-muted', 'stage-raised', 4.5],
  ['stage-accent', 'stage', 4.5],
  ['stage-signal', 'stage', 4.5],
  ['espresso-ink', 'espresso', 4.5],
  ['espresso-muted', 'espresso', 4.5],
];

describe.each([
  ['light', light],
  ['dark', dark],
] as const)('color contrast (%s theme)', (_name, theme) => {
  it.each(pairs)('%s on %s is at least %s:1', (fg, bg, min) => {
    expect(contrast(theme[fg], theme[bg])).toBeGreaterThanOrEqual(min);
  });
});
