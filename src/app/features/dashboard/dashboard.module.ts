import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './page/dashboard.component';
import { SideBarModule } from '../shared/ui/sidebard/sidebar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardComponent,
    SideBarModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
