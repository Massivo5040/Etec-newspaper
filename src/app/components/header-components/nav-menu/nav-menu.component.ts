import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3, heroXMark } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          left: '-290px',
          opacity: 0,
        })
      ),
      state(
        'closed',
        style({
          left: 0,
          opacity: 1,
        })
      ),
      transition('open => closed', [animate('0.3s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
  imports: [NgIconComponent, NgClass],
  viewProviders: [provideIcons({ heroBars3, heroXMark })],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  isOpen: boolean = true;
  // classes: string = '';

  toggleMenu() {
    this.isOpen = !this.isOpen;

    // this.updateClasses();
  }

  // updateClasses() {
  //   this.classes = `{isOpen ? open : closed}`;
  // }
  slideIn = {
    animation: 'slideIn 1s',
  };

  slideOut = {
    animation: 'slideOut 0.5s',
  };
}
