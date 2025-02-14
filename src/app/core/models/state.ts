import { ClientePlano } from "./cliente-plano";
import { Cliente } from "./cliente.model";
import { Plano } from "./planos.model";


export interface AppState {
  clientes: Cliente[];
  planos: Plano[];
  clientesPlanos: ClientePlano[];
  dashboard: Dashboard;
}

export interface Dashboard{
  totalClientes: number;
  totalPlanos: number;
  clientesPorPlano: { [planoNome: string]: number };
}