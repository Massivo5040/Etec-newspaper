import { Component, OnInit } from '@angular/core';
import { BigNewsComponent } from '../big-news/big-news.component';
import { SmallNewsComponent } from '../small-news/small-news.component';
import { News, newsExample } from '../../../../../assets/data/newsType';

@Component({
  selector: 'app-important-news',
  standalone: true,
  imports: [BigNewsComponent, SmallNewsComponent],
  templateUrl: './important-news.component.html',
  styleUrl: './important-news.component.scss',
})
export class ImportantNewsComponent {
  newsExample: News[] = newsExample;
}
