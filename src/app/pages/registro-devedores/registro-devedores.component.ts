// Louvado seja o Senhor

import { Component, inject, Input, signal } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { ModalPagamentoComponent } from "./modal-pagamento/modal-pagamento.component";
import { Clientes, PagamentoDivida, PagamentoDividas, RegistroDivida, RegistroDividas } from '../../models/clientes.model';
import { ClientesService } from '../../services/clientes.service';
import { tap } from 'rxjs';
import { CurrencyPipe, DatePipe, NgForOf } from '@angular/common';
import { ModalEditDividaComponent } from "./modal-edit-divida/modal-edit-divida.component";
import { ModalEditPagamentoComponent } from "./modal-edit-pagamento/modal-edit-pagamento.component";
import { ModalDeleteDividaComponent } from "./modal-delete-divida/modal-delete-divida.component";
import { ModalDeletePagamentoComponent } from "./modal-delete-pagamento/modal-delete-pagamento.component";

@Component({
  selector: 'app-registro-devedores',
  imports: [HeaderComponent, ButtonComponent, TableComponent, ModalPagamentoComponent, CurrencyPipe, NgForOf, DatePipe, ModalEditDividaComponent, ModalEditPagamentoComponent, ModalDeleteDividaComponent, ModalDeletePagamentoComponent],
  templateUrl: './registro-devedores.component.html',
  styleUrl: './registro-devedores.component.css'
})
export class RegistroDevedoresComponent {
  nomeCliente : string = 'Douglas';
  divida : number = 133;

  isPagamentoModalOpen = signal(false);
  isEditDividaModalOpen = signal(false);
  isDeleteDividaModalOpen = signal(false);
  isEditPagamentoModalOpen = signal(false);
  isDeletePagamentoModalOpen = signal(false);
  apiService = inject(ClientesService);

  clientes! : Clientes;
  registroDividas! : RegistroDividas;
  pagamentoDividas! : PagamentoDividas;

  selectedRegistroDivida! : RegistroDivida;
  selectedPagamentoDivida! : PagamentoDivida;

  @Input() clienteID! : number;

  public ngOnInit() : void{
    this.loadClienteInfo(this.clienteID);
    this.loadClientes();
  }

  loadClienteInfo(id : number){
    this.apiService.showClienteInfo(id)
    .subscribe({
      next: (res) => {
        this.nomeCliente = res.clienteNome;
        this.divida = res.clienteDivida;

        this.loadRegistroDividas(id);
        this.loadPagamentoDividas(id);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  loadRegistroDividas(id : number){
    this.apiService.showClienteDividas(id)
    .pipe(tap((registroDividas : RegistroDividas) => (this.registroDividas = registroDividas)))
    .subscribe({
      next: (res) => {

      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  loadPagamentoDividas(id : number){
    this.apiService.showClientePagamentos(id)
    .pipe(tap((pagamentoDividas : PagamentoDividas) => (this.pagamentoDividas = pagamentoDividas)))
    .subscribe({
      next: (res) => {

      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  chooseCliente = (id : number) => {
    this.clienteID = id;
    this.loadClienteInfo(id);
  }

  loadClientes(){
    this.apiService.showClientes()
    .pipe(tap((clientes : Clientes) => (this.clientes = clientes)))
    .subscribe({
      next: (res) => {

      },
      error: (err) => {
        console.error(err);
      }
    })
  }


  openPagamentoModal = () => {
    this.isPagamentoModalOpen.set(true);
  }

  openEditDividaModal = (id : number) => {
    this.selectedRegistroDivida = structuredClone(
      this.registroDividas.find(p => p.regDividasID === id)!
    )
    this.isEditDividaModalOpen.set(true);
  }

  openDeleteDividaModal = (id : number) => {
    this.selectedRegistroDivida = structuredClone(
      this.registroDividas.find(p => p.regDividasID === id)!
    )
    this.isDeleteDividaModalOpen.set(true);
  }

  openEditPagamentoModal = (id : number) => {
    this.selectedPagamentoDivida = structuredClone(
      this.pagamentoDividas.find(p => p.pagDividasID === id)!
    )
    this.isEditPagamentoModalOpen.set(true);
  }

  openDeletePagamentoModal = (id : number) => {
    this.selectedPagamentoDivida = structuredClone(
      this.pagamentoDividas.find(p => p.pagDividasID === id)!
    )
    this.isDeletePagamentoModalOpen.set(true);
  }
}
