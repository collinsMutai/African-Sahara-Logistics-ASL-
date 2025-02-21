import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeroSliderComponent } from '../hero-slider/hero-slider.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { SectorsComponent } from '../sectors/sectors.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    HeroSliderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    SectorsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
