interface Link {
  text: string;
  url: string;
  target: '_blank' | '_self' | '_parent' | '_top';
  buttonType: 'primary' | 'secondary';
  icon?: string;
}
interface LinkGroupData {
  title: string;
  links: Link[];
}

export const linkGroupData: LinkGroupData = {
  title: 'Links',
  links: [
    {
      text: 'Link one',
      url: '#',
      target: '_blank',
      buttonType: 'primary',
      icon: '<i class="fa-solid fa-star"></i>',
    },
    {
      text: 'Link two',
      url: '#',
      target: '_blank',
      buttonType: 'secondary',
    },
  ],
};
