import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeroSliderComponent } from "../hero-slider/hero-slider.component";
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeroSliderComponent, FooterComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
