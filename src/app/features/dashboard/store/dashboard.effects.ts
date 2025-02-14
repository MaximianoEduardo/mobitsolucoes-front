import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { DashboardService } from '../service/dashboard.service';
import { carregarClientes, carregarClientesSucesso, carregarPlanos, carregarPlanosSucesso, carregarClientesPlanos, carregarClientesPlanosSucesso, atualizarDashboard, atualizarDashboardSucess } from './dashboard.actions';
import { selectClientesPlanos, selectTotalClientes, selectTotalPlanos } from './dashboard.selector';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
    private store: Store
  ) {}

  carregarClientes$ = createEffect(
    (actions$ = inject(Actions), dashboardService = inject(DashboardService)) => {
      return actions$.pipe(
        ofType(carregarClientes),
        switchMap(() =>
          dashboardService.getClientes().pipe(
            map((clientes) => carregarClientesSucesso({ clientes })),
            catchError(() => of({ type: '[Dashboard] Carregar Clientes Falha' }))
          )
        )
      );
    },
    { functional: true }
  );
  

  carregarPlanos$ = createEffect(
    (actions$ = inject(Actions), dashboardService = inject(DashboardService)) => {
      return actions$.pipe(
        ofType(carregarPlanos),
        switchMap(() =>
          dashboardService.getPlanos().pipe(
            map((planos) => carregarPlanosSucesso({ planos })),
            catchError(() => of({ type: '[Dashboard] Carregar Planos Falha' }))
          )
        )
      );
    }
  );

  carregarClientesPlanos$ = createEffect(
    (actions$ = inject(Actions), dashboardService = inject(DashboardService)) => {
      return actions$.pipe(
        ofType(carregarClientesPlanos),
        switchMap(() =>
          dashboardService.getClientesPlanos().pipe(
            map((clientesPlanos) => carregarClientesPlanosSucesso({ clientesPlanos })),
            catchError(() => of({ type: '[Dashboard] Carregar Clientes Planos Falha' }))
          )
        )
      )
    }
  );

  atualizarDashboard$ = createEffect(
    (actions$ = inject(Actions), dashboardService = inject(DashboardService)) => {
      return actions$.pipe(
        ofType(atualizarDashboard),
        switchMap(() =>
          dashboardService.getDashboardUpdated().pipe(
            map((dashboard) => atualizarDashboardSucess({ dashboard })),
            catchError(() => of({ type: '[Dashboard] Atualizar Dashboard Falha' }))
          )
        )
      )
    },
    { functional: true }
  )
}