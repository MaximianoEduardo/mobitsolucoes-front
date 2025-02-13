import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../../core/models/state';

export const selectDashboardState = createFeatureSelector<AppState>('dashboard');

export const selectClientes = createSelector(
  selectDashboardState,
  (state) => state.clientes
);

export const selectPlanos = createSelector(
  selectDashboardState,
  (state) => state.planos
);

export const selectClientesPlanos = createSelector(
  selectDashboardState,
  (state) => state.clientesPlanos
);

export const selectTotalClientes = createSelector(
  selectDashboardState,
  (state) => state.dashboard.totalClientes
);

export const selectTotalPlanos = createSelector(
  selectDashboardState,
  (state) => state.dashboard.totalPlanos
);

export const selectClientesPorPlano = createSelector(
  selectDashboardState,
  (state) => state.dashboard.clientesPorPlano
);