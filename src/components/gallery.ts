import { images } from '../utils/imageData';
import { createDialog, createVideoIframe, convertToEmbedUrl } from './modal';

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
      <div class="gallery__item ">
        <div class="gallery__item--video-container">
          <img class="gallery__item--video-img" src="${src}" alt="${alt}" title="${alt}" />
          <button class="gallery__item--video-btn btn btn-primary btn-play" data-video-url="${videoUrl}">
            <i class="fa-solid fa-play"></i>
        </button>
        </div>
      </div>`;
  }

  return `
    <div class="gallery__item ">
      <div class="gallery__item--img-container">
        <img class="gallery__item--img-img" src="${src}" alt="${alt}" title="${alt}" />
      </div>
    </div>`;
}

function setupVideoDialog(galleryRoot: HTMLElement) {
  const dialog = createDialog();
  document.body.appendChild(dialog);

  const videoContainer = dialog.querySelector<HTMLElement>('#video-container');
  const closeBtn = dialog.querySelector<HTMLElement>('.close-dialog');
  const main = document.querySelector('main');

  // we need to store the scroll position because it gets lost
  let lastFocused: HTMLElement | null = null;
  let scrollPosition = 0;

  const openModal = (videoUrl: string) => {
    if (!videoUrl || !videoContainer) return;

    scrollPosition = window.scrollY; // Save the current scroll position
    const embedUrl = convertToEmbedUrl(videoUrl);
    videoContainer.innerHTML = createVideoIframe(embedUrl);

    lastFocused = document.activeElement as HTMLElement;
    dialog.showModal();
    document.body.classList.add('no-scroll');
    (dialog.querySelector('.close-dialog') as HTMLElement)?.focus();
    main?.setAttribute('inert', '');
  };

  // Add event listeners to buttons (in case there are more than one)
  galleryRoot.querySelectorAll<HTMLButtonElement>('.btn-play').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      const videoUrl = btn.dataset.videoUrl;
      if (videoUrl) openModal(videoUrl);
    });
  });

  // Add event listeners to video containers (in case there are more than one)
  // to open the modal not only on clicking the button, but also on clicking the whole container
  galleryRoot
    .querySelectorAll<HTMLElement>('.gallery__item--video-container')
    .forEach((container) => {
      container.addEventListener('click', () => {
        const btn = container.querySelector<HTMLButtonElement>('.btn-play');
        if (btn) {
          const videoUrl = btn.dataset.videoUrl;
          if (videoUrl) openModal(videoUrl);
        }
      });
    });

  // Close handler function
  const closeHandler = () => {
    dialog.close();
    videoContainer!.innerHTML = '';
    main?.removeAttribute('inert');
    document.body.classList.remove('no-scroll');
    window.scrollTo(0, scrollPosition); // Restore the scroll position
    lastFocused?.focus();
  };

  // Close when clicking on the overlay
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      closeHandler();
    }
  });

  // Existing close button and cancel event
  closeBtn?.addEventListener('click', closeHandler);
  dialog.addEventListener('cancel', closeHandler);
}
