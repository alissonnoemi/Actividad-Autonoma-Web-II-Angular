import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutenticacionService, Usuario } from '../../services/autenticacion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit, OnDestroy {
  usuarioActual: Usuario | null = null;
  usuarioLogueado = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.authService.usuarioActual$.subscribe(usuario => {
      this.usuarioActual = usuario;
      this.usuarioLogueado = usuario !== null;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
