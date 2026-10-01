import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('buddy line rotation', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('storage unavailable'); });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('storage unavailable'); });
  });

  it('shows the intro once when storage is unavailable', async () => {
    const { takeIntro } = await import('./buddyLines');
    expect(takeIntro()).toBe(true);
    expect(takeIntro()).toBe(false);
  });

  it('does not repeat a line before exhausting the set', async () => {
    const { pickLine } = await import('./buddyLines');
    const keys = ['a', 'b', 'c'];
    const picked = [pickLine(keys), pickLine(keys), pickLine(keys)];
    expect(new Set(picked)).toEqual(new Set(keys));
  });

  it('names persisted state after Lucas', async () => {
    vi.restoreAllMocks();
    const getItem = vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    const { takeIntro } = await import('./buddyLines');
    takeIntro();
    expect(getItem).toHaveBeenCalledWith('lucas-buddy-intro-seen');
  });
});
