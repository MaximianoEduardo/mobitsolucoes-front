import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './page/dashboard.component';
import { DashboardService } from './service/dashboard.service';
import { RouterModule, Routes } from '@angular/router';

const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    DashboardComponent,
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [DashboardService],
  exports: [
    DashboardComponent, 
  ],
})
export class DashboardModule {}