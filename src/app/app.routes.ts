import { Routes } from '@angular/router';
import { ProductosComponent } from './main/pages/productos/productos.component';
import { SucursalesComponent } from './main/pages/sucursales/sucursales.component';
import { ContactoComponent } from './main/pages/contacto/contacto.component';
import { HomeComponent } from './main/pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'sucursales', component: SucursalesComponent },
    { path: 'contacto', component: ContactoComponent },
];
