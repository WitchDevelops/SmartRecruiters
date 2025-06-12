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
  let scrollPosition = 0; // Variable to store scroll position

  // Function to open the modal
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
