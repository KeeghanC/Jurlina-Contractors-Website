import { Component } from '@angular/core';
import { NAV_CONTENT as navContent } from '../constants/nav-content.const';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  nav = navContent;
}
