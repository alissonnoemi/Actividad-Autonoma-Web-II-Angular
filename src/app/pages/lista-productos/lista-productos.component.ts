import { Component } from '@angular/core';
import { ProductosComponent } from "../../components/productos/productos.component";

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [ProductosComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

}
