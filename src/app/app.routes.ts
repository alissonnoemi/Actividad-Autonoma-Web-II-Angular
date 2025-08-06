import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { NosotrasComponent } from './pages/nosotras/nosotras.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'productos', component: ListaProductosComponent},
    {path:'nosotras', component: NosotrasComponent},
    {path:'login', component:LoginComponent},
    {path:'registro', component:RegistroUsuariosComponent}

];
