import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { NosotrasComponent } from './pages/nosotras/nosotras.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'productos', component: ListaProductosComponent},
    {path:'nosotras', component: NosotrasComponent}

];
