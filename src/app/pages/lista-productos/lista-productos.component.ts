import { Component } from '@angular/core';
import { ProductosComponent } from "../../components/productos/productos.component";
import { BeneficiosComponent } from '../../components/beneficios/beneficios.component';
import { DestacadoComponent } from '../../components/destacado/destacado.component';
import { OpinionesComponent } from '../../components/opiniones/opiniones.component';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [ProductosComponent, BeneficiosComponent, DestacadoComponent, OpinionesComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

}
