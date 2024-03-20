export interface News {
  id: number;
  title: string;
  text: string;
  images: Image[] | undefined;
  author: string;
  date: string;
  category: string;
  cover: Image;
}

export interface Image {
  id: number;
  url: string;
}

export const newsExample: News[] = [
  {
    id: 1,
    title: 'Jaguar D. Saul está vivo',
    text: '',
    images: [
      {
        id: 1,
        url: '',
      },
    ],
    author: 'Arthur Rolemberg',
    date: '01/01/2001',
    category: 'Anime',
    cover: {
      id: 2,
      url: 'url("https://th.bing.com/th/id/R.0d2b0cc4d696a5430124812d6ff9b5cb?rik=%2fqHQ602FLEd1fg&pid=ImgRaw&r=0"), url("https://img.gmz88.com/uploadimg/image/20190312/15523753395c875e2bbe3912.82419737.jpeg")',
    },
  },
  {
    id: 2,
    title: 'Melodie está prestes a entrar no brawl stars',
    text: '',
    images: [
      {
        id: 1,
        url: '',
      },
    ],
    author: 'Arthur Rolemberg',
    date: '01/01/2001',
    category: 'Game',
    cover: {
      id: 2,
      url: 'url("https://th.bing.com/th/id/OIP.Viuh4n5hw2DuGGD86A3FiQHaEK?rs=1&pid=ImgDetMain"), url("https://img.gmz88.com/uploadimg/image/20190312/15523753395c875e2bbe3912.82419737.jpeg")',
    },
  },
  {
    id: 3,
    title: 'Luffy com sua gear 5 faz sua primeira aparição',
    text: '',
    images: [
      {
        id: 1,
        url: '',
      },
    ],
    author: 'Arthur Rolemberg',
    date: '01/01/2001',
    category: 'Anime',
    cover: {
      id: 2,
      url: 'url("https://th.bing.com/th/id/OIP.MosDj_xqbSIvOYXhy7Ww4AHaIQ?rs=1&pid=ImgDetMain"), url("https://img.gmz88.com/uploadimg/image/20190312/15523753395c875e2bbe3912.82419737.jpeg")',
    },
  },
];
