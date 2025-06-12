import { describe, it, expect } from 'vitest';
import { galleryHeader } from '../../src/components/header';

describe('header component', () => {
  it('creates a header element with correct class and content', () => {
    const element = galleryHeader();

    expect(element.tagName).toBe('HEADER');
    expect(element.className).toBe('header');
    expect(element.innerHTML).toContain(
      '<p class="header__content">Lorem <em>ipsum</em> dolor sit amet, <strong>consectetur</strong> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <a href="#" target="_blank">minim</a> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
    );
  });
});
