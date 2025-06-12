import { describe, it, expect } from 'vitest';
import { copyright } from '../../src/components/copyright';

describe('copyright component', () => {
  it('creates a footer element with correct class and content', () => {
    const element = copyright();

    expect(element.tagName).toBe('FOOTER');
    expect(element.className).toBe('copyright');
    expect(element.innerHTML).toContain('<p class="text--small"><strong>Media copyright</strong>');
  });
});
