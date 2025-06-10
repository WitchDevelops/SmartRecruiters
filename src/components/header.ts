import { headerData } from '../utils/headerData';

export const galleryHeader = () => {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
        <h2 class="header__title">${headerData.title}</h2>
        <p class="header__content">${headerData.content}</p>
    `;
  return header;
};
