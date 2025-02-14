import { createAction, props } from '@ngrx/store';
import { Cliente } from '../../../core/models/cliente.model';
import { ClientePlano } from '../../../core/models/cliente-plano';
import { Plano } from '../../../core/models/planos.model';
import { Dashboard } from '../../../core/models/state';
import { Observable } from 'rxjs';

// Carregar dados
export const carregarClientes = createAction('[Dashboard] Carregar Clientes');
export const carregarClientesSucesso = createAction(
  '[Dashboard] Carregar Clientes Sucesso',
  props<{ clientes: Cliente[] }>()
);

export const carregarPlanos = createAction('[Dashboard] Carregar Planos');
export const carregarPlanosSucesso = createAction(
  '[Dashboard] Carregar Planos Sucesso',
  props<{ planos: Plano[] }>()
);

export const carregarClientesPlanos = createAction('[Dashboard] Carregar Clientes Planos');
export const carregarClientesPlanosSucesso = createAction(
  '[Dashboard] Carregar Clientes Planos Sucesso',
  props<{ clientesPlanos: ClientePlano[] }>()
);

// Atualizar dashboard
export const atualizarDashboard = createAction('[Dashboard] Atualizar Dashboard');
export const atualizarDashboardSucess = createAction('[Dashboard] Atualizar Dashboard Sucesso',
  props<{ dashboard: Dashboard}>()
);