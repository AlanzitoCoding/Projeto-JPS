// Louvado seja o Senhor

import { Component, afterRender, inject, signal } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { TableComponent } from "../../shared/table/table.component";
import { ModalNovaVendaComponent } from "./modal-nova-venda/modal-nova-venda.component";
import { ModalRegistroDevedoresComponent } from "./modal-registro-devedores/modal-registro-devedores.component";
import { VendasService } from '../../services/vendas.service';
import { RegistroVenda, RegistroVendas } from '../../models/vendas.model';
import { tap } from 'rxjs';
import { CurrencyPipe, DatePipe, NgForOf } from '@angular/common';
import { ModalDeleteVendaComponent } from "./modal-delete-venda/modal-delete-venda.component";
import { ModalEditVendaComponent } from "./modal-edit-venda/modal-edit-venda.component";
import { TipoCompraPipe } from '../../pipes/tipo-compra.pipe';

@Component({
  selector: 'app-vendas',
  imports: [HeaderComponent, TableComponent, ModalNovaVendaComponent, ModalRegistroDevedoresComponent, NgForOf, DatePipe, CurrencyPipe, ModalDeleteVendaComponent, ModalEditVendaComponent, TipoCompraPipe],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.css'
})
export class VendasComponent {
  isNovaVendaModalOpen = signal(false);
  isDevedoresModalOpen = signal(false);
  isEditVendaModalOpen = signal(false);
  isDeleteVendaModalOpen = signal(false);

  apiService = inject(VendasService);
  public vendas : RegistroVendas = [];
  public dividas : RegistroVendas = [];

  selectedRegistroVenda! : RegistroVenda;

  public ngOnInit() : void{
    this.loadVendas();
    this.loadDividas();
  }

  openNovaVendaModal = () => {
    this.isNovaVendaModalOpen.set(true);
  }

  openDevedoresModal = () => {
    this.isDevedoresModalOpen.set(true);
  }

  openEditVendaModal = (id : number) => {
    this.selectedRegistroVenda = structuredClone(
      this.vendas.find(p => p.vendaID === id)!
    )
    this.isEditVendaModalOpen.set(true);
  }

  openDeleteVendaModal = (id : number) => {
    this.selectedRegistroVenda = structuredClone(
      this.vendas.find(p => p.vendaID === id)!
    )    
    this.isDeleteVendaModalOpen.set(true);
  }

  openEditFiadoModal = (id : number) => {
    this.selectedRegistroVenda = structuredClone(
      this.dividas.find(p => p.vendaID === id)!
    )
    this.isEditVendaModalOpen.set(true);
  }

  openDeleteFiadoModal = (id : number) => {
    this.selectedRegistroVenda = structuredClone(
      this.dividas.find(p => p.vendaID === id)!
    )    
    this.isDeleteVendaModalOpen.set(true);
  }

  loadVendas(){
    this.apiService.showVendas()
    .pipe(tap((vendas : RegistroVendas) => (this.vendas = vendas)))
    .subscribe({
      next: (res) => {
        console.log(this.vendas);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  loadDividas(){
    this.apiService.showDividas()
    .pipe(tap((dividas : RegistroVendas) => (this.dividas = dividas)))
    .subscribe({
      next: (res) => {
        console.log(this.dividas);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
