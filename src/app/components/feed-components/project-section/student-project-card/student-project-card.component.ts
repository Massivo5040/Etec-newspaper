import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroEllipsisHorizontal,
  heroChatBubbleOvalLeftEllipsis,
} from '@ng-icons/heroicons/outline';
import {
  Author,
  langIcon,
  projectsExample,
} from '../../../../../assets/data/projectsType';
import { Image } from '../../../../../assets/data/newsType';
import { NgFor } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-student-project-card',
  standalone: true,
  viewProviders: [
    provideIcons({
      heroEllipsisHorizontal,
      heroChatBubbleOvalLeftEllipsis,
    }),
  ],
  imports: [NgIconComponent, NgFor],
  templateUrl: './student-project-card.component.html',
  styleUrl: './student-project-card.component.scss',
})
export class StudentProjectCardComponent {
  @Input()
  projectName: string = '';
  @Input()
  projectDescription: string | undefined;
  @Input()
  projectAuthor: Author = {
    name: '',
    grade: '',
  };
  @Input()
  projectDate: string = '';
  @Input()
  projectTechnologies: langIcon[] = [];
  @Input()
  projectCover: Image = {
    id: 0,
    url: '',
  };
  @Input()
  projectLink: string | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
