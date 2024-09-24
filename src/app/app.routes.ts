import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Portfólio | Deivid Barreto'
    },
    {
        path: '**',
        loadComponent: () => import('./pages/error/error.component').then(m => m.ErrorComponent),
        title: 'Page not found'
    }
];