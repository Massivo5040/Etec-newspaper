import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  bootstrapTwitterX,
  bootstrapFacebook,
  bootstrapInstagram,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  viewProviders: [
    provideIcons({ bootstrapTwitterX, bootstrapFacebook, bootstrapInstagram }),
  ],
  imports: [NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
