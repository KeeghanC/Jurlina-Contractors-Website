import { Component } from '@angular/core';
import { testimonials } from './testimonial/testimonial.const';
import { TestimonialComponent } from "./testimonial/testimonial.component";

@Component({
    selector: 'app-testimonials',
    imports: [],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  public readonly testimonials = testimonials;

  interval: number = 15000; // default 5s

  currentIndex = 0;
  timeElapsed = 0;

  private autoTimer: any;
  private progressTimer: any;

  ngOnInit(): void {
    this.startAutoScroll();
    this.startProgress();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoTimer);
    clearInterval(this.progressTimer);
  }

  startAutoScroll(): void {
    this.autoTimer = setInterval(() => {
      this.next();
    }, this.interval);
  }

  startProgress(): void {
    this.progressTimer = setInterval(() => {
      this.timeElapsed += 100;
      if (this.timeElapsed >= this.interval) {
        this.timeElapsed = 0;
      }
    }, 100);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.resetProgress();
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetProgress();
  }

  private resetProgress(): void {
    this.timeElapsed = 0;
    clearInterval(this.progressTimer);
    this.startProgress();
    clearInterval(this.autoTimer);
    this.startAutoScroll();
  }
}
