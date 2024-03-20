import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-news',
  standalone: true,
  imports: [],
  templateUrl: './small-news.component.html',
  styleUrl: './small-news.component.scss',
})
export class SmallNewsComponent implements OnInit {
  @Input()
  newsCoverImage: string = '';
  @Input()
  newsCategory: string = '';
  @Input()
  newsDate: string = '';
  @Input()
  newsTitle: string = '';
  newsTitleCut: string = '';

  ngOnInit(): void {
    if (this.newsTitle.length > 16) {
      let word: string = this.newsTitle.slice(0, 16);
      this.newsTitleCut = `${word}...`;
    }
  }
}
