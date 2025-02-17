import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css'],
})
export class HeroSliderComponent implements OnInit {
  slides = [
    {
      image: 'assets/slide-01.jpg',
      title: 'Welcome to Our Service',
      subtitle: 'Discover amazing features with us.',
      buttonText: 'Get Started',
      buttonLink: '/get-started',
    },
    {
      image: 'assets/slide-02.jpg',
      title: 'Experience Innovation',
      subtitle: 'We bring ideas to life.',
      buttonText: 'Learn More',
      buttonLink: '/learn-more',
    },
    {
      image: 'assets/slide-03.jpg',
      title: 'Join Our Community',
      subtitle: 'Let’s grow together!',
      buttonText: 'Join Now',
      buttonLink: '/join',
    },
  ];

  currentIndex: number = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
  }

  setActiveSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
