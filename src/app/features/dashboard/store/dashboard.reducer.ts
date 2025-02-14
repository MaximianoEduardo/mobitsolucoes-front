import { createReducer, on } from '@ngrx/store';
import { AppState } from '../../../core/models/state';
import { ClientePlano } from '../../../core/models/cliente-plano';
import { carregarClientesSucesso, carregarPlanosSucesso, carregarClientesPlanosSucesso, atualizarDashboard, atualizarDashboardSucess } from './dashboard.actions';

export const initialState: AppState = {
  clientes: [],
  planos: [],
  clientesPlanos: [],
  dashboard: {
    totalClientes: 0,
    totalPlanos: 0,
    clientesPorPlano: {}
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
      clientesPorPlano: calcularClientesPorPlano(state.clientesPlanos, state.planos),
    },
  })),
  on(atualizarDashboardSucess, (state, { dashboard }) => ({
    ...state,
    dashboard
  }))
);

function calcularClientesPorPlano(clientesPorPlano: ClientePlano[], planos: { id: string, nome: string }[]): { [planoNome: string]: number } {
  const planoMap = planos.reduce((acc, plano) => {
    acc[plano.id] = plano.nome;
    return acc;
  }, {} as { [id: string]: string });

  return clientesPorPlano.reduce((acc, curr) => {
    const planoNome = planoMap[curr.planoId] || 'Desconhecido';
    acc[planoNome] = (acc[planoNome] || 0) + 1;
    return acc;
  }, {} as { [planoNome: string]: number });
}