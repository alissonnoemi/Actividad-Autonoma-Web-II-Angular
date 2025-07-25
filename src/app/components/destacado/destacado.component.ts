import { Component } from '@angular/core';
import { Producto } from '../productos/productos';

@Component({
  selector: 'app-destacado',
  standalone: true,
  imports: [],
  templateUrl: './destacado.component.html',
  styleUrl: './destacado.component.css'
})
export class DestacadoComponent {
  productos: Producto[] = [];
  productoDestacado = this.productos[0];


}
