// Louvado seja o Senhor

import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from "../../shared/header/header.component";
import { TableComponent } from "../../shared/table/table.component";
import { ModalComponent } from "../../shared/modal/modal.component";
import { InputComponent } from "../../shared/input/input.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { TipoCompra } from '../../models/vendas.model';

@Component({
  selector: 'app-estoque',
  imports: [HeaderComponent, TableComponent, ModalComponent, InputComponent, ButtonComponent, FormsModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {
  isModalOpen = signal(false);
  tipoCompraEnum = TipoCompra;

  produto = {
    nome : '',
    valorUnitario : '',
    valorKg : ''
  }

  openModal = () => {
    this.isModalOpen.set(true);
  }

  addProduto(form : NgForm){
    console.log(form.value);
  }
}
