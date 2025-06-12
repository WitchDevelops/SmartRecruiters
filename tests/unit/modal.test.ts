import { describe, it, expect, beforeEach } from 'vitest';
import { createDialog, createVideoIframe, convertToEmbedUrl } from '../../src/components/modal';

describe('modal utilities', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a <dialog> element with required structure', () => {
    const dialog = createDialog();
    expect(dialog).toBeInstanceOf(HTMLDialogElement);
    expect(dialog.id).toBe('video-dialog');
    expect(dialog.querySelector('#video-container')).toBeTruthy();
    expect(dialog.querySelector('.close-dialog')).toBeTruthy();
  });

  it('should generate valid YouTube embed URL from standard link', () => {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const embed = convertToEmbedUrl(url);
    expect(embed).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ');
  });

  it('should generate valid YouTube embed URL from shortened link', () => {
    const url = 'https://youtu.be/dQw4w9WgXcQ';
    const embed = convertToEmbedUrl(url);
    expect(embed).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ');
  });

  it('should return iframe HTML string with embed URL', () => {
    const iframe = createVideoIframe('https://www.youtube.com/embed/test');
    expect(iframe).toContain('iframe');
    expect(iframe).toContain('src="https://www.youtube.com/embed/test?autoplay=1"');
  });
});
