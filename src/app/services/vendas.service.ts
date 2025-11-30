// Louvado seja o Senhor

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RegistroVenda, RegistroVendas, RegistroVendasAPI, TipoCompra } from '../models/vendas.model';

@Injectable({
  providedIn: 'root'
})
export class VendasService {
  private readonly http = inject(HttpClient);
  apiURL = "http://localhost:8081";

  public addNewVenda(nome : string, valor: number, dataRegistro : Date, tipo : TipoCompra) : Observable<RegistroVenda>{
    return this.http.post<RegistroVenda>(`${this.apiURL}/addNewVenda`, {
      nomeComprador: nome,
      vendaValor: valor,
      vendaDataRegistro: dataRegistro,
      tipoCompra: tipo
    });
  }

  public showVendas() : Observable<RegistroVendas>{
    return this.http.get<RegistroVendasAPI>(`${this.apiURL}/showVendas`).pipe(map((response) => response.vendas));
  }

  public showDividas() : Observable<RegistroVendas>{
    return this.http.get<RegistroVendasAPI>(`${this.apiURL}/showDividas`).pipe(map((response) => response.dividas));
  }

  public updateVenda(id : number, data : Date, valor : number, nome : string, tipo : TipoCompra) : Observable<RegistroVenda>{
    return this.http.put<RegistroVenda>(`${this.apiURL}/updateVenda/${id}`, {
      vendaDataRegistro: data, 
      vendaValor: valor, 
      nomeComprador: nome, 
      tipoCompra: tipo  
    })
  }

  public deleteVenda(id : number) : Observable<RegistroVenda>{
    return this.http.delete<RegistroVenda>(`${this.apiURL}/deleteVenda/${id}`)
  }
}
