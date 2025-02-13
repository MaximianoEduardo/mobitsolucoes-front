import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './page/dashboard.component';
import { DashboardService } from './service/dashboard.service';

@NgModule({
  imports: [
    DashboardComponent,
    CommonModule,
  ],
  providers: [DashboardService],
  exports: [
    DashboardComponent, 
  ],
})
export class DashboardModule {}