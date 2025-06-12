import { renderGallery } from './components/gallery';
import { galleryHeader } from './components/header';
import { linkGroup } from './components/linkGroup';
import { copyright } from './components/copyright';

const renderApp = () => {
  const main = document.querySelector<HTMLElement>('#app');

  if (main) {
    main.appendChild(galleryHeader());
    main.appendChild(linkGroup());
    main.appendChild(renderGallery());
    main.appendChild(copyright());
  } else {
    console.error('Element with ID "app" not found.');
  }

  return main;
};

export default renderApp;
