// Louvado seja o Senhor

import { Component, signal } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { TableComponent } from "../../shared/table/table.component";
import { ModalNovaVendaComponent } from "./modal-nova-venda/modal-nova-venda.component";
import { ModalRegistroDevedoresComponent } from "./modal-registro-devedores/modal-registro-devedores.component";

@Component({
  selector: 'app-vendas',
  imports: [HeaderComponent, TableComponent, ModalNovaVendaComponent, ModalRegistroDevedoresComponent],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.css'
})
export class VendasComponent {
  isNovaVendaModalOpen = signal(false);
  isDevedoresModalOpen = signal(false);

  openNovaVendaModal = () => {
    this.isNovaVendaModalOpen.set(true);
  }

  openDevedoresModal = () => {
    this.isDevedoresModalOpen.set(true);
  }
}
