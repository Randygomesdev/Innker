import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home').then(m => m.Home),
    },
    {
        path: 'brand',
        loadComponent: () => import('./brand-manual/brand-manual').then(m => m.BrandManual),
    },
    {
        path: 'privacy',
        loadComponent: () => import('./privacy/privacy').then(m => m.Privacy),
    },
    {
        path: 'terms',
        loadComponent: () => import('./terms/terms').then(m => m.Terms),
    },
    {
        path: '**',
        redirectTo: '',
    }
];
