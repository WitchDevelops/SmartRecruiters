import { describe, it, expect, beforeEach } from 'vitest';
import { renderGallery } from '../../src/components/gallery';

describe('renderGallery', () => {
  beforeEach(() => {
    document.body.innerHTML = '<main></main>';
  });

  it('should render a gallery container', () => {
    const gallery = renderGallery();
    expect(gallery).toBeInstanceOf(HTMLElement);
    expect(gallery.classList.contains('gallery')).toBe(true);
  });

  it('should render multiple gallery items', () => {
    const gallery = renderGallery();
    const items = gallery.querySelectorAll('.gallery__item');
    expect(items.length).toBeGreaterThan(0);
  });

  it('should render video buttons with data-video-url attribute', () => {
    const gallery = renderGallery();
    const buttons = gallery.querySelectorAll<HTMLButtonElement>('.btn-play');
    expect(buttons.length).toBeGreaterThan(0);
    buttons.forEach((btn) => {
      expect(btn.dataset.videoUrl).toBeTruthy();
    });
  });
});
