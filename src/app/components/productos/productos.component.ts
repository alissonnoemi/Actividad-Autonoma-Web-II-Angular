import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Producto } from './productos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  constructor(private http: HttpClient) {
  }
  productos: Producto[] = [];
  columnas: Producto[][] = [[], [], [], []];

  ngOnInit(): void {
    this.http.get<Producto[]>('assets/productos.json').subscribe(data => {
      this.productos = data;
      this.organizarColumnas();
    });
  }
  organizarColumnas(): void {
    this.columnas = [[], [], [], []];
    this.productos.forEach((producto, i) => {
      this.columnas[i % 4].push(producto);
    });
  }
  modalProducto: Producto | null = null;
  cantidadSeleccionada: number = 0;

  abrirModal(producto: any) {
    this.modalProducto = producto;
    this.cantidadSeleccionada = 0; 
  }

  cerrarModal() {
    this.modalProducto = null;
  }

  comprarProducto(producto: any, cantidad: number) {
    alert(`¡Agregado al carrito!\n${producto.nombre}\nCantidad: ${cantidad}\nTotal: $${producto.precio * cantidad}`);
    this.cerrarModal();
  }
}
