import renderGallery from './components/gallery';

const renderApp = () => {
  const main = document.querySelector<HTMLElement>('#app');

  if (main) {
    main.appendChild(renderGallery());
  } else {
    console.error('Element with ID "app" not found.');
  }

  return main;
};

export default renderApp;
