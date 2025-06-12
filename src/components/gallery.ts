import { images } from '../utils/imageData';

export const renderGallery = () => {
  const gallery = document.createElement('div');
  gallery.className = 'gallery';

  gallery.innerHTML = images.map(renderGalleryItem).join('');
  setupVideoDialog(gallery);
  return gallery;
};

function renderGalleryItem(image: (typeof images)[number]): string {
  const { src, alt, type, videoUrl } = image;

  if (type === 'video') {
    return `
      <div class="gallery__item gallery__item--video-container">
        <img src="${src}" alt="${alt}" title="${alt}" />
        <button class="btn btn-primary btn-play" data-video-url="${videoUrl}">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>`;
  }

  return `
    <div class="gallery__item gallery__item--img-container">
      <img src="${src}" alt="${alt}" title="${alt}" />
    </div>`;
}

function setupVideoDialog(galleryRoot: HTMLElement) {
  const dialog = createDialog();
  document.body.appendChild(dialog);

  const videoContainer = dialog.querySelector<HTMLElement>('#video-container');
  const closeBtn = dialog.querySelector<HTMLElement>('.close-dialog');
  const main = document.querySelector('main');

  let lastFocused: HTMLElement | null = null;

  galleryRoot.querySelectorAll<HTMLButtonElement>('.btn-play').forEach((btn) =>
    btn.addEventListener('click', () => {
      const videoUrl = btn.dataset.videoUrl;
      if (!videoUrl || !videoContainer) return;

      const embedUrl = convertToEmbedUrl(videoUrl);
      videoContainer.innerHTML = createVideoIframe(embedUrl);

      lastFocused = document.activeElement as HTMLElement;
      dialog.showModal();
      (dialog.querySelector('.close-dialog') as HTMLElement)?.focus();
      main?.setAttribute('inert', '');
    })
  );

  const closeHandler = () => {
    dialog.close();
    videoContainer!.innerHTML = '';
    main?.removeAttribute('inert');
    lastFocused?.focus();
  };

  closeBtn?.addEventListener('click', closeHandler);
  dialog.addEventListener('cancel', closeHandler);
}

function createDialog(): HTMLDialogElement {
  const dialog = document.createElement('dialog');
  dialog.id = 'video-dialog';
  dialog.className = 'dialog';
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('role', 'dialog');
  dialog.innerHTML = `
    <div class="dialog-content">
      <div class="dialog-content__header">
        <h2 class="dialog-content__title">Modal heading</h2>
        <button type="button" class="dialog-content__button close-dialog btn btn-danger btn-close" aria-label="Close video">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      
      <p class="dialog-content__text">Lorem <em>ipsum</em> dolor sit amet, <strong>consectetur</strong> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <a href="#" target="_blank">minim</a> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div id="video-container" class="dialog-content__video--container"></div>
    </div>`;
  return dialog;
}

function createVideoIframe(embedUrl: string): string {
  return `
    <iframe
      src="${embedUrl}?autoplay=1"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      title="YouTube video"
      class="dialog-content__video--video">
    </iframe>`;
}

function convertToEmbedUrl(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : '';
}
