import { Component } from '@angular/core';
import { SideBarModule } from '../../shared/ui/sidebard/sidebar.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClientePlano } from '../../../core/models/cliente-plano';
import { Cliente } from '../../../core/models/cliente.model';
import { Plano } from '../../../core/models/planos.model';
import { AppState } from '../../../core/models/state';
import { carregarClientes, carregarPlanos, carregarClientesPlanos, atualizarDashboard } from '../store/dashboard.actions';
import { selectClientes, selectPlanos, selectClientesPlanos, selectTotalClientes, selectTotalPlanos, selectClientesPorPlano } from '../store/dashboard.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [SideBarModule, AsyncPipe, CommonModule],
  providers: [HttpClient],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  clientes$: Observable<Cliente[]>;
  planos$: Observable<Plano[]>;
  clientesPlanos$: Observable<ClientePlano[]>;
  totalClientes$: Observable<number>;
  totalPlanos$: Observable<number>;
  clientesPorPlano$: Observable<{ [planoId: string]: number }>;

  constructor(private store: Store<AppState>) {
    this.clientes$ = this.store.select(selectClientes);
    this.planos$ = this.store.select(selectPlanos);
    this.clientesPlanos$ = this.store.select(selectClientesPlanos);
    this.totalClientes$ = this.store.select(selectTotalClientes);
    this.totalPlanos$ = this.store.select(selectTotalPlanos);
    this.clientesPorPlano$ = this.store.select(selectClientesPorPlano);
  }

  ngOnInit(): void {
    // Dispara as ações para carregar os dados
    this.store.dispatch(carregarClientes());
    this.store.dispatch(carregarPlanos());
    this.store.dispatch(carregarClientesPlanos());
    this.store.dispatch(atualizarDashboard());
  }
}
