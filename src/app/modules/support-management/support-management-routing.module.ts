import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SupportMangementComponent } from './pages/support-mangement/support-mangement.component';

const routes: Routes = [
  {
    path: '',
    component: SupportMangementComponent,
  },
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class SupportManagementRoutingModule { }
