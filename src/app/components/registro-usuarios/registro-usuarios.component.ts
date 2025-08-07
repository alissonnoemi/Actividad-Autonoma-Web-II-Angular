import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutenticacionService } from '../../services/autenticacion.service';
import { NombrePipe } from '../../pipes/nombre.pipe';
import { EmailPipe } from '../../pipes/email.pipe';

@Component({
  selector: 'app-registro-usuarios',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NombrePipe, EmailPipe],
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css',
})
export class RegistroUsuariosComponent {
  enviado: boolean = false;
  registroExitoso: boolean = false;
  
  constructor(private fb:FormBuilder, private router: Router, private authService: AutenticacionService){}
  registroForm:FormGroup=this.fb.group({
    nombre:['', Validators.required], 
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })
  registrar(){
    if(this.registroForm.valid){
      const usuario = this.registroForm.value;
      this.authService.registro(usuario).subscribe({
        next: (usuarioCreado) => {
          this.enviado = true;
          this.registroExitoso = true;
          console.log('Registro Exitoso', usuarioCreado);
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        }
      });
    }else{
      this.registroForm.markAllAsTouched();
    }
  }
  
  irALogin(){
    this.router.navigate(['/login']);
  }
  
  camposSinLlenar=()=>{
    return !this.enviado && Object.values(this.registroForm.controls).some(control=>control.dirty && control.invalid)
  }
}
