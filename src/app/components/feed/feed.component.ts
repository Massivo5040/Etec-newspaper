import { Component } from '@angular/core';
import { TitleComponent } from '../feed-components/title/title.component';
import { ImportantNewsComponent } from '../feed-components/important-section/important-news/important-news.component';
import { StudentProjectComponent } from '../feed-components/project-section/student-project/student-project.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [TitleComponent, ImportantNewsComponent, StudentProjectComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {}
