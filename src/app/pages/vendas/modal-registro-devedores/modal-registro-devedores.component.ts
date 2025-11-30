// Louvado seja o Senhor

import { Component, inject, model } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { TableComponent } from "../../../shared/table/table.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { Clientes } from '../../../models/clientes.model';
import { ClientesService } from '../../../services/clientes.service';
import { tap } from 'rxjs';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-registro-devedores',
  imports: [ModalComponent, TableComponent, ButtonComponent, NgForOf],
  templateUrl: './modal-registro-devedores.component.html',
  styleUrl: './modal-registro-devedores.component.css'
})
export class ModalRegistroDevedoresComponent {
  isRegistroDevedoresOpen = model(false);
  apiService = inject(ClientesService);
  clientes : Clientes = [];
  router = inject(Router);


  public ngOnInit() : void{
    this.loadClientes();
  }

  loadClientes(){
    this.apiService.showClientes()
    .pipe(tap((clientes : Clientes) => (this.clientes = clientes)))
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  loadClienteInfo = (id : number) => {
    sessionStorage.setItem("clienteID", JSON.stringify(id));
    this.router.navigate(['/registroDevedores']);
  }
}
