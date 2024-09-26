import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: []
})
export class LayoutRoutingModule { }
