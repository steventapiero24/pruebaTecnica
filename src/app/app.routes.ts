import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServiciosComponent } from './servicios/servicios.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent, data: { breadcrumb: 'Home', icon: 'home' } },
    { path: 'servicios', component: ServiciosComponent, data: { breadcrumb: 'Servicios', icon: 'services' } }
];
