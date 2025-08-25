import { Component } from '@angular/core';
import { testimonials } from './testimonial/testimonial.const';
import { TestimonialComponent } from "./testimonial/testimonial.component";

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  public readonly testimonials = testimonials;

  interval: number = 20000; // default 5s

  currentIndex = 0;
  private timer: any;

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  startAutoScroll(): void {
    this.timer = setInterval(() => {
      this.next();
    }, this.interval);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
    clearInterval(this.timer);
    this.startAutoScroll();
  }
}
