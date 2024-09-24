import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'**',
        loadChildren: ()=> import('./modules/support-management/support-management-routing.module').then(m=>m.SupportManagementRoutingModule)
    }
];
