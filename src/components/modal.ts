import { modalData } from '../utils/modalData';
export function createDialog(): HTMLDialogElement {
  const dialog = document.createElement('dialog');
  dialog.id = 'video-dialog';
  dialog.className = 'dialog';
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('role', 'dialog');
  dialog.innerHTML = `
    <div class="dialog-content">
      <div class="dialog-content__header">
        ${modalData.title ? `<h2 class="dialog-content__title">${modalData.title}</h2>` : ''}
        <button type="button" class="dialog-content__button close-dialog btn btn-danger btn-close" aria-label="Close video">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      ${modalData.text ? `<p class="dialog-content__text">Lorem <em>ipsum</em> dolor sit amet, <strong>consectetur</strong> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <a href="#" target="_blank">minim</a> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>` : ''}
      <div id="video-container" class="dialog-content__video--container"></div>
    </div>`;
  return dialog;
}

export function createVideoIframe(embedUrl: string): string {
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

export function convertToEmbedUrl(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : '';
}
