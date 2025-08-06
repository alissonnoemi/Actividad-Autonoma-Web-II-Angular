import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string='';
  contrasenia: string = '';
  error: string = '';
  constructor(private authServicio:AutenticacionService, private router:Router){}
  login(){
    const InicioSesion = this.authServicio
  }
}
