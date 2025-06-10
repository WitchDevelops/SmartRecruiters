interface Image {
  id: number;
  src: string;
  alt: string;
}

export const images: Image[] = [
  {
    id: 1,
    src: new URL('../assets/images/media-1.png', import.meta.url).href,
    alt: 'Description of Image 1',
  },
  {
    id: 2,
    src: new URL('../assets/images/media-2.png', import.meta.url).href,
    alt: 'Description of Image 2',
  },
  {
    id: 3,
    src: new URL('../assets/images/media-3.png', import.meta.url).href,
    alt: 'Description of Image 3',
  },
  {
    id: 4,
    src: new URL('../assets/images/media-4.png', import.meta.url).href,
    alt: 'Description of Image 4',
  },
  {
    id: 5,
    src: new URL('../assets/images/media-5.png', import.meta.url).href,
    alt: 'Description of Image 5',
  },
];
