import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'gestion-soportes',
                loadChildren: () => import('../support-management/support-management-routing.module').then(m => m.SupportManagementRoutingModule),
                title: 'Gestión de Soportes'
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule { }
