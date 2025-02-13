import { createReducer, on } from '@ngrx/store';
import { AppState } from '../../../core/models/state';
import { ClientePlano } from '../../../core/models/cliente-plano';
import { carregarClientesSucesso, carregarPlanosSucesso, carregarClientesPlanosSucesso, atualizarDashboard } from './dashboard.actions';

export const initialState: AppState = {
  clientes: [],
  planos: [],
  clientesPlanos: [],
  dashboard: {
    totalClientes: 0,
    totalPlanos: 0,
    clientesPorPlano: {},
  },
};

export const dashboardReducer = createReducer(
  initialState,
  on(carregarClientesSucesso, (state, { clientes }) => ({
    ...state,
    clientes,
  })),
  on(carregarPlanosSucesso, (state, { planos }) => ({
    ...state,
    planos,
  })),
  on(carregarClientesPlanosSucesso, (state, { clientesPlanos }) => ({
    ...state,
    clientesPlanos,
  })),
  on(atualizarDashboard, (state) => ({
    ...state,
    dashboard: {
      totalClientes: state.clientes.length,
      totalPlanos: state.planos.length,
      clientesPorPlano: calcularClientesPorPlano(state.clientesPlanos),
    },
  }))
);

// Função auxiliar para calcular clientes por plano
function calcularClientesPorPlano(clientesPlanos: ClientePlano[]): { [planoId: string]: number } {
  return clientesPlanos.reduce((acc, curr) => {
    acc[curr.planoId] = (acc[curr.planoId] || 0) + 1;
    return acc;
  }, {} as { [planoId: string]: number });
}