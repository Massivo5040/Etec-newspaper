import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ heroMagnifyingGlass })],
  animations: [
    trigger('openCloseSearch', [
      state(
        'open',
        style({
          width: '200px',
        })
      ),
      state('closed', style({})),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {}
