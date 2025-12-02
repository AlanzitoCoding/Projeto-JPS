// Louvado seja o Senhor

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente, ClienteAPI, Clientes, ClientesAPI, PagamentoDivida, PagamentoDividas, PagamentoDividasAPI, RegistroDivida, RegistroDividas, RegistroDividasAPI } from '../models/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private readonly http = inject(HttpClient);
  apiURL = 'http://localhost:8081';

  public showClientes() : Observable<Clientes>{
    return this.http.get<ClientesAPI>(`${this.apiURL}/showClientes`).pipe(map((response) => response.clientes));
  }

  public showMaioresDividas() : Observable<Clientes>{
    return this.http.get<ClientesAPI>(`${this.apiURL}/showMaioresDividas`).pipe(map((response) => response.clientes));
  }

  public showClienteInfo(id : number) : Observable<Cliente>{
    return this.http.get<ClienteAPI>(`${this.apiURL}/showClienteInfo/${id}`)
    .pipe(map((response) => response.clienteInfo[0]));
  }

  public showClienteDividas(id : number) : Observable<RegistroDividas>{
    return this.http.get<RegistroDividasAPI>(`${this.apiURL}/showClienteRegistroDividas/${id}`)
    .pipe(map((response) => response.registroDividas));
  }

  public showClientePagamentos(id : number) : Observable<PagamentoDividas>{
    return this.http.get<PagamentoDividasAPI>(`${this.apiURL}/showClientePagamentoDividas/${id}`)
    .pipe(map((response) => response.pagamentoDividas));
  }

  public pagarDivida(id : number, valor : number) : Observable<PagamentoDivida>{
    return this.http.post<PagamentoDivida>(`${this.apiURL}/pagarDivida`, {
      valorPagamento: valor,
      clienteID_FK: id
    })
  }

  public updateRegistroDivida(idDivida : number, valor : number, data : Date, idFK : number) : Observable<RegistroDivida>{
    return this.http.put<RegistroDivida>(`${this.apiURL}/updateRegistroDivida/${idDivida}/${idFK}`, {
      valorDivida: valor,
      dataDivida: data 
    })
  }

  public updatePagamentoDivida(idPagamento : number, valor : number, data : Date, idFK : number) : Observable<PagamentoDivida>{
    return this.http.put<PagamentoDivida>(`${this.apiURL}/updatePagamentoDivida/${idPagamento}/${idFK}`, {
      valorPagamento: valor,
      dataPagamento: data 
    })
  }

  public deleteRegistroDivida(idDivida : number, idFK : number) : Observable<RegistroDivida>{
    return this.http.delete<RegistroDivida>(`${this.apiURL}/deleteRegistroDivida/${idDivida}/${idFK}`)
  }

  public deletePagamentoDivida(idPagamento : number, idFK : number) : Observable<PagamentoDivida>{
    return this.http.delete<PagamentoDivida>(`${this.apiURL}/deletePagamentoDivida/${idPagamento}/${idFK}`)
  }
}
