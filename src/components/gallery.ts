import images from '../utils/imageData';

const renderGallery = () => {
  const gallery = document.createElement('div');
  gallery.className = 'gallery';

  gallery.innerHTML = images
    .map(
      (image) => `
        <div class="gallery-item">
          <img src="${image.src}" alt="${image.alt}" title="${image.alt}" />
        </div>
      `
    )
    .join('');

  return gallery;
};

export default renderGallery;
