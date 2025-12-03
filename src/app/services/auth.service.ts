// Louvado seja o Senhor

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario, UsuarioAPI } from '../models/usuarios.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = 'http://localhost:8081';
  private readonly http = inject(HttpClient);
  router = inject(Router);

  public authLogin(username : string, password : string) : Observable<Usuario>{
    return this.http.post<UsuarioAPI>(`${this.apiURL}/login`, {
      userNome: username,
      userSenha: password
    }).pipe(map((response) => response.usuario[0]));
  }

  public isLogged() : boolean{
    const user = sessionStorage.getItem("user");

    if(user){
      return true;
    }
    else{
      return false;
    }
  }

  public logout() : void{
    sessionStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
