// Louvado seja o Senhor

import { Component, inject, model } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { TipoCompra } from '../../../models/vendas.model';
import { FormsModule, NgForm } from '@angular/forms';
import { InputComponent } from "../../../shared/input/input.component";
import { KeyValuePipe, NgForOf } from '@angular/common';
import { ButtonComponent } from "../../../shared/button/button.component";
import { VendasService } from '../../../services/vendas.service';

@Component({
  selector: 'app-modal-nova-venda',
  imports: [ModalComponent, FormsModule, InputComponent, NgForOf, KeyValuePipe, ButtonComponent],
  templateUrl: './modal-nova-venda.component.html',
  styleUrl: './modal-nova-venda.component.css'
})
export class ModalNovaVendaComponent {
  isNovaVendaOpen = model(false);
  apiService = inject(VendasService);
  tipoCompraEnum = TipoCompra;

  addRegistroVenda(form : NgForm){
    console.log(form.value);

    this.apiService.addNewVenda(form.value.nomeComprador, form.value.valorCompra, form.value.dataCompra, form.value.tipoCompra)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.isNovaVendaOpen.set(false);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
