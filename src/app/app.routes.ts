import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
    }
    ,
    {
        path: 'planos',
        loadChildren: () => import('./features/planos/planos.module').then(m => m.PlanosModule)
    }
];
