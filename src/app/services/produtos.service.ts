import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  apiURL = "http://localhost:8081";
  private readonly http : HttpClient = inject(HttpClient);

  public addNewProduto( nome : string, valor : number, categoria : string ) : Observable<Produto>{
    return this.http.post<Produto>(`${this.apiURL}/addProduto`, { 
      nomeProduto: nome, 
      valorProduto: valor, 
      categoriaProduto: categoria 
    });
  }
}
