import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Producto } from './productos';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  constructor (private http: HttpClient){
  }
   productos: Producto[]=[];

   ngOnInit(): void{
       this.http.get<Producto[]>('assets/productos.json').subscribe(data => {
           this.productos = data;
       });
   }
}
