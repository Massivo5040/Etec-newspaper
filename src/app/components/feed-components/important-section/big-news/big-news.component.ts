import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-news',
  standalone: true,
  imports: [],
  templateUrl: './big-news.component.html',
  styleUrl: './big-news.component.scss',
})
export class BigNewsComponent {
  @Input()
  newsCategory: string = '';
  @Input()
  newsCoverImage: string = '';
  @Input()
  newsTitle: string = '';
}
