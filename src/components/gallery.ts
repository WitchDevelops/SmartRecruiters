import { images } from '../utils/imageData';

export const renderGallery = () => {
  const gallery = document.createElement('div');
  gallery.className = 'gallery';

  gallery.innerHTML = images
    .map((image) => {
      if (image.type === 'video') {
        return `
          <div class="gallery__item--video-container">
            <img src="${image.src}" alt="${image.alt}" title="${image.alt}" />
            <button class="btn btn-primary btn-play" data-video-url="${image.videoUrl}"><i class="fa-solid fa-play"></i></button>
          </div>`;
      }

      return `
        <div class="gallery__item">
          <img src="${image.src}" alt="${image.alt}" title="${image.alt}" />
        </div>
      `;
    })
    .join('');
  setupVideoDialog(gallery);
  return gallery;
};

function setupVideoDialog(galleryRoot: HTMLElement) {
  const dialog = document.createElement('dialog');
  dialog.id = 'video-dialog';
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('role', 'dialog');
  dialog.innerHTML = `
    <div class="dialog-content">
      <div id="video-container"></div>
      <button type="button" class="close-dialog" aria-label="Close video">✕</button>
  </div>`;
  document.body.appendChild(dialog);

  const openBtns = galleryRoot.querySelectorAll('.btn-play');
  let lastFocused: Element | null = null;

  openBtns.forEach((btn) =>
    (btn as HTMLElement).addEventListener('click', () => {
      const videoUrl = (btn as HTMLElement).dataset.videoUrl!;
      const embedUrl = convertToEmbedUrl(videoUrl);
      const container = dialog.querySelector('#video-container')!;
      container.innerHTML = `<iframe src="${embedUrl}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="YouTube video"></iframe>`;
      lastFocused = document.activeElement;
      dialog.showModal();
      document.querySelector('main')?.setAttribute('inert', '');
    })
  );

  const convertToEmbedUrl = (url: string): string => {
    const pattern = new RegExp('(?:youtube\\.com\\/watch\\?v=|youtu\\.be\\/)([\\w-]+)', '');
    const match = url.match(pattern);
    return match ? `https://www.youtube.com/embed/${match[1]}` : '';
  };

  const closeHandler = () => {
    dialog.close();
    const container = dialog.querySelector('#video-container');
    if (container) container.innerHTML = '';
    document.querySelector('main')?.removeAttribute('inert');
    (lastFocused as HTMLElement)?.focus();
  };

  dialog.querySelector('.close-dialog')?.addEventListener('click', closeHandler);
  dialog.addEventListener('cancel', closeHandler);
}
