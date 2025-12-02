// Louvado seja o Senhor 

import { Component, inject } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ClientesService } from '../../services/clientes.service';
import { Clientes } from '../../models/clientes.model';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apiService = inject(ClientesService);
  maioresDividas! : Clientes;

  public ngOnInit() : void{
    this.loadMaioresDividas();
  }

  loadMaioresDividas(){
    this.apiService.showMaioresDividas()
    .pipe(tap((clientes : Clientes) => (this.maioresDividas = clientes)))
    .subscribe({
      next: (res) => {
        console.log(res);
        console.log(this.maioresDividas);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
