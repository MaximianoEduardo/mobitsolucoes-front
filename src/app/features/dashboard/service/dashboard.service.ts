import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientePlano } from '../../../core/models/cliente-plano';
import { Cliente } from '../../../core/models/cliente.model';
import { Plano } from '../../../core/models/planos.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:3000/clientes');
  }

  getPlanos(): Observable<Plano[]> {
    return this.http.get<Plano[]>('http://localhost:3000/planos');
  }

  getClientesPlanos(): Observable<ClientePlano[]> {
    return this.http.get<ClientePlano[]>('http://localhost:3000/clientesPlanos');
  }
}