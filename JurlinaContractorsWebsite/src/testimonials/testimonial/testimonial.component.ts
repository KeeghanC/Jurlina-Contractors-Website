import { Component, Input, input } from '@angular/core';
import { TTestimonial } from './testimonial.type';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  @Input({ required: true }) readonly testimonial: TTestimonial | null = null;
}
