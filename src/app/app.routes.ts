import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'app',
        loadChildren: ()=> import('./modules/layout/layout-routing.module').then(m=>m.LayoutRoutingModule)
    },
    {
        path:'**',
        redirectTo: 'app'
    }
];
