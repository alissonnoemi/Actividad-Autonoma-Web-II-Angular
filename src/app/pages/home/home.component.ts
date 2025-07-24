import { Component } from '@angular/core';
import { InicioBannerComponent } from "../../components/inicio-banner/inicio-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InicioBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
