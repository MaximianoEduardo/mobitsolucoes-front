import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { DashboardEffects } from './dashboard/store/dashboard.effects';
import { dashboardReducer } from './dashboard/store/dashboard.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
  ],
  exports: [DashboardModule],
})
export class FeaturesModule { }
