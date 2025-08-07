import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Usuario {
  id?: number;
  nombre: string;
  email: string;
  password: string;
  fechaRegistro?: string;
}

export interface LoginResponse {
  success: boolean;
  user?: Usuario;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private readonly API_URL = 'http://localhost:3000/users';
  private usuarioActualSubject = new BehaviorSubject<Usuario | null>(null);
  public usuarioActual$ = this.usuarioActualSubject.asObservable();

  constructor(private http: HttpClient) {
    const usuarioGuardado = localStorage.getItem('user');
    if (usuarioGuardado) {
      this.usuarioActualSubject.next(JSON.parse(usuarioGuardado));
    }
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.get<Usuario[]>(this.API_URL).pipe(
      map(usuarios => {
        const usuario = usuarios.find(u => u.email === email && u.password === password);
        if (usuario) {
          localStorage.setItem('user', JSON.stringify(usuario));
          this.usuarioActualSubject.next(usuario);
          return { success: true, user: usuario };
        } else {
          return { success: false, message: 'Credenciales incorrectas' };
        }
      })
    );
  }

  registro(usuario: Usuario): Observable<Usuario> {
    const nuevoUsuario = {
      ...usuario,
      fechaRegistro: new Date().toISOString()
    };
    return this.http.post<Usuario>(this.API_URL, nuevoUsuario);
  }

  sesionIniciada(): boolean {
    return this.usuarioActualSubject.value !== null;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.usuarioActualSubject.next(null);
  }

  emailExiste(email: string): Observable<boolean> {
    return this.http.get<Usuario[]>(this.API_URL).pipe(
      map(usuarios => usuarios.some(u => u.email === email))
    );
  }

  getUsuarioActual(): Usuario | null {
    return this.usuarioActualSubject.value;
  }
}
