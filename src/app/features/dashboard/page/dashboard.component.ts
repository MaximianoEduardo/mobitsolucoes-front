import { Component, computed, effect, signal, Signal } from '@angular/core';
import { SideBarModule } from '../../shared/ui/sidebard/sidebar.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClientePlano } from '../../../core/models/cliente-plano';
import { Cliente } from '../../../core/models/cliente.model';
import { Plano } from '../../../core/models/planos.model';
import { AppState } from '../../../core/models/state';
import { carregarClientes, carregarPlanos, carregarClientesPlanos, atualizarDashboard } from '../store/dashboard.actions';
import { selectClientes, selectPlanos, selectClientesPlanos, selectTotalClientes, selectTotalPlanos, selectClientesPorPlano, selectAllDataLoaded } from '../store/dashboard.selector';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChartPieComponent } from "../../shared/ui/chart-pie/chart-pie.component";
import { toSignal } from '@angular/core/rxjs-interop';
import { ChartBarsComponent } from "../../shared/ui/chart-bars/chart-bars.component";
import { CardsGridComponent } from "../../shared/ui/cards-grid/cards-grid.component";

@Component({
  selector: 'app-dashboard',
  imports: [SideBarModule,
    CommonModule,
    ChartPieComponent, ChartBarsComponent, CardsGridComponent],
  providers: [HttpClient],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  clientes: Signal<Cliente[]>;
  planos$: Observable<Plano[]>;
  totalClientes: Signal<number>;
  totalPlanos: Signal<number>;
  clientesPlanos: Signal<ClientePlano[]>;
  clientesPorPlano: Signal<{ [planoId: string]: number; } | {}>
  allDataLoaded: Signal<boolean>;
  combinedData = computed(() => {
    return {
      totalClientes: this.totalClientes(),
      totalPlanos: this.totalPlanos(),
      clientesPorPlano: this.clientesPlanos()
    };
  });
  
  cardsTitle = {
    'totalClientes': 'Total de Clientes: ',
    'totalPlanos': 'Total de Planos: ',
    'media' : 'Média de planos por cliente: '
  }

  mediaPlanosPorCliente = computed(() => {
    const totalClientes = this.totalClientes();
    const totalPlanos = this.totalPlanos();
    return totalClientes > 0 ? totalPlanos / totalClientes : 0;
  });

  constructor(private store: Store<AppState>) {
    this.clientes = toSignal(this.store.select(selectClientes), { initialValue: [ ] as Cliente[] });
    this.planos$ = this.store.select(selectPlanos);
    this.totalClientes = toSignal(this.store.select(selectTotalClientes), { initialValue: 0 });
    this.totalPlanos = toSignal(this.store.select(selectTotalPlanos), { initialValue: 0 });
    this.clientesPlanos = toSignal(this.store.select(selectClientesPlanos), { initialValue: [] as ClientePlano[] });
    this.clientesPorPlano = toSignal(this.store.select(selectClientesPorPlano), { initialValue: {} ,});
    this.allDataLoaded = toSignal(this.store.select(selectAllDataLoaded), { initialValue: false });

    console.log('Chamou')
    effect(() => {
      if (this.allDataLoaded()) {
        console.log('Todos os dados foram carregados:', this.combinedData());
        this.store.dispatch(
          atualizarDashboard()
        );
      }
    });
  }

  ngOnInit(): void {
    // Dispara as ações para carregar os dados;

    this.store.dispatch(carregarClientes());
    this.store.dispatch(carregarPlanos());
    this.store.dispatch(carregarClientesPlanos())
    
  }
}
