interface Image {
  id: number;
  src: string;
  alt: string;
  type: 'video' | 'image';
  videoUrl?: string;
}

export const images: Image[] = [
  {
    id: 1,
    src: new URL('../assets/images/media-1.png', import.meta.url).href,
    alt: 'Description of Image 1',
    type: 'image',
  },
  {
    id: 2,
    src: new URL('../assets/images/media-2.png', import.meta.url).href,
    alt: 'Description of Image 2',
    type: 'image',
  },
  {
    id: 3,
    src: new URL('../assets/images/media-3.png', import.meta.url).href,
    alt: 'Description of Image 3',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=x6iyz1AQhuU',
  },
  {
    id: 4,
    src: new URL('../assets/images/media-4.png', import.meta.url).href,
    alt: 'Description of Image 4',
    type: 'image',
  },
  {
    id: 5,
    src: new URL('../assets/images/media-5.png', import.meta.url).href,
    alt: 'Description of Image 5',
    type: 'image',
  },
];
