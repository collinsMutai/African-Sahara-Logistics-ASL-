import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
  private lastScrollTop = 0;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const image = document.querySelector('.about-left img') as HTMLImageElement;
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop) {
      image.classList.remove('img-fall');
      image.classList.add('img-rise');
    } else {
      image.classList.remove('img-rise');
      image.classList.add('img-fall');
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };
}
