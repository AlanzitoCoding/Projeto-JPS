// Louvado seja o Senhor

import { Component, afterRender, inject, signal } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { TableComponent } from "../../shared/table/table.component";
import { ModalNovaVendaComponent } from "./modal-nova-venda/modal-nova-venda.component";
import { ModalRegistroDevedoresComponent } from "./modal-registro-devedores/modal-registro-devedores.component";
import { VendasService } from '../../services/vendas.service';
import { RegistroVendas } from '../../models/vendas.model';
import { tap } from 'rxjs';
import { DatePipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-vendas',
  imports: [HeaderComponent, TableComponent, ModalNovaVendaComponent, ModalRegistroDevedoresComponent, NgForOf, DatePipe],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.css'
})
export class VendasComponent {
  isNovaVendaModalOpen = signal(false);
  isDevedoresModalOpen = signal(false);

  apiService = inject(VendasService);
  public vendas : RegistroVendas = [];
  public dividas : RegistroVendas = [];

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
