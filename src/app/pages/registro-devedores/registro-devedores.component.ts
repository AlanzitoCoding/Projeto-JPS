// Louvado seja o Senhor

import { Component, signal } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TableComponent } from "../../shared/table/table.component";
import { ModalPagamentoComponent } from "./modal-pagamento/modal-pagamento.component";

@Component({
  selector: 'app-registro-devedores',
  imports: [HeaderComponent, ButtonComponent, TableComponent, ModalPagamentoComponent],
  templateUrl: './registro-devedores.component.html',
  styleUrl: './registro-devedores.component.css'
})
export class RegistroDevedoresComponent {
  nomeDevedor : string = 'Douglas';
  divida : number = 133;

  isPagamentoModalOpen = signal(false);

  openModal = () => {
    this.isPagamentoModalOpen.set(true);
  }
}
