import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, CommonModule]
})
export class AppComponent {
  isScrollButtonVisible: boolean = false;

  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

 
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrollButtonVisible = window.scrollY > 300; 
  }
}
