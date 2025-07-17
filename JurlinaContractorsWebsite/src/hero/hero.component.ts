import { Component } from '@angular/core';
import { heroContent } from '../constants/hero.const';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  hero = heroContent;
}
