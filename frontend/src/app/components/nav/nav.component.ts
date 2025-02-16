import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const toggler = document.querySelector('.custom-toggler') as HTMLElement;
    const navbarCollapse = document.getElementById('navbarNav');

    if (toggler && navbarCollapse) {
      toggler.addEventListener('click', () => {
        toggler.classList.toggle('active');
      });
    }
  }
}
