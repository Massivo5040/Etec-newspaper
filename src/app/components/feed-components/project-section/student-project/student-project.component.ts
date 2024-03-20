import { Component, Input, OnInit } from '@angular/core';
import { StudentProjectCardComponent } from '../student-project-card/student-project-card.component';
import {
  Author,
  projectsExample,
  Project,
} from '../../../../../assets/data/projectsType';
import { Image } from '../../../../../assets/data/newsType';

@Component({
  selector: 'app-student-project',
  standalone: true,
  imports: [StudentProjectCardComponent],
  templateUrl: './student-project.component.html',
  styleUrl: './student-project.component.scss',
})
export class StudentProjectComponent implements OnInit {
  projectsExample: Project[] = projectsExample;
  projectName: string = '';
  projectDescription: string | undefined;
  projectAuthor: Author = {
    name: '',
    grade: '',
  };
  projectDate: string = '';
  projectTechnologies: string = '';
  projectCover: Image = {
    id: 0,
    url: '',
  };
  projectLink: string | undefined;

  ngOnInit(): void {}
}
