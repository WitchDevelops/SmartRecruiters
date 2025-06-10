// src/components/linkGroup.ts

import { linkGroupData } from '../utils/linkGroupData';

export const linkGroup = () => {
  const linkGroup = document.createElement('div');
  linkGroup.className = 'link-group';

  const title = document.createElement('h3');
  title.textContent = linkGroupData.title;
  linkGroup.appendChild(title);

  const linksContainer = document.createElement('div');

  linkGroupData.links.forEach((link) => {
    const button = document.createElement('button');

    button.className = link.icon ? 'btn-primary' : 'btn-secondary';
    button.innerHTML = `${link.text} ${link.icon || ''}`;

    button.addEventListener('click', () => {
      window.location.href = link.link;
    });

    linksContainer.appendChild(button);
  });

  linkGroup.appendChild(linksContainer);

  return linkGroup;
};
