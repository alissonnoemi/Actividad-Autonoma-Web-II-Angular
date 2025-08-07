import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { NosotrasComponent } from './pages/nosotras/nosotras.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { autenticaGuard } from './guards/autentica.guard';
import { loginCanMatchGuard } from './guards/login-can-match.guard';
import { registroUsuarioGuard } from './guards/registro-usuario.guard';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'productos', 
        component: ListaProductosComponent,
        canActivate: [autenticaGuard]
    },
    {
        path: 'nosotras', 
        component: NosotrasComponent
    },
    {
        path: 'login', 
        component: LoginComponent,
        canMatch: [loginCanMatchGuard]
    },
    {
        path: 'registro', 
        component: RegistroUsuariosComponent,
        canDeactivate: [registroUsuarioGuard]
    }
];
