import { Injectable } from "@angular/core";
import { ClientePlano } from "../../../core/models/cliente-plano";

@Injectable({
    providedIn: 'root',
  })
  export class DashboardCalculatorService {
    calcularClientesPorPlano(clientesPlanos: ClientePlano[]): { [planoId: string]: number } {
      return clientesPlanos.reduce((acc, curr) => {
        acc[curr.planoId] = (acc[curr.planoId] || 0) + 1;
        return acc;
      }, {} as { [planoId: string]: number });
    }
  }