// Louvado seja o Senhor

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Produto, Produtos, ProdutosAPI } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  apiURL = "http://localhost:8081";
  private readonly http : HttpClient = inject(HttpClient);

  public addNewProduto( nome : string, valor : number, categoria : string ) : Observable<Produto>{
    return this.http.post<Produto>(`${this.apiURL}/addProduto`, { 
      prodNome: nome, 
      prodValor: valor, 
      prodCategoria: categoria 
    });
  }
  
  public showProdutos() : Observable<Produtos>{
    return this.http.get<ProdutosAPI>(`${this.apiURL}/showProdutos`).pipe(map((response) => response.produtos));
  }
  
  public editProduto(produto : Produto) : Observable<Produto>{
    return this.http.put<Produto>(`${this.apiURL}/updateProduto`, {
      prodNome: produto.prodNome, 
      prodValor: produto.prodValor, 
      prodCategoria: produto.prodCategoria,
      prodID: produto.prodID
    });
  }
}
