// Louvado seja o Senhor

import { Component, model } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { TipoCompra } from '../../../models/vendas.model';
import { FormsModule, NgForm } from '@angular/forms';
import { InputComponent } from "../../../shared/input/input.component";
import { KeyValuePipe, NgForOf } from '@angular/common';
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-modal-nova-venda',
  imports: [ModalComponent, FormsModule, InputComponent, NgForOf, KeyValuePipe, ButtonComponent],
  templateUrl: './modal-nova-venda.component.html',
  styleUrl: './modal-nova-venda.component.css'
})
export class ModalNovaVendaComponent {
  isNovaVendaOpen = model(false);
  tipoCompraEnum = TipoCompra;

  adicionarRegistroVenda(form : NgForm){
    console.log(form.value);
  }
}
