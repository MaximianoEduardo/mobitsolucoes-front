import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlanosComponent } from './page/planos.component';

const planosRoutes: Routes = [
  { path: '', component: PlanosComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlanosComponent,
    RouterModule.forChild(planosRoutes)
  ],
  exports: [PlanosComponent]
})
export class PlanosModule { }
