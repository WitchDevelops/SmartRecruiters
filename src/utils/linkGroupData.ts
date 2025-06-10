interface Link {
  text: string;
  link: string;
  icon?: string;
}
interface LinkGroupData {
  title: string;
  links: Link[];
}

export const linkGroupData: LinkGroupData = {
  title: 'Links',
  links: [
    { text: 'Link one', link: '#', icon: '<i class="fa-solid fa-star"></i>' },
    { text: 'Link two', link: '#' },
  ],
};
