import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeroSliderComponent } from "../hero-slider/hero-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeroSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
