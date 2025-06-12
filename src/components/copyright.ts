export const copyright = () => {
  const copyright = document.createElement('footer');
  copyright.className = 'copyright';
  copyright.innerHTML = `
    <p class="text--small"><strong>Media copyright</strong> - Lorem ipsum dolor sit amet.</p>`;
  return copyright;
};
