import { Component } from '@angular/core';
import { NavMenuComponent } from '../header-components/nav-menu/nav-menu.component';
import { SearchComponent } from '../header-components/search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenuComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
