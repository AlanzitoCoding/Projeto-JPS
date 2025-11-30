// Louvado seja o Senhor

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario, UsuarioAPI } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = 'http://localhost:8081';
  private readonly http = inject(HttpClient);

  public authLogin(username : string, password : string) : Observable<Usuario>{
    return this.http.post<UsuarioAPI>(`${this.apiURL}/login`, {
      userNome: username,
      userSenha: password
    }).pipe(map((response) => response.usuario[0]));
  }
}
