import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, shareReplay } from 'rxjs';
import { ClientePlano } from '../../../core/models/cliente-plano';
import { Cliente } from '../../../core/models/cliente.model';
import { Plano } from '../../../core/models/planos.model';
import { Dashboard } from '../../../core/models/state';
import { Store } from '@ngrx/store';
import { selectDashboard } from '../store/dashboard.selector';


@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:3000/clientes/');
  }

  getPlanos(): Observable<Plano[]> {
    return this.http.get<Plano[]>('http://localhost:3000/planos');
  }

  getClientesPlanos(): Observable<ClientePlano[]> {
    return this.http.get<ClientePlano[]>('http://localhost:3000/clientesPlanos').pipe(
      shareReplay(1)
    );
  }

  getDashboardUpdated(): Observable<Dashboard>{
    return this.store.select(selectDashboard).pipe(
      shareReplay(1)
    );
  }

}