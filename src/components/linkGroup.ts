import { linkGroupData } from '../utils/linkGroupData';

export const linkGroup = () => {
  const linkGroup = document.createElement('section');
  linkGroup.className = 'link-group';

  linkGroup.innerHTML = `
    <h3 class="link-group__title">${linkGroupData.title}</h3>
    <div class="link-group__links">
      ${linkGroupData.links
        .map(
          (link) => `
        <a class="btn btn-${link.buttonType}" href="${link.url}" target="${link.target}">
          ${link.text} ${link.icon ? link.icon : ''} 
        </a>`
        )
        .join('')}
    </div>
  `;

  return linkGroup;
};
