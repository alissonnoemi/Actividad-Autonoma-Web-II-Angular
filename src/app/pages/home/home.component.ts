import { Component } from '@angular/core';
import { InicioBannerComponent } from "../../components/inicio-banner/inicio-banner.component";
import { BienvenidaComponent } from '../../components/bienvenida/bienvenida.component';
import { ServiciosComponent } from '../../components/servicios/servicios.component';
import { SuscripcionComponent } from '../../components/suscripcion/suscripcion.component';
import { CatalogoComponent } from '../../components/catalogo/catalogo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InicioBannerComponent, BienvenidaComponent, ServiciosComponent, SuscripcionComponent, CatalogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
