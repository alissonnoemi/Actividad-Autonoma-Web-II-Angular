import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) { 
    this.http.get<any>('assets/database/users.json').subscribe((data)=>{
      this.usuarioValido={
        usuario: data.usuario,
        password: data.password,
      };
    });
  }
  private usuarioValido = {
    usuario: '',
    password: '',
  };
}
