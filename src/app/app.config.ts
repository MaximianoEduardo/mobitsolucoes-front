import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DashboardEffects } from './features/dashboard/store/dashboard.effects';
import { dashboardReducer } from './features/dashboard/store/dashboard.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(
      RouterModule.forRoot(routes),
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      StoreModule.forFeature('dashboard', dashboardReducer),
      EffectsModule.forFeature([DashboardEffects])
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
  ]
};