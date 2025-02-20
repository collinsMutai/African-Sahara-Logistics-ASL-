import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const cards = document.querySelectorAll('.services-card');
    cards.forEach((card) => {
      observer.observe(card);
    });
  }
}
