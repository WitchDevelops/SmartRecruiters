interface Link {
  text: string;
  url: string;
  icon?: string;
}
interface LinkGroupData {
  title: string;
  links: Link[];
}

export const linkGroupData: LinkGroupData = {
  title: 'Links',
  links: [
    { text: 'Link one', url: '#', icon: '<i class="fa-solid fa-star"></i>' },
    { text: 'Link two', url: '#' },
  ],
};
