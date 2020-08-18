import { Injectable } from '@angular/core';

export interface ContentInterface {
  header: string;
  headerLink: string;
  img: string;
  imgLink: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class AllContentService {

  public allContents: ContentInterface[] = [
    {
      header: 'muon - Web Development Agency',
      headerLink: 'http://muon-inc.github.io/',
      img: 'assets/muonHome.png',
      imgLink: 'http://muon-inc.github.io/',
      content: `
      muon is a web and design services company that designs affordable websites and branding for small and medium size businesses.
          `,
    },
    {
      header: 'Tensors',
      headerLink: 'http://tensors.in/',
      img: 'assets/hackathon.png',
      imgLink: 'http://tensors.in/',
      content: `
      Tensors is a social initiative aimed to tackle the problems existing in our society today. Tensors hosted De-Cov Ideathon, in association with Indian Medical Association, Kerala(IMA) to tackle issues that arose due to the Covid-19 Outbreak.
          `,
    },
    {
      header: 'Illustrations',
      headerLink: 'https://akshaykrishh.github.io/illustrations.html',
      img: 'assets/design/love.jpeg',
      imgLink: 'https://akshaykrishh.github.io/illustrations.html',
      content: `
      I like to do illustrations in my free time. Check them out!
      `,
    }
  ];

  work = [0, 1, 2];

  constructor() {
  }

  getWorkContent() {
    const newContent = [];
    for (const i of this.work) {
      newContent.push(this.allContents[i]);
    }
    return newContent;
  }
}
