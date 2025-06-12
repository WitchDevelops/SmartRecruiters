import { describe, it, expect, vi } from 'vitest';
import * as linkData from '../../src/utils/linkGroupData';
import { linkGroup } from '../../src/components/linkGroup';

describe('linkGroup component', () => {
  it('renders a link group with title and links', () => {
    vi.spyOn(linkData, 'linkGroupData', 'get').mockReturnValue({
      title: 'Resources',
      links: [
        {
          text: 'Docs',
          url: 'https://example.com/docs',
          target: '_blank',
          buttonType: 'primary',
          icon: '<svg>icon</svg>',
        },
        {
          text: 'GitHub',
          url: 'https://github.com/example',
          target: '_self',
          buttonType: 'secondary',
          icon: '',
        },
      ],
    });

    const group = linkGroup();

    expect(group.className).toBe('link-group');

    const title = group.querySelector('h3');
    expect(title?.textContent).toBe('Resources');
    expect(title?.className).toBe('link-group__title');

    const links = group.querySelectorAll('a');
    expect(links.length).toBe(2);

    expect(links[0].textContent?.trim()).toContain('Docs');
    expect(links[0].className).toContain('btn-primary');
    expect(links[0].getAttribute('href')).toBe('https://example.com/docs');
    expect(links[0].getAttribute('target')).toBe('_blank');

    expect(links[1].textContent?.trim()).toContain('GitHub');
    expect(links[1].className).toContain('btn-secondary');
    expect(links[1].getAttribute('href')).toBe('https://github.com/example');
    expect(links[1].getAttribute('target')).toBe('_self');
  });
});
